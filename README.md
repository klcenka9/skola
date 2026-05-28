# 📋 Kanban Board

Moderní drag-and-drop Kanban board aplikace pro správu úkolů. Vytvořeno s vanilla JavaScriptem s trvalým uložením dat pomocí LocalStorage.

## ✨ Features

- ✅ **Drag & Drop** - Přetahujte úkoly mezi sloupci (To Do → Doing → Done)
- 💾 **Automatic Saving** - Všechny úkoly se automaticky ukládají do prohlížeče
- 📊 **Task Counters** - Počet úkolů v každém sloupci
- 🎨 **Modern Design** - Pěkné rozhraní s gradientem a animacemi
- 📱 **Responsive** - Funguje na mobilu i desktopu
- ⌨️ **Keyboard Support** - Stiskněte Enter pro přidání úkolu
- 🗑️ **Delete Tasks** - Snadné smazání jednotlivých úkolů
- 🧹 **Clear All** - Vymažte všechny úkoly jedním klikem

## 🚀 Jak spustit

### Option 1: Přímé otevření v prohlížeči
```bash
# Jednoduše otevřete index.html v prohlížeči
```

### Option 2: Spuštění s HTTP serverem
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (pokud máte http-server nainstalovaný)
npx http-server
```

Pak otevřete: `http://localhost:8000`

## 📖 Jak používat

1. **Přidání úkolu**: Napište text do vstupního pole a stiskněte Enter nebo klikněte na `+` tlačítko
2. **Přesunutí úkolu**: Klikněte a přetáhněte úkol do jiného sloupce
3. **Smazání úkolu**: Klikněte na `×` tlačítko na úkolu
4. **Vymazání všeho**: Klikněte na "Vymazat vše" v hlavičce
5. **Automatické uložení**: Vše se ukládá v LocalStorage automaticky

## 🏗️ Projektová struktura

```
kanban/
├── index.html      # HTML struktura
├── styles.css      # CSS styling
├── app.js          # JavaScript logika
└── README.md       # Dokumentace
```

## 🔧 Technologie

- **HTML5** - Struktura a semnatika
- **CSS3** - Styling, flexbox, gradients
- **Vanilla JavaScript** - Bez frameworků!
- **LocalStorage API** - Trvalé uložení dat

## 📚 Co si můžete naučit

- ✅ Drag and Drop API
- ✅ LocalStorage API
- ✅ DOM manipulace
- ✅ Event handling
- ✅ CSS Grid a Flexbox
- ✅ JSON (ukládání a načítání)

## 🎯 Rozšiřovací nápady (Pro pokročilé)

1. **Kategorie/Tagy**: Přidejte barevné tagy na úkoly
2. **Priorita**: Přidejte úrovně priority (High, Medium, Low)
3. **Deadline**: Nastavte termíny pro úkoly
4. **Search**: Vyhledávání a filtrování úkolů
5. **Dark Mode**: Tmavý režim
6. **Export/Import**: Exportujte úkoly do JSON
7. **Kolaborace**: Synchronizace s backendem (Firebase, Node.js)
8. **Barvy**: Barevné kartičky úkolů
9. **Duplikace**: Klonování úkolů
10. **Statistika**: Grafy s počty úkolů

## 📝 Poznámky

- Data se ukládají do `localStorage` - nejsou přenesena na server
- Vyčištění cache prohlížeče smaže všechna data
- Aplikace funguje offline bez internetu

## 🐛 Troubleshooting

**Úkoly se nezobrazují:**
- Ověřte, že JavaScript je povolený
- Zkontrolujte Developer Tools (F12) na chyby

**Drag-and-drop nefunguje:**
- Ujistěte se, že používáte moderní prohlížeč
- Zkuste jiný prohlížeč

**Data se neuklád:**
- Zkontrolujte, že nejste v soukromém režimu
- Ověřte dostupné místo v LocalStorage

---

**Vytvořeno pro vzdělání** 📚
