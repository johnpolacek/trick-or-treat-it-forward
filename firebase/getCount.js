/* globals window */
import firebase from "firebase/app"
import "firebase/firestore"

const serviceAccount = require("./firebase-adminsdk.json")
const admin = require("firebase-admin")

try {
  admin.instanceId()
} catch (err) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    databaseAuthVariableOverride: {
      uid: "my-service-worker",
    },
  })
}

let db = admin.firestore()

const createCheckin = async (data) => {
  try {
    return db
      .collection("checkins")
      .get()
      .then((snapshot) => {
        return { count: snapshot.size }
      })
  } catch (err) {
    return { err }
  }
}

export default createCheckin
