/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import reducers from './app/reducers';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import Router from './app/Router';

type Props = {};
class App extends Component<Props> {
	componentWillMount(){
		  // Initialize Firebase
		  const config = {
			apiKey: "AIzaSyBjlZYGVrvvcpTG3ZXw1QbusQXWYF8J0oc",
			authDomain: "my-note-book-98a2e.firebaseapp.com",
			databaseURL: "https://my-note-book-98a2e.firebaseio.com",
			projectId: "my-note-book-98a2e",
			storageBucket: "my-note-book-98a2e.appspot.com",
			messagingSenderId: "729203585968"
		  };
		  firebase.initializeApp(config);
	}
	
	render() {
	return (
		<Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
			<Router/>
		</Provider>
	);
	}
}


export default App;