
# DataCenter

> **Version:** 1.0.0  
> **Author:** Firas Dabbabi | FirasDabbabi@gmail.com  
> **Project:** Red Diamond's Internship Showcase assignment  
> **Date:**  _Thursday, Feb 2026_

DataCenter is a clean, minimal web application for browsing and managing user and post data. It provides a simple, fast, and efficient interface to explore information fetched from an external API.

## 📸 Application Screenshots

Below are key snapshots showcasing the main features and flows of the application.

----------

### 🏠 Home Page

**Overview of the main landing page**  
A clean and minimal entry point that allows users to navigate to Users and Posts sections.

![Home Page](https://fifolio.com/c/screenshots/home-page.png)

----------

### 🔗 Users Page Link (Navigation)

**Navigation link to Users page**  
Snapshot showing the Users and Posts routes accessible directly from the main navigation menu.

![Users Page Link](https://fifolio.com/c/screenshots/users-link.png)

----------

### 📝 Posts and Users Pages Route from Navigation

**Navigation link to Posts & Users pages**  
Snapshot displaying how the Posts & Users pages is accessed from the top navigation bar.

![Posts Page Route](https://fifolio.com/c/screenshots/posts-route.png)

----------

### 👥 Users Page Overview

**Complete list of users**  
Overview of the Users page displaying all users fetched from the API with structured layout and essential details.

![Users Page Overview](https://fifolio.com/c/screenshots/users-overview.png)

----------

### 🔍 Clickable Username → Single User Page

**Username as a clickable link**  
Snapshot demonstrating that each username is a clickable link that navigates to a dedicated single user details page.

![Clickable Username](https://fifolio.com/c/screenshots/clickable-username.png)

----------

### 🔎 Posts Page Search Bar

**Search functionality in Posts page**  
Snapshot highlighting the search bar used to filter posts dynamically by title.

![Posts Search Bar](https://fifolio.com/c/screenshots/posts-searchbar.png)

----------

### ⌨️ Live Search in Action

**Typing in the search bar with filtered results**  
Snapshot showing real-time filtering results while typing a post title in the search bar.

![Live Search Results](https://fifolio.com/c/screenshots/posts-search-results.png)

----------

## Features

-   **User Management**: Browse a complete list of users and view detailed profiles, including contact information, address, and company details.
    
-   **Post Exploration**: Explore all posts, view their full content, and see which user authored them.
    
-   **Live Search**: Instantly filter users by name and posts by title with a responsive search function.
    
-   **Responsive Design**: A fully responsive UI that works seamlessly across desktops, tablets, and mobile devices.
    
-   **Routing**: Utilizes React Router for seamless navigation between the home page, user lists, post lists, and detailed views.
    
-   **State Management**: Employs Zustand for efficient and lightweight global state management of loading statuses and API data.
    

## Tech Stack

-   **Framework**: [React](https://react.dev/)
    
-   **Build Tool**: [Vite](https://vitejs.dev/)
    
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
    
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
    
-   **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
    
-   **Routing**: [React Router](https://reactrouter.com/)
    
-   **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)
    
-   **Linting**: [ESLint](https://eslint.org/)
    

## Project Structure

The repository is organized to separate concerns, making it easy to navigate and maintain.

```
/src
├── components/   # Reusable React components (UI, common elements, data displays)
├── lib/          # Utility functions (e.g., cn for classnames)
├── pages/        # Top-level page components mapped to routes
├── services/     # API call functions for fetching data
└── stores/       # Zustand stores for global state management

```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
    
-   npm or another package manager
    

### Installation

1.  **Clone the repository:**
    
    ```sh
    git clone https://github.com/fifolio/RedDiamond.git
    cd RedDiamond
    
    ```
    
2.  **Install dependencies:**
    
    ```sh
    npm install
    
    ```
    
3.  **Set up environment variables:**  
    Create a `.env` file in the root of the project and add the following variables. This project is configured to work with the JSONPlaceholder API.
    
    ```env
    VITE_USERS_API_URL=https://jsonplaceholder.typicode.com/users
    VITE_POSTS_API_URL=https://jsonplaceholder.typicode.com/posts
    
    ```
    
4.  **Run the development server:**
    
    ```sh
    npm run dev
    
    ```
    
    The application will be available at `http://localhost:5173`.
    

## Available Scripts

The following scripts are available in the `package.json`:

-   `npm run dev`: Starts the development server with hot-reloading.
    
-   `npm run build`: Compiles and bundles the application for production.
    
-   `npm run lint`: Lints the TypeScript and TSX files.
    
-   `npm run preview`: Serves the production build locally for previewing.
    
-   `npm run test`: Runs the test suite using Vitest.
    
-   `npm run test:ui`: Runs the test suite with the Vitest UI for an interactive experience.
    
-   `npm run test:coverage`: Generates a test coverage report.

## ⚠️ Environment Variables Notice

In a real production environment, the `.env` file **must always be included inside the** `.gitignore` **file** to prevent exposing sensitive configuration values.

For the purpose of demonstration and this project showcase, I intentionally left the environment variables publicly accessible so reviewers can run the project immediately without additional setup.

⚠️ This approach is strictly for demo purposes and should not be followed in real-world production applications.