import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyCB2TP9dGmVRg8hAv-_Us73R5iDR-4FvKI",
      authDomain: "rn-masterclass-todo.firebaseapp.com",
      databaseURL: "https://rn-masterclass-todo.firebaseio.com",
      projectId: "rn-masterclass-todo",
      storageBucket: "rn-masterclass-todo.appspot.com",
      messagingSenderId: "635976787234",
      appId: "1:635976787234:web:43d9006c80a66c812ef17b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View>
        <NotesScreenComponent/>
        {/* <LoginScreenComponent/> */}
      </View>
    );
  } else {
    return (
      <View>
        {/* <NotesScreenComponent/> */}
        <LoginScreenComponent/>
      </View>
    );
  }
}
