/* This is the Firebase configuration file*/

import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyCnxuLX6AgMduDMLtSJVDNJhR8xuMNvs4Y',
  authDomain: 'nature-blog.firebaseapp.com',
  databaseURL: 'https://nature-blog.firebaseio.com/',
  projectId: 'nature-blog',
  storageBucket: 'gs://nature-blog.appspot.com/',
  messagingSenderId: '188459960333'
};

let app = Firebase.initializeApp(config);
let db = app.database();

// create a database references
const settingsRef = db.ref('settings');
const postsRef = db.ref('posts');
const usersRef = db.ref('users');

export {postsRef, usersRef, settingsRef};
