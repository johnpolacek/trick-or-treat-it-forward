/* globals window */
import CONFIG from "../app.config.js"
import firebase from "firebase/app"
import "firebase/firestore"
import firebaseServiceAccount from "./firebaseServiceAccount"

const admin = require("firebase-admin")

try {
  admin.instanceId()
} catch (err) {
  admin.initializeApp({
    credential: admin.credential.cert(firebaseServiceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
      uid: "my-service-worker",
    },
  })
}

let db = admin.firestore()

const getCount = async (demo) => {
  try {
    return db
      .collection(CONFIG.COLLECTION)
      .get()
      .then((snapshot) => {
        return { count: snapshot.size }
      })
  } catch (err) {
    return { err }
  }
}

export default getCount
