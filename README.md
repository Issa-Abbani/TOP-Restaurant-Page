# TOP Restaurant Page

A dynamic, JavaScript-driven restaurant website built to practice and apply modern web development concepts like Webpack, dynamic HTML generation, and modular JavaScript architecture.

## Demo

![Restaurant Page Screenshot](./src/assets/images/Screenshot%202025-08-14%20201406.png)
![Restaurant Page Screenshot](./src/assets/images/Screenshot%202025-08-14%20201417.png)
![Restaurant Page Screenshot](./src/assets/images/Screenshot%202025-08-14%20201424.png)

View the live demo here: [https://issa-abbani.github.io/TOP-Restaurant-Page/](https://issa-abbani.github.io/TOP-Restaurant-Page/)

## Features

- **Dynamic HTML Generation**: All content is rendered via JavaScript, simulating a single-page application (SPA) architecture.
- **Webpack Integration**: Utilizes Webpack for bundling, enabling efficient asset management and optimization.
- **Modular JavaScript**: Code is split into modules for better maintainability and scalability.
- **Responsive Design**: Ensures the website is usable across various devices and screen sizes.

## Technologies Used

- **HTML5**: Structure and semantics.
- **CSS3**: Styling with a focus on responsiveness.
- **JavaScript (ES6+)**: Core functionality and DOM manipulation.
- **Webpack**: Module bundler for JavaScript and assets.
- **Babel**: Transpiles modern JavaScript to ensure compatibility across browsers.

## Installation

Clone the repository:

```bash
git clone https://github.com/Issa-Abbani/TOP-Restaurant-Page.git
cd TOP-Restaurant-Page

## Install Dependencies
-npm install
-npm start
-npm run build


## Project Structure
TOP-Restaurant-Page/
├── dist/                  # Compiled and minified files for production
├── src/                   # Source files
│   ├── js                 # Javascript file
│   ├── template.html      # template html
│   ├── styles/            # CSS files
│   └── assets/            # Images, fonts, etc.
├── .gitignore             # Specifies files to ignore in version control
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Exact versions of installed packages
└── webpack.config.js      # Webpack configuration file
