import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types.js';
const INITIAL_STATE = { 
		email: '',
		password: '',
		user: null,
		error: '',
		loading: false
		};

export default (state = INITIAL_STATE, action) =>{
	switch(action.type){
		case EMAIL_CHANGED:
				console.log(action);
				return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
				console.log(action);
				return { ...state, password: action.payload };
		case LOGIN_USER_SUCCESS:
				console.log(action);
				return { ...state,...INITIAL_STATE, user: action.payload, error: 'login successful' };
		case LOGIN_USER_FAIL:
				console.log(action);
				return { ...state, error: action.payload, password: '', loading: false };
		case LOGIN_USER:
				console.log(action);
				return { ...state, loading: true , error: ''};
		default:
			return state;
	}
};