# Vue Starter Template. Composition API.

[RU lang](https://github.com/AlexHiriavenko/Vue-Template-Starter/blob/main/ReadMeRu.md)

#### Vue Starter project on Vite for a quick start in developing Vue applications using the Composition API.

#### If you want to start from a clean slate, use the "initial" branch.

#### The project includes not only components and views, but also examples of working with:

- pinia (stores),
- routing and nested routes, access to pages based on roles,
- directives,
- composables,
- ready-to-use Vuetify components (everything prefixed with "v-", such as v-container).

#### Simply remove unnecessary parts and start development from the stage that suits your needs.

## URL:

https://alexhiriavenko.github.io/Vue-Template-Starter/

## Running the Project

- `npm i`

- `npm run dev`

- In the terminal, type the letter "o" and press enter. (o - open)

## Deployment

- In the `vite.config.js` file, set the repository name for the `base` option, for example: <br>
  `base: '/Vue-Template-Starter/',`

- Run the command `npm run deploy`. After a short while (usually 3 minutes), your site will be available at: <br>
  `https://exampleuser.github.io/RepositoryName/` <br>
  for example: <br>
  `https://alexhiriavenko.github.io/Vue-Template-Starter/`

## The project uses the following technologies and tools:

- **vue-router**: Enables the creation of SPA (single-page applications) where page transitions occur without reloading through dynamic URL changes. With vue-router, you can set up various component routes and manage application state and navigation.

- **pinia**: A state management library providing a simple and flexible way to centrally store data and manage application state. It allows for easy data sharing between components while maintaining convenience and performance.

- **Vuetify**: A component library based on Material Design principles. It provides pre-styled components, helping to speed up development with responsive design and a variety of themes for UI components.

- **@mdi/font**: A font library version of Material Design Icons (MDI) that allows you to add icons with minimal styling configuration.

- **gh-pages**: An npm package that simplifies the deployment of static sites to GitHub Pages. It’s convenient for quick publication and project updates without the need to manually configure and upload files.

- **ESLint**: A linter for JavaScript that analyzes code for standards compliance and identifies potential errors and issues. It helps maintain code style and cleanliness, ensuring consistency across the project.

- **Prettier**: A code formatting tool for automatic styling.

- **unplugin-auto-import**: A plugin for automatically importing functions and modules in JavaScript and TypeScript projects. It automatically adds required imports to the code when functions like `ref`, `computed`, `useState`, and others are used, reducing the need for manually written imports.
