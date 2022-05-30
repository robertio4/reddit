# Reddit Test

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `yarn lint`

This project uses Airbnb's eslint config and typescript-eslint.

## Folder Structure

The project contains the following structure:

- ### components

It contains the reusable atomic & molecular components. Each component folder will contain the component, test & css file

- ### containers

Containers are the primary components and the entry point from which we call child or generic components

- ### hooks

Contains all custom hooks

- ### redux

It contains the redux files like actions, reducers & actionTypes. In this case the store and slices.

- ### utils

Contains utility functions that are used throughout the application.
