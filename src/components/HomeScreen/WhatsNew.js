import { StyleSheet, Text, View, Pressable, Image, ImageBackground, FlatList } from 'react-native';
import React from 'react';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  EvilIcons,
  Entypo,
  Feather,
} from '@expo/vector-icons';

const newItemsToDisplay = [
  {
    title: 'Events',
    backgroundImage: require('../../../assets/pexels-gerd-altmann-21696.jpg'),
    text: 'Enjoy the best educational content',
    person: {
      avatar: require('../../../assets/pexels-pixabay-220453.jpg'),
      personName: 'Myself myself',
      date: '16th June, 2023',
    },
  },
  {
    title: 'Events',
    backgroundImage: require('../../../assets/pexels-gerd-altmann-21696.jpg'),
    text: 'Enjoy the best educational content',
    person: {
      avatar: require('../../../assets/pexels-pixabay-220453.jpg'),
      personName: 'Myself myself',
      date: '16th June, 2023',
    },
  },
  {
    title: 'Events',
    backgroundImage: require('../../../assets/pexels-gerd-altmann-21696.jpg'),
    text: 'Enjoy the best educational content',
    person: {
      avatar: require('../../../assets/pexels-pixabay-220453.jpg'),
      personName: 'Myself myself',
      date: '16th June, 2023',
    },
  },
  {
    title: 'Events',
    backgroundImage: require('../../../assets/pexels-gerd-altmann-21696.jpg'),
    text: 'Enjoy the best educational content',
    person: {
      avatar: require('../../../assets/pexels-pixabay-220453.jpg'),
      personName: 'Myself myself',
      date: '16th June, 2023',
    },
  },
  {
    title: 'Events',
    backgroundImage: require('../../../assets/pexels-gerd-altmann-21696.jpg'),
    text: 'Enjoy the best educational content',
    person: {
      avatar: require('../../../assets/pexels-pixabay-220453.jpg'),
      personName: 'Myself myself',
      date: '16th June, 2023',
    },
  },
];

const NewItem = ({ title, backgroundImage, text, person }) => {
  const sampleString = text;
  return (
    <View style={styles.newItem}>
      <View>
        <Pressable>
          <ImageBackground style={styles.itemImage} source={backgroundImage}>
            <Pressable>
              <View style={styles.newItemSymbol}>
                <Feather name="share" size={30} color={'white'} />
              </View>
            </Pressable>
            <Text style={styles.itemImageText}>{title}</Text>
          </ImageBackground>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#860379',
          width: 300,
          height: 130,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <View style={{ height: 65 }}>
          <Text style={styles.newItemText}>{`${sampleString.substring(0, 90)}...`}</Text>
        </View>
        <View style={styles.avatar}>
          <Image style={styles.avatarImage} source={person.avatar} />
          <View>
            <Text style={styles.avatarName}>{person.personName}</Text>
            <Text style={styles.avatarDate}>{person.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const WhatsNew = () => {
  return (
    <View>
      <View style={styles.kahootHeader}>
        <View style={styles.kahootHeaderSub}>
          <Ionicons
            style={{ marginLeft: 10, color: 'gray' }}
            name="md-arrow-forward-circle"
            size={30}
            color={'green'}
          />
          <Text style={styles.mykahootText}>What's new</Text>
        </View>
      </View>
      <FlatList
        data={newItemsToDisplay}
        renderItem={({ item }) => (
          <Pressable>
            <NewItem
              backgroundImage={item.backgroundImage}
              person={item.person}
              text={item.text}
              title={item.title}
            />
          </Pressable>
        )}
        style={{ marginBottom: 30 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default WhatsNew;

const styles = StyleSheet.create({
  kahootHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  kahootHeaderSub: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  kahootHeaderImage: {
    height: 20,
    width: 20,
  },
  mykahootText: {
    fontSize: 25,
    fontWeight: 500,
  },
  kahootText: {
    //  fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
    fontSize: 20,
    marginRight: 20,
    color: '#454345',
  },

  newItem: {
    height: 250,
    width: 300,
    backgroundColor: '#1f2c63',
    margin: 10,
    borderRadius: 15,
  },
  itemImage: {
    height: 120,
    width: 300,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    overflow: 'hidden',

    verticalAlign: 'top',
  },
  itemImageText: {
    color: 'red',
    backgroundColor: 'white',
    margin: 10,
    fontSize: 20,
    width: 70,
    height: 30,
    borderRadius: 5,
    paddingLeft: 5,
    marginBottom: 100,
  },
  newItemSymbol: {
    backgroundColor: 'violet',
    height: 50,
    width: '15%',
    borderTopRightRadius: 15,
    marginLeft: '85%',
  },
  newItemText: {
    color: 'white',
    padding: 5,
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: '600',
  },
  avatar: {
    // backgroundColor:'red',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    margin: 7,
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
  },
  avatarName: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  avatarDate: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
});

/*
to fix
1. Position the 'event' tag properly
*/
