I have taken inspiration from the [Link](https://github.com/noworneverev/react-vscode-portfolio.git) to create my portfolio.

### Changes Made

<hr>

- Updated from react framework to Vite.
  - Why? Because Vite's hot reloading and page building is blazing fast than react framework.
- Added Docker Support
- Added Airbnb coding style with eslint and prettier

<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">My Portfolio</h3>

  <p align="center">
    A vscode inspired portfolio project
    <br />
    <a href="https://github.com/noworneverev/react-vscode-portfolio/blob/main/README.md"><strong>Checkout Original Source »</strong></a>
    <br />
    <br />
    <a href="https://raktim.com.np">View Website</a>
  </p>
  </div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#docker">Docker Setup</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The project is inspired by [Visual Studio Code](https://github.com/microsoft/vscode) and [caglarturali.github.io](https://github.com/caglarturali/caglarturali.github.io). The pages of the portfolio are powered by `markdown`, which make them easy to modify or add your own contents.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Vite.js](https://vitejs.dev/)
- [Material UI](https://github.com/mui/material-ui)
- [react-markdown](https://github.com/remarkjs/react-markdown)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rakimsth/portfolio.git
   ```
2. Install NPM packages
   ```sh
   yarn
   ```
3. Enter your name in `.env.development`
   ```js
   VITE_APP_NAME=<your_name>
   ```
4. Add your markdown pages in `public/pages`
5. Add your routes in `src/app/pages/page.ts`, make sure the names of pages are consistent with markdown files.
   ```ts
   export const pages = [
     { index: 0, name: 'overview.md', route: '/overview' },
     { index: 1, name: 'skills.md', route: '/skills' },
     { index: 2, name: 'experience.md', route: '/experience' },
     { index: 3, name: 'education.md', route: '/education' },
     { index: 4, name: 'projects.md', route: '/projects' },
     { index: 5, name: 'certificates.md', route: '/certificates' },
     { index: 6, name: 'accomplishments.md', route: '/accomplishments' },
   ];
   ```
6. Add your social links in `src/app/pages/link.tsx`, which will appear in both sidebar and homepage.
   ```ts
   export const links = [
     {
       index: 0,
       title: 'Find me on Github',
       href: 'https://github.com/rakimsth',
       icon: <FaGithub />,
     },
   ];
   ```
7. Runs the app in the development mode
   ```sh
   npm start
   ```
8. If you would like to deploy your own portfolio, Update .env file with the following
   ```
   VITE_APP_NAME=<your_name>
   ```

### Docker Setup

1. We have dockerfile in the project directory.
2. Build the Docker Image
   ```
   docker build -t portfolio .
   ```
3. Run the docker image using the following command
   ```
   docker run -it -d -p 80:80 portfolio
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Features

- Powered by markdown
- Dark mode and light mode available
- Closable tabs
- Collapsible explorer
- Responsive web design
- Google Analytics supported
- Auto-deploy to gh-pages with github actions ready

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Raktim Shrestha - [Personal Portfolio](https://rakimsth.com.np/) - rakimsth@gmail.com

Project Link: [https://github.com/rakimsth/portfolio](https://github.com/rakimsth/portfolio)

<p align="right">(<a href="#top">back to top</a>)</p>
