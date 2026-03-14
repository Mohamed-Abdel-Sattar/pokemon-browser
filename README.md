# Pokémon Browser

A responsive **Pokédex-style browser** built with **React, TypeScript, Vite, and Styled Components**.  
The application allows users to browse Pokémon using **pagination or a load-more or infinite-scroll pattern**, and view detailed information for each Pokémon.

---

## Features

- Pokémon grid browser
- Two browsing modes
    - **Pagination view**
    - **Load More view**
    - **Infinite Scroll view**
- Dedicated **Pokémon details page**
- Responsive UI
- Error handling
- Loading states
- Snackbar notifications
- Back to top button
- Axios API client with a retry mechanism
- Environment variable support
- Clean project architecture

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI library |
| TypeScript | Type safety |
| Vite | Build tool |
| Styled Components | Styling |
| React Router | Routing |
| Axios | HTTP client |
| Notistack | Snackbar notifications |

---

## API

The application uses the **PokeAPI**.

### List Pokémon

GET https://pokeapi.co/api/v2/pokemon?limit=10&offset=0

### Get Pokémon details

GET https://pokeapi.co/api/v2/pokemon/{id}

Documentation:  
https://pokeapi.co/docs/v2

---


## Environment Variables

Environment variables are loaded using **Vite's `.env` system**.

Example `.env` file:
`VITE_BASE_URL=https://pokeapi.co/api/v2`


Usage in code:

```ts
const BASE_URL = import.meta.env.VITE_BASE_URL;
```
---


## Installation

```bash
git clone https://github.com/Mohamed-Abdel-Sattar/pokemon-browser.git
```

### Install dependencies:
```bash
yarn install
```
---
## Running the Application

### Start the development server:
```bash
yarn start
```

### The application will be available at:

`http://localhost:5173`

---

## Build

### Create a production build:

```bash
yarn build
```

### Preview production build:

```bash
yarn preview
```

---

## Linting

### Run ESLint:

```bash
yarn lint
```

---

## Formatting

### Run Prettier:

```bash
yarn format
```

---

## UI Behavior

### Pagination Mode

- Displays Pokémon in pages
- Includes navigation controls
- Shows page summary

### Load More Mode

- Incrementally loads Pokémon
- Maintains previously loaded results

### Infinite Scroll Mode

- Incrementally loads Pokémon when scrolling
- Maintains previously loaded results

### Details Page

Displays:

- Pokémon image
- Name and ID
- Height and weight
- Abilities and Types
- Base stats with progress bars
- Base Experience

---

## Error Handling

Errors are handled globally through the custom **RestClient**:

- Displays snackbar notifications
- Logs errors
- Retries transient failures

---

## Loading States

Loading indicators are shown while fetching API data:

- Spinner component
- Skeleton loaders

---

## Retry Mechanism

Axios requests use retry logic for failures

Retries use **exponential backoff**.

---

## Accessibility

- Semantic HTML
- Button labels
- Twitter and Facebook metadata

---

## Author

Mohamed Abdel Sattar  
Frontend Engineering Lead

---

## License

This project is for assessment/demo purposes.