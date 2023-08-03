// HomeHeader.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Home Nav Left Button')}>
        <Image
          source={require('../../assets/create-icon.jpeg')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/kahoot-logo.jpg')}
        style={{ width: 100, height: 30, marginTop: 5 }}
      />
      <TouchableOpacity onPress={() => console.log('Home Nav Right Button')}>
        <Image
          source={require('../../assets/create-icon.jpeg')}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#141c16',
    paddingVertical: 50,
    paddingHorizontal: 12,
  },
});

export default HomeHeader;
