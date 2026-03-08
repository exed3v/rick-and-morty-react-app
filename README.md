# Rick & Morty Character Explorer

A React-based frontend application that consumes the Rick & Morty API and allows users to explore characters from the show with search, filters, and pagination.

This project was built to practice modern frontend development patterns such as component-based architecture, API integration, custom hooks, and UI state management.

---

## Live Demo

Live Demo: https://rick-and-morty-react-app-one.vercel.app/

---

## Features

- Character search with **debounced input**
- Filtering by **status** and **species**
- **Pagination** support
- **Loading states** for better user experience
- **Error handling** for failed API requests
- **404 page** implemented with React Router
- Responsive character grid layout

---

## Tech Stack

- React + Vite
- React Router
- Fetch API
- JavaScript (ES6+)
- CSS
- BEM CSS Architecture

---

## Technical Concepts Implemented

This project focuses on several important frontend engineering concepts:

### Custom Hooks

A custom hook (`useCharacters`) was created to separate data-fetching logic from UI components.

This improves:

- code readability
- reusability
- separation of concerns

---

### API Service Layer

API requests were abstracted into a dedicated service file.

This keeps networking logic separate from application logic.

---

### Debounced Search

A debounce mechanism was implemented using `setTimeout` and `useEffect` to prevent excessive API calls while typing in the search input.

---

### Race Condition Prevention

The application prevents outdated API responses from updating the UI by invalidating previous requests when filters or search parameters change.

---

### Clean Component Architecture

The UI was split into reusable components:
components/
Hero
CharactersGrid
CharacterCard
FiltersSidebar
Pagination
Toolbar
StateMessage

This allows the application to remain modular and maintainable.

---

### CSS Architecture

The project uses the **BEM methodology with a namespace** to keep styles scalable and avoid conflicts between components.

Example:
.rm-card
.rm-card**image
.rm-card**title

---

## Project Structure

src
├── components
│ ├── CharactersGrid
│ ├── CharacterCard
│ ├── FiltersSidebar
│ ├── Hero
│ ├── Pagination
│ ├── StateMessage
│ └── Toolbar
│
├── hooks
│ └── useCharacters.js
│
├── services
│ └── rickAndMortyApi.js
│
├── pages
│ └── Home.jsx
│ └── NotFound.jsx
│
├── styles
│ └── index.css
│ └── Home.css
│ └── Hero.css
│ └── CharacterdCard.css
│ └── FilterSidebar.css
│ └── NotFound.css
│ └── Pagination.css
│ └── StateMessage.css
│ └── Toolbar.css
│
└── App.jsx

---

## Installation

Clone the repository

- git clone https://github.com/exed3v/rick-and-morty-react-app.git

Navigate into the project

- cd rick-and-morty-explorer

Install dependencies

- pnpm install

Run the development server

- pnpm run dev

---

## API

This project uses the public **Rick and Morty API**.

https://rickandmortyapi.com/

---

## Screenshots

Add screenshots of the application here.

Recommended:

- Character grid
- Filters sidebar
- Search functionality
- 404 page

---

## Future Improvements

Possible improvements for the project:

- Character detail page
- Favorites system
- Dark / light theme toggle
- Animations and UI polish

---

## Author

Hernan Exequiel Maydana - Frontend Developer
