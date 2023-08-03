import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LibraryLineText = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.left} numberOfLines={1}>Explore a library of exclusive, premium collections </Text>
        <Text style={styles.right}>See All</Text>
    </View>
  )
}

export default LibraryLineText

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        // flex:1,
        gap:10
    },
    left:{
        textAlign:'left',
        // height:20,
        marginLeft:2,
        fontSize:14,
        fontWeight:500
    },
    right:{
        textAlign:'right',
        height:20,
        color:'#b1adb1',
        fontSize:20,
        fontWeight:600
    }
})