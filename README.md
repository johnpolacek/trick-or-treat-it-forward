# Trick or Treat It Forward

---

## Setup Firebase

First, you will need to create a new Firebase account at [firebase.google.com](https://firebase.google.com/) then create a Web App project at the Firebase console. Under the General Settings, give your app a Public-facing name.

Get your account credentials from the Firebase console at _Project settings > Service accounts_ where you can click on Generate new private key and download the credentials as a json file. It will contain keys such as `project_id`, `client_email` and `client_id`. 

To be able to write to our Firestore cloud database, we will need to import these credentials to our serverless functions, but we do not want to upload this sensitive information into version control on Github.

To do this we can create environment variables and import those instead. This project has a `.env` file at the root of this project that you can use as a template for this.

Duplicate the `.env` and rename to `.env.build`. Set each variable to the value from the json credentials file you downloaded from Firebase. 

Because this file contains private keys for access to your Firebase project, so it should not get committed to source control. In this project, it is already excluded via `.gitignore`.

Note: Initially your Firebase account will by default have [security rules](https://firebase.google.com/docs/firestore/security/overview) that allow open access during development. These rules will expire 30 days after you sign up for an account.

## Install

Download or fork the `trick-or-treat-it-forward` project directory. From the top level of the project directory, open a terminal window and install the dependencies.

```sh
npm install
```

Run the app in a local environment.

```sh
npm run dev
```

## Deployment

For deployment, get a Vercel account at [vercel.com/signup](https://vercel.com/signup). Once you have an account, you will need to install the Now CLI:

```sh
npm install -g vercel
```

With that done, we can issue the `vercel` command. This is a new project (not existing) so we will follow the prompts to set it up for our first deployment:

```sh
vercel
```