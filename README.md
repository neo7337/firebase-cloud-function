Google Cloud Function

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

