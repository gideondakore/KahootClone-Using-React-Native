import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import ThemeModalToggle from './ThemeModalToggle';

import { Feather } from '@expo/vector-icons';

const ThemeMainModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View style={styles.wrapper}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.modalButton]}>
          <View style={styles.modalNav}>
            <Pressable style={styles.btnCancel} onPress={() => setModalVisible(!modalVisible)}>
              <Feather name="x" size={30} color="white" />
            </Pressable>
            <Pressable style={styles.createKahoot} onPress={() => console.log('pressed')}>
              <View style={styles.createKahootView}>
                <Text style={styles.createKahootText}>Theme</Text>
              </View>
            </Pressable>
          </View>
          <ThemeModalToggle />
          <View style={styles.modalBody}></View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundColor: '#2b332d',
    // backgroundColor: 'red',

    height: '100%',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },

  modalNav: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    backgroundColor: '#3b3d3b',

    width: '100%',
    height: '13.5%',

    // justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 15,
    // marginBottom: 50,
  },

  createKahoot: {
    flexDirection: 'column',
    height: 30,
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 120,
    // backgroundColor: 'green',
  },
  createKahootView: {
    // backgroundColor: 'yellow',
  },
  createKahootText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  modalBody: {
    // backgroundColor: 'yellow',
    // backgroundColor: '#2b332d',

    width: '100%',
    height: '29%',
    marginTop: '2.5%',
    // marginHorizontal: '2.5%',
    paddingHorizontal: 7,
    flexDirection: 'column',
  },
  titleTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    // backgroundColor: 'yellow',
  },
});

export default ThemeMainModal;
