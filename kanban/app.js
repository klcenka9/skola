// Storage key
const STORAGE_KEY = 'kanban-tasks';

// Data structure: { todo: [], doing: [], done: [] }
let tasks = {
    todo: [],
    doing: [],
    done: []
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderAllTasks();
});

/**
 * Load tasks from LocalStorage
 */
function loadTasks() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            tasks = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading tasks:', e);
            tasks = { todo: [], doing: [], done: [] };
        }
    }
}

/**
 * Save tasks to LocalStorage
 */
function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Add new task
 */
function addTask(column) {
    const inputId = `${column}-input`;
    const input = document.getElementById(inputId);
    const text = input.value.trim();

    if (text === '') {
        alert('Prosím, napište něco do úkolu!');
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        createdAt: new Date().toLocaleString('cs-CZ')
    };

    tasks[column].push(task);
    saveTasks();
    input.value = '';
    renderAllTasks();
}

/**
 * Delete task
 */
function deleteTask(column, taskId) {
    tasks[column] = tasks[column].filter(task => task.id !== taskId);
    saveTasks();
    renderAllTasks();
}

/**
 * Render all tasks
 */
function renderAllTasks() {
    renderColumn('todo');
    renderColumn('doing');
    renderColumn('done');
    updateTaskCounts();
}

/**
 * Render tasks for specific column
 */
function renderColumn(column) {
    const container = document.getElementById(`${column}-column`);
    container.innerHTML = '';

    tasks[column].forEach(task => {
        const taskElement = createTaskElement(task, column);
        container.appendChild(taskElement);
    });
}

/**
 * Create task HTML element
 */
function createTaskElement(task, column) {
    const div = document.createElement('div');
    div.className = 'task';
    div.draggable = true;
    div.dataset.taskId = task.id;
    div.dataset.column = column;

    div.innerHTML = `
        <div class="task-content">
            <div class="task-text">${escapeHtml(task.text)}</div>
        </div>
        <button class="task-delete" onclick="deleteTask('${column}', ${task.id})" title="Smazat">×</button>
    `;

    // Drag events
    div.addEventListener('dragstart', handleDragStart);
    div.addEventListener('dragend', handleDragEnd);

    return div;
}

/**
 * Handle drag start
 */
function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    this.style.opacity = '0.6';
}

/**
 * Handle drag end
 */
function handleDragEnd(e) {
    this.style.opacity = '1';
}

/**
 * Handle drag over
 */
function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    const container = e.currentTarget;
    if (container.classList.contains('tasks-container')) {
        container.classList.add('drag-over');
    }
}

/**
 * Handle drop
 */
function handleDrop(e, targetColumn) {
    e.preventDefault();
    
    const container = e.currentTarget;
    container.classList.remove('drag-over');

    const draggedElement = document.querySelector('.task[style*="opacity"]');
    if (!draggedElement) return;

    const sourceColumn = draggedElement.dataset.column;
    const taskId = parseInt(draggedElement.dataset.taskId);

    // Move task between columns
    if (sourceColumn !== targetColumn) {
        const taskIndex = tasks[sourceColumn].findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
            const task = tasks[sourceColumn][taskIndex];
            tasks[sourceColumn].splice(taskIndex, 1);
            tasks[targetColumn].push(task);
            saveTasks();
            renderAllTasks();
        }
    }
}

/**
 * Handle keyboard press (Enter to add task)
 */
function handleKeyPress(e, column) {
    if (e.key === 'Enter') {
        addTask(column);
    }
}

/**
 * Update task counts
 */
function updateTaskCounts() {
    document.getElementById('todo-count').textContent = tasks.todo.length;
    document.getElementById('doing-count').textContent = tasks.doing.length;
    document.getElementById('done-count').textContent = tasks.done.length;
}

/**
 * Clear all tasks
 */
function clearAllTasks() {
    if (confirm('Opravdu chcete smazat VŠECHNY úkoly? Tuto akci nelze vrátit zpět.')) {
        tasks = { todo: [], doing: [], done: [] };
        saveTasks();
        renderAllTasks();
    }
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
