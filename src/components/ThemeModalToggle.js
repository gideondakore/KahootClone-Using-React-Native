//ThemeModalToggle

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';

const DATA = [
  { key: '1', imageName: require('../../assets/image-1.png') },
  { key: '2', imageName: require('../../assets/image-2.jpg') },
  { key: '3', imageName: require('../../assets/image-3.jpeg') },
];

const renderImage = ({ item }) => {
  return (
    // <View style={styles.imageContainer}>
    <Image style={styles.imageStyle} source={item.imageName} />
    // </View>
  );
};

const ThemeModalToggle = () => {
  const [isActiveButton1, setIsActiveButton1] = useState(true);
  const [isActiveButton2, setIsActiveButton2] = useState(false);

  const toggleButton1 = () => {
    setIsActiveButton1(true);
    setIsActiveButton2(false);
  };

  const toggleButton2 = () => {
    setIsActiveButton1(false);
    setIsActiveButton2(true);
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, isActiveButton1 ? styles.activeButton : null]}
          onPress={toggleButton1}
        >
          <Text style={[styles.buttonText, isActiveButton1 ? styles.activeButtonText : null]}>
            Mobile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isActiveButton2 ? styles.activeButton : null]}
          onPress={toggleButton2}
        >
          <Text style={[styles.buttonText, isActiveButton2 ? styles.activeButtonText : null]}>
            Desktop
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mobileDisplay}>
        <View style={styles.flatListScreen}>
          <FlatList data={DATA} renderItem={renderImage} horizontal={true} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    // backgroundColor: 'green',

    // width: '80%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
    width: '80%',
    height: 80,
    paddingTop: 15,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    // backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeButton: {
    backgroundColor: '#0c5bb0',
  },
  activeButtonText: {
    fontWeight: 'bold',
  },

  mobileDisplay: {
    backgroundColor: 'white',
    height: '65%',
    width: '60%',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  flatListScreen: {
    backgroundColor: '#2b332d',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 205,
    height: 360,
    resizeMode: 'cover',
    // borderRadius: 10,
  },
  //   imageContainer: {
  //     width: '100%',
  //     height: '100%',
  //     // backgroundColor: 'pink',
  //   },
});

export default ThemeModalToggle;
