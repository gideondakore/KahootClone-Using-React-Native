import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import {AntDesign,Ionicons} from '@expo/vector-icons'


const Search = () => {
  return (
    <View style={{height:70 , backgroundColor :'white',}}>
        
        <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <TextInput
            style={styles.input}
            placeholder="Search for Kahoots"
            placeholderTextColor="#888"
            enablesReturnKeyAutomatically={true}
            underlineColorAndroid={'transparent'}
            />
        </View>
        
  </View>
  )
}

export default Search

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#b1adb1',
      borderRadius: 2,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop:20,
      flex:0.7,
      width:380,
      alignSelf:'center'        
    },
    icon: {
      marginRight: 10,
      
    },
    input: {
      flex: 1,
      fontSize: 16,
      color:'grey'
    },

});