import React from 'react';
import { TextInput, View } from 'react-native';
const SearchBar = ({label}) => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TextInput style={{width:"80%",borderRadius:15,"backgroundColor":"#FFFFF0",padding:10}} placeholder={label}></TextInput>
        </View>
    );
}
export { SearchBar };