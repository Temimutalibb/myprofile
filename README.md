# My Personal Portfolio

Welcome to the repository for my personal portfolio website! This project showcases my skills and work as a developer. I took a unique approach with this site, building it from the ground up to demonstrate a deep understanding of core web technologies and to have complete control over the final product.

## Project Philosophy: Why Vanilla JS?

In an ecosystem dominated by frameworks like React, I made a conscious decision to build this portfolio using vanilla JavaScript, HTML, and SCSS. This approach was chosen to avoid the potential library conflicts that can arise when integrating tools that directly manipulate the DOM, such as jQuery and Bootstrap.

My goal was to leverage the strengths of these established and powerful libraries:

*   **jQuery:** For its robust and intuitive API for handling complex animations and DOM manipulation.
*   **Bootstrap:** For its excellent, ready-to-use components, particularly for creating responsive and accessible modals.

By avoiding a virtual DOM-based framework, I could ensure seamless integration and performance while still creating a modern, interactive user experience.

### Component-Based Architecture

Inspired by modern frameworks, I structured the application in a component-like manner. The content for different sections of the site (like "About", "Projects", and "Tools") is organized into separate JavaScript files (e.g., `aboutscreen.js`, `projectscreen.js`). These files act as "chunks" or components, dynamically injecting their HTML into the main document. This keeps the codebase modular, maintainable, and easy to understand without the overhead of a large framework.

## Tech Stack

This portfolio is built with a focus on core technologies, enhanced by powerful libraries for specific tasks:

*   **Frontend:**
    *   HTML5
    *   SCSS (Sass)
    *   Vanilla JavaScript (ES6+)
*   **Libraries:**
    *   **jQuery:** Used for creating smooth animations and handling complex DOM interactions.
    *   **Bootstrap:** Primarily used for its modal component system.
*   **Build Tool:**
    *   **Vite:** For a fast development experience and optimized production builds.

## Features

*   **Fully Responsive:** A tailored experience for both mobile and large-screen desktop devices.
*   **Interactive UI:** Engaging hover effects on project and tool cards.
*   **Modular Content:** Each section is loaded dynamically, mimicking a component-based architecture.
*   **Project Showcase:** Detailed project views are presented in clean, accessible Bootstrap modals.

---

Thank you for checking out my portfolio project! I enjoyed the challenge of blending traditional and modern web development techniques to create something unique.