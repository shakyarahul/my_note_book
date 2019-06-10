/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, TextInput, Image, View, ScrollView,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { SearchBar } from './common';
class Profile extends Component{
	render() {
	return (
		    <ScrollView style={{flex:1,backgroundColor:'#000',paddingTop:20}}>
				<View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
					<Image source={require('./../img/logo/Logo.png')}></Image>
				</View>
                <SearchBar label="You can search here..."></SearchBar>
                <View style={{flex:2,flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingTop:20}}>                    
                        <Image style={{borderRadius:100, width:90, height:100}} source={require('./../img/profile/1.jpg')}></Image>
                        <Image style={{borderRadius:100, width:90, height:100}} source={require('./../img/profile/1.jpg')}></Image>
                        <Image style={{borderRadius:100, width:90, height:100}} source={require('./../img/profile/1.jpg')}></Image>
				</View>
				<View style={{flex:15,justifyContent:'center',alignItems:'center',borderWidth:1,margin:10,padding:10,borderColor:'#fff',borderStyle:'solid'}}>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>Date Of Birth</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="yyyy-mm-dd"></TextInput>
                    </View>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>Affilation</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="Eg: Tribhuvan University"></TextInput>
                    </View>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>College</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="Eg: Nagarjuna College of IT"></TextInput>
                    </View>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>Level</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="Eg: Bachelor"></TextInput>
                    </View>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>Programme</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="Eg: Bachelor in Information Management"></TextInput>
                    </View>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>Semester</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="Eg: 2nd Semester"></TextInput>
                    </View>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>Section</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="Eg: A"></TextInput>
                    </View>
                    <View>
                        <Text style={{fontSize:25, color:'#FFFFF0'}}>Mobile</Text>
                        <TextInput style={{width:300,borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder="XXXXXXXXXX"></TextInput>
                    </View>
                    <View>
                    <TouchableOpacity style={{margin:1,width:"50%","backgroundColor":"#f00",padding:10}}><Text>Update Profile</Text></TouchableOpacity>
                    </View>
                </View>
			</ScrollView>
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

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Profile);