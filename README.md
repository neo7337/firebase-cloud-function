Google Cloud Function - Firebase

The following code helps in demonstration of the Cloud Functions in accordance with the Firebase provided by Google.
These Cloud Functions still use the GCP->Cloud Function API from your account hence it is needed to be enabled in order for you to execute a cloud function in Firebase otherwise we will not be able to deploy the function.

Here while deploying a cloud function we are provided with two choices
1. Javascript
2. Typescript

Since this is not the limitation while deplying a cloud function over the Google Cloud Platform but in case of Firebase, they provide only these two choices.
For more information about the Firebase Cloud Functions follow the link here : <a href ="https://firebase.google.com/docs/functions">Cloud Functions with Firebase</a>

Basic syntax of the function

```Javascript
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
```
Now in order to create the Cloud function in firebase it comes with it's own CLI

First we need to install the firebase tools pacakge from npm
```
npm install -g firebase-tools
```

After this is setup run the following command to login to your firebase account via CLI
```
firebase login
```

Once you are logged in, run the following command to initialise a dummy function in our workspace
```
firebase init
```

It goes through a number of steps in the CLI so chose the options wisely and appropriately.

After we have the structure ready like we see in the repository

From here index.js becomes the entry point for our cloud function and thus we can play around that.

Once we are done writing our function, deploy the function using the following command
```
firebase deploy
```