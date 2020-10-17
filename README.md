# Trick or Treat It Forward

---

## Setup Firebase

First, you will need to create a new Firebase account at [firebase.google.com](https://firebase.google.com/) then create a project at the Firebase console. Under the General Settings, give your app a Public-facing name.

Get your account credentials from the Firebase console at _Project settings > Service accounts_ where you can click on Generate new private key and download the credentials as a json file. It will contain keys such as `project_id`, `client_email` and `client_id`. Set them as environment variables in the `.env` file at the root of this project.

Additionally, the Firebase Admin SDK requires access to this json file, so move it into the `/firebase` directory. This file contains private keys for access to your Firebase project, so it should not get committed to source control. It is already excluded via `.gitignore`.

Next, add a new Web App to your project.

Duplicate the `.env` as `.env.build` and add the `FIREBASE_PRIVATE_KEY` var and set it to the value from the json credentials file you downloaded from Firebase (tt should start with `-----BEGIN PRIVATE KEY-----` and end with `\n-----END PRIVATE KEY-----\n`).

Initially your Firebase account will have [security rules](https://firebase.google.com/docs/firestore/security/overview) that allow open access during development. These rules will expire 30 days after you sign up for an account.

## Install

Download or fork the `trick-or-treat-it-forward` project directory. From the top level of the project directory, open a terminal window and install the dependencies.

```sh
npm install
```

Run the app in a local environment.

```sh
npm run dev
```

At this point you will see the app running, but the serverless api will not work until we set up Firebase.

When it comes time for deployment, we will add these environment variables to the remote environment via the console. 


## Deployment

For deployment, get a Vercel account at [vercel.com/signup](https://vercel.com/signup). Once you have an account, you will need to install the Now CLI:

```sh
npm install -g vercel
```

Next, we will use the Vercel CLI to add the secret vars for Firebase that correspond our local `.env`. _Note: for the multiline private key, you will need the `--` modifier and to enclose the value in quotes._

For the `session-secret-previous` and `session-secret-current` variables, generate your own random 32-character key unique to your app. _Note: We have namespaced our secrets with ttif so they do not overwrite any other secrets you may have for other Vercel projects._

```sh
vercel secrets add firebase-ttif-public-api-key <secret-value>
vercel secrets add firebase-ttif-project-id <secret-value>
vercel secrets add firebase-ttif-database-url <secret-value>
vercel secrets add firebase-ttif-auth-domain <secret-value>
vercel secrets add firebase-ttif-private-key -- "<secret-value>"
```

Now that we have stored these to our Vercel account, we need to create a `vercel.json` deployment config file in our root directory so that the environment can access them.

```json
{
  "env": {
    "FIREBASE_PUBLIC_API_KEY": "@firebase-ttif-public-api-key",
    "FIREBASE_DATABASE_URL": "@firebase-ttif-database-url",
    "FIREBASE_PROJECT_ID": "@firebase-ttif-project-id",
    "FIREBASE_AUTH_DOMAIN": "@firebase-ttif-client-email",
  },
  "build": {
    "env": {
      "FIREBASE_PUBLIC_API_KEY": "@firebase-ttif-public-api-key",
      "FIREBASE_AUTH_DOMAIN": "@firebase-ttif-auth-domain",
      "FIREBASE_DATABASE_URL": "@firebase-ttif-database-url",
      "FIREBASE_PROJECT_ID": "@firebase-ttif-project-id",
      "FIREBASE_PRIVATE_KEY": "@firebase-ttif-private-key",
    }
  }
}
```

With that done, we can issue the `vercel` command. This is a new project (not existing) so we will follow the prompts to set it up for our first deployment:

```sh
vercel
```