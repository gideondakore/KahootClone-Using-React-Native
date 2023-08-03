import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Button,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const HomeNav = () => {
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('Home Nav Left Button');
        }}
      >
        <View style={{ width: 40, height: 40 }}>
          <FontAwesome name="user-circle" size={32} color="white" />
        </View>
      </TouchableOpacity>
      <Image
        source={require('../../assets/kahoot-logo.jpg')}
        style={{ width: 100, height: 30, marginTop: 5 }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log('Home Nav Right Button');
        }}
      >
        <View style={{ width: 40, height: 40 }}>
          <MaterialIcons name="notifications" size={32} color="white" />
        </View>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
    // height: 100,
    // backgroundColor: '#191a19',

    backgroundColor: '#3b3d3b',

    // marginTop: StatusBar.currentHeight || 0,
    // marginTop: 5,
    paddingVertical: 50,
    paddingHorizontal: 12,
    height: 40,
  },
});

export default HomeNav;
