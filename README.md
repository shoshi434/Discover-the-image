# 🎮 Discover the Image

An interactive trivia game in Hebrew where players answer questions to reveal hidden images. The game includes three different topics: Israel, Space and Stars, and General Knowledge.

![GitHub](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [Project Description](#project-description)
- [Main Features](#main-features)
- [Project Structure](#project-structure)
- [Installation and Running](#installation-and-running)
- [How to Play](#how-to-play)
- [Technologies](#technologies)
- [Responsive Features](#responsive-features)

## 🎯 Project Description

"Discover the Image" is a unique trivia game that combines knowledge questions with an exciting visual experience. Players must answer questions correctly to remove cards covering a hidden image. The game includes a life system, tracking of wins and losses, and three different topics.

## ✨ Main Features

### 🔐 User System
- **Registration and Login**: Full user authentication system
- **Profile Management**: User data storage in localStorage
- **Score Tracking**: Save wins and losses for each user

### 🎲 Game Mechanics
- **3 Lives**: Player starts with 3 lives, each mistake reduces lives
- **9 Cards**: Each game includes 9 cards covering an image
- **Instant Feedback**: Success/failure messages after each answer
- **Shuffled Questions**: Questions are shuffled after each round

### 🌍 Three Topics
1. **Israel** - Questions about Israeli history, geography and culture
2. **Space and Stars** - Questions about the solar system, planets and space
3. **General Knowledge** - Diverse questions on various topics

### 🎨 Modern Design
- **Attractive User Interface** with pink and cyan colors
- **Smooth Animations** and hover effects
- **Fully Responsive Design** for mobile, tablet and desktop
- **Custom Fonts** from Google Fonts

## 📁 מבנה הפרויקט

```
games/
├── css/
│   ├── fastivalGames.css
│   ├── game.css              # עיצוב משחק ישראל
│   ├── gamesMenue.css
│   ├── knowledg.css          # עיצוב משחק ידע כללי
│   ├── logIn.css             # עיצוב התחברות והרשמה
│   ├── planets.css           # עיצוב משחק כוכבי לכת
│   ├── score.css
│   └── topics.css
├── html/
│   ├── festivalGames.html
│   ├── game.html             # Israel game
│   ├── gamesMenue.html
│   ├── knowledg.html         # General knowledge game
│   ├── logIn.html            # Login and registration page
│   ├── planets.html          # Planets game
│   ├── topics.html           # Topic selection
│   └── win.html              # Win/lose screen
├── js/
│   ├── arrknowledg.js        # General knowledge questions
│   ├── arrPlanets.js         # Planets questions
│   ├── game.js               # Israel game logic
│   ├── gamesMenue.js
│   ├── home.js               # Login logic
│   ├── Israel.js             # Israel questions
│   ├── knowledg.js           # General knowledge game logic
│   ├── planets.js            # Planets game logic
│   ├── score.js
│   └── topics.js
├── image/
│   ├── arrknowledg/          # General knowledge images
│   ├── game/                 # Game images
│   ├── home/
│   ├── israel/               # Israel images
│   ├── menu/
│   ├── planets/              # Planets images
│   └── topics/
└── README.md
```

## 🚀 Installation and Running

### Prerequisites
- Modern browser (Chrome, Firefox, Safari, Edge)
- No server needed - the game runs client-side

### Installation Instructions

1. **Clone the project**:
```bash
git clone https://github.com/shoshi434/Discover-the-image.git
cd Discover-the-image
```

2. **Open the file**:
```bash
# Open the file in browser
start html/logIn.html
# or
open html/logIn.html
```

3. **Start playing!** 🎮

## 🎮 How to Play

### Step 1: Login
1. Open `logIn.html`
2. **New user**: Click "to register" and sign up
3. **Existing user**: Enter username and password

### Step 2: Choose a Topic
- Select one of the three topics:
  - 🇮🇱 Israel
  - 🪐 Space and Stars
  - 📚 General Knowledge

### Step 3: Play
1. **Click on a card** - A question will appear
2. **Choose an answer** - 4 options
3. **Correct answer** ✅:
   - Card is removed
   - "Well done! Correct answer! 🎉" message
   - Part of the image is revealed
4. **Wrong answer** ❌:
   - Lose a life
   - "Oops... Wrong answer ✖" message
   - Card remains

### Win/Loss Conditions
- **Victory** 🏆: Revealing all 9 cards
- **Defeat** 💔: Losing all 3 lives

## 💻 Technologies

### Frontend
- **HTML5** - Semantic page structure
- **CSS3** - Modern styling with:
  - Flexbox for layouts
  - Media Queries for responsiveness
  - Animations & Transitions
  - Custom Properties (CSS Variables)
- **JavaScript (Vanilla)** - Logic and interface:
  - DOM Manipulation
  - Event Handling
  - LocalStorage & SessionStorage
  - Dynamic Content Generation

### External Libraries
- **Google Fonts**:
  - `Big Shoulders Display` - Titles
  - `Amatic SC` - Questions

## 🎨 Design and User Experience

### Color Palette
- **Primary Pink**: `rgba(255, 0, 153)` - Titles and borders
- **Cyan**: `#00ffff` - Buttons and highlights
- **Black**: Card backgrounds and fields
- **Transparent Gray**: `rgba(50, 50, 50, 0.5)` - Containers

### Animations
- **Pulse Effect** on buttons
- **Brightness Filter** on card hover
- **Smooth Transitions** (0.3s-0.5s)
- **Scale & Transform** effects

### Accessibility
- High contrast
- Clear and readable fonts
- Large buttons for touch
- Clear visual feedback

## 🔧 Main Code Files

### `home.js` - User Management
```javascript
// Existing user authentication
// New user registration
// Field validation
// Save to localStorage
```

### `game.js / planets.js / knowledg.js` - Game Logic
```javascript
// Game state management
// Answer checking
// UI updates
// Lives management
// Win/loss conditions
```

### `Israel.js / arrPlanets.js / arrknowledg.js` - Question Bank
```javascript
const questions = [
    {
        question: "Question?",
        options: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        answer: "The correct answer"
    }
];
```

---

Made with ❤️ in Israel

