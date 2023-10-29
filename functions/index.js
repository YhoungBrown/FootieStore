/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/** const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");*/

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.recordSignUpDate = functions.auth.user().onCreate((user) => {
  const uid = user.uid;
  const signUpDate = new Date();

  // Store the sign-up date in Firestore or Realtime Database
  const db = admin.firestore();
  return db.collection("users").doc(uid).set({signUpDate}, {merge: true});
});
