import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from './types';
import firebase from '@firebase/app';
import { Actions } from 'react-native-router-flux';
import '@firebase/auth';

export const emailChanged = (text) =>{
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};
export const passwordChanged = (text) =>{
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};
export const loginUser =({email, password}) => {
	return (dispatch) => {
		dispatch({ type:LOGIN_USER });
		firebase.auth().signInWithEmailAndPassword(email,password)
		.then(user => {
				dispatch({type:LOGIN_USER_SUCCESS, payload: user});
				Actions.main();
			})
			.catch(() =>{
				firebase.auth().createUserWithEmailAndPassword(email,password)
				.then(user=>{
					dispatch({type:LOGIN_USER_SUCCESS, payload: user});
					Actions.userProfile();
				}).catch(()=>{
					dispatch({type:LOGIN_USER_FAIL, payload: "Authentication Failed"})
				})
			});
	}
}