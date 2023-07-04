import firebase, { initializeApp } from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyD54OSo9ElnbWY1ocH4w9O5RqhHXFdLiVE",
  authDomain: "tarefas-5ef31.firebaseapp.com",
  databaseURL: "https://tarefas-5ef31-default-rtdb.firebaseio.com",
  projectId: "tarefas-5ef31",
  storageBucket: "tarefas-5ef31.appspot.com",
  messagingSenderId: "502323952016",
  appId: "1:502323952016:web:5531b44515904841235b15"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase