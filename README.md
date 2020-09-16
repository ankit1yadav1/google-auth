# google-auth

## Project Info

This is the project for storing the user information from the google auth.
This projet is hosted on the url - https://google-auth-react.herokuapp.com/

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8080] to view it in the local.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `App.js`

we have two pages created under the src/pages one for login and other for listing

### `Components`
we have used the React Hooks to maintains the states in 
List Component - Used for listing the users
Login Component - Used for showing the login screen
Header Component - Used for header in listing page

### `Login Component`
 This component logs in the user and maitain their session and data using the localstorage and the sessionstorage concepts.
 Also we call our api to store the user information.

### `List Component`
  This component is used to list the users, the information is pulled form an api for the users also only if the user is Authenticated that the list page is shown to user, otherwise it routes back to login page.
  Also only Auhtorized user can delete his own data and no other can delete someone else's data. And click on dlete also triggers the api call to delete the data from the database.

### `Header Component`
  This component fetches the data from the local storage and displays loggedIn user info, also there is logout button, which clears all the storage and drives back the user to Login page.
