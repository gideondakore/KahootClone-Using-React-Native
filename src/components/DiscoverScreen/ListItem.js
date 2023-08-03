import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

const listItems = [
    {
        text:'Amazon Future Tech Engineers',
    },
    {
        text:'Path to growth',
    },
    {
        text:'Rebel Girls',
    },
    {
        text:"Henry Ford's hub",
    },
    {
        text:'Medicine',
    },
    {
        text:'Da Vinci',
    },
    {
        text:'College and careers',
    },
    {
        text:'Imagine Learning',
    },
    {
        text:'Human Rights',
    },
    {
        text:'Anatomy',
    },
    {
        text:'Chemistry',
    },
    {
        text:'Best of Physics',
    },
    {
        text:'Psychology',
    },
    {
        text:'Finance',
    },
    {
        text:'Engineering',
    },
    {
        text:'Programming',
    },
    {
        text:'Database',
    },
    {
        text:'Mechanics',
    },
]

const ListItem = ({text ="Kahoot Text Kahoot TextKahoot Text"}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.listText} numberOfLines={1}>{text}</Text>
      <Text style={styles.seeAll} numberOfLines={1}>See All</Text>
    </View>
  )
}

const FullList = () =>{
    return <View>
        <FlatList 
            data={listItems}
            renderItem={({item}) => <ListItem text={item.text}/>}
        />
    </View> 
}

export {ListItem}
export default FullList

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:5,
        marginRight:5,
        marginTop:20
    },
    listText:{
        fontSize:20,
        fontWeight:500,
    },
    seeAll:{
        fontSize:20,
        color:'#555757',
        fontWeight:500,
        paddingLeft:5
    }
})