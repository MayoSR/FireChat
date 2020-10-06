import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBonggCCTTwWx6v7PsQCMLCUC-5EE5m05s",
  authDomain: "firechat16-7b8be.firebaseapp.com",
  databaseURL: "https://firechat16-7b8be.firebaseio.com",
  projectId: "firechat16-7b8be",
  storageBucket: "firechat16-7b8be.appspot.com",
  messagingSenderId: "994590756887",
  appId: "1:994590756887:web:0c2710cef270bf42138c52",
  measurementId: "G-GHW0XHJWXZ"
})

const auth = firebase.auth();
const db = firebaseApp.firestore();

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        {user ? <ChatRoom db={db} auth={auth} /> : <SignIn auth={auth}/>}
      </header>
    </div>
  );
}


export default App;
