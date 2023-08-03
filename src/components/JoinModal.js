import React, { useState } from 'react';
import { View, Text, Modal, SafeAreaView, Pressable, StyleSheet, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Tabs from './Tabs';

const JoinModal = ({ isFocusedState, UpdateShareState }) => {
  //   const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.containerWrapper}>
      <View style={styles.wrapper}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isFocusedState}
          onRequestClose={() => {
            UpdateShareState(false);
            // UpdateShareState(false, 'Join');
          }}
        >
          {/* <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}> */}
          <View style={styles.modalButton}>
            <Pressable
              style={styles.btnCancel}
              onPress={() => {
                UpdateShareState(false);
                // UpdateShareState(false, 'Join');
              }}
            >
              <Feather name="x" size={30} color="white" />
            </Pressable>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{'Join game'}</Text>
            <Pressable style={styles.btnHelp} onPress={() => UpdateShareState(false)}>
              <MaterialIcons name="help-center" size={30} color="white" />
            </Pressable>

            <View></View>
          </View>
          {/* </SafeAreaView> */}
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    display: 'flex',
    flex: 1,
    // backgroundColor: '#2b332d',
    // backgroundColor: 'green',
    backgroundColor: '#3b3d3b',
    // position: 'relative',
  },
  // wrapper: {
  //   // flex: 1,
  //   // position: 'absolute',
  //   backgroundColor: 'yellow',
  //   // flexDirection: 'row',
  // },
  modalButton: {
    // flex: 1,

    justifyContent: 'space-around',
    flexDirection: 'row',
    // backgroundColor: 'blue',
    backgroundColor: '#171c18',
    height: '100%',

    // flexDirection: 'row',
    paddingTop: 20,
    marginVertical: 60,
    borderRadius: 10,
  },
  btnCancel: {
    // alignSelf: 'flex-end',
  },
});

export default JoinModal;
