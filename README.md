# Where is my test tube

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## General concept of the application:

The user has some predefined data (sorry no, time to build adding new content).
Tubes are being held in containers. A container can be anything: a new rack,
a whole storage compartment, a lab, or even a lab worker. Users can change a tube location,
but also a user can change the location of a whole container of tubes. Entering the tube
ID (for example by scanning the barcode) a user can get information about where it is.

## Dev thought

I built it with CRA. I left default scripts and focused on code. Also I added only two tests for one component. I know there should be more. I just didn't want to invest too much time into it.
There could be few errors but only for some edge cases. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
