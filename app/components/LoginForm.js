/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { SearchBar } from './common';
class LoginForm extends Component{
	onEmailChange(text){
		this.props.emailChanged(text);
	}
	
	onPasswordChange(text){
		this.props.passwordChanged(text);
	}
	onButtonPress(){
		const {email, password} = this.props;
		this.props.loginUser({email, password});
	}
	renderError(){
		if(this.props.error){
			return(
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
			);
		}
	}
	renderSpinner(){
		if(this.props.loading){
			return <ActivityIndicator size='large' />
		}
		return <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={{margin:1,width:"25%","backgroundColor":"#f00",padding:10}}><Text>Log In</Text></TouchableOpacity>;	
	}
	render() {
	return (
		<View style={{flex:1,backgroundColor:'#000'}}>
				<SearchBar label="Search here..."></SearchBar>
				<View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
					<Image source={require('./../img/logo/Logo.png')}></Image>
				</View>
				
				<View style={{flex:2,alignItems:'center'}}>
					<TextInput value={this.props.email} onChangeText={this.onEmailChange.bind(this)} style={{margin:1,width:"50%",borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="email@example.com"></TextInput>
					<TextInput value={this.props.password} secureTextEntry onChangeText={this.onPasswordChange.bind(this)} style={{margin:1,width:"50%",borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="Password"></TextInput>
					<View>
						{this.renderError()}
					</View>
					<View>
						{this.renderSpinner()}
					</View>
				</View>
			</View>
		);
	}
}
const styles = {
	errorTextStyle:{
		fontSize:20,
		alignSelf:'center',
		color:'red'
	}
}
const mapStateToProps = ({auth}) => {
	const {email, password, error, loading} = auth;
	return {email, password, error, loading};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);