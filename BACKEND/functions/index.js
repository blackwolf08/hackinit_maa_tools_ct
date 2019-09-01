const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user.js');
const sendPlaylist = require('./playlist.js');
const sendMeal = require('./mealPlan.js');
const chatReply = require('./chatbot.js');
const schemes = require('./schemes.js');
const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hypnos-backend-a41f5.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.sendPlaylist = functions.https.onRequest(sendPlaylist);
exports.sendMeal = functions.https.onRequest(sendMeal);
exports.chatReply = functions.https.onRequest(chatReply);
exports.schemes = functions.https.onRequest(schemes);