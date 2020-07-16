import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyCQKtSTuMp2sAvcwv0NyhRJJDidPgQbWZA',
  authDomain: 'das-conf.firebaseapp.com',
  databaseURL: 'https://das-conf.firebaseio.com',
  projectId: 'das-conf',
  storageBucket: 'das-conf.appspot.com',
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)

export const db = firebase.firestore()

export const realtimeDB = firebase.database()

export const storage = firebase.storage()

export default firebase
