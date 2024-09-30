## How to set up Firebase config

The easiest way to find firebaseConfig is to:

-   go to the Project overview page in the Firebase console
-   click the "+" in the top bar
-   click "</>" button to add a web app

You'll get a pop up with the values you need.

## Authentication

the main logic is:

1. In `Navbar.tsx` we import GoogleAuthProvider library, we need to use build-in methods to retrieve google user entity. We interested in `token` value. Then we provide toke to `useContext(AuthContext);`

2. In `AuthContext.tsx` we parse received earlier token and retrieve `user_id`

3. In `App.tsx` we match retrieved user_id with one stored in .env file, if they match we assume user is logged

## Global Environment

Here is the list of mandatory variables

```bash
DISABLE_ESLINT_PLUGIN=true
TSC_COMPILE_ON_ERROR=true

REACT_APP_EXPIRY_PERIOD=3600000
REACT_APP_USER_ID=

REACT_APP_FIREBASE_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID
```
