import firebase from "firebase";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5agh1v2oF9skWpfzaoxHqmcgwluDHw8o",
  authDomain: "auth-developmet-fa38a.firebaseapp.com",
  projectId: "auth-developmet-fa38a",
  storageBucket: "auth-developmet-fa38a.appspot.com",
  messagingSenderId: "765177999086",
  appId: "1:765177999086:web:9ebfc81fc8a97bebae0dff"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

//Calling the function (You can call it normally then)

export { storage, firebase as default };
