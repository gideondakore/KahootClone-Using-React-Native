import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, Modal, SafeAreaView } from 'react-native';

const LanguageSelectionModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.btnCloseContainer}>
            <Text style={styles.langStyles}>{'English'}</Text>
            <Text style={styles.langStyles}>{'English'}</Text>
          </View>
          <Pressable style={styles.btnCancel} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textCancel}>{'Cancel'}</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
      <Pressable style={styles.buttonOpenModal} onPress={() => setModalVisible(true)}>
        <Text style={{ color: 'white' }}>{'EN'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // backgroundColor: 'red',
    // position: 'relative',
    // backgroundColor: 'blue',
    backgroundColor: '#3b3d3b',

    // width: '100%',
    // position: 'absolute',
    // borderRadius: 12,
    flexDirection: 'row',
    // right: 10,
    // top: 47,
    marginTop: 55,
    height: 40,
    width: '15%',
    justifyContent: 'center',
    marginLeft: 5,
    // paddingVertical: 2,

    // zIndex: 100,
  },
  buttonOpenModal: {
    // backgroundColor: 'green',
    backgroundColor: '#3b3d3b',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',

    // alignSelf: 'stretch',
    width: '100%',
    height: '90%',

    // backgroundColor: '#f1f1f1',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 }, // This creates an offset for the shadow
    shadowOpacity: 0.2, // This sets the opacity of the shadow
    shadowRadius: 5,
  },

  btnOpenContainer: {
    backgroundColor: 'green',
  },
  btnCloseContainer: {
    flex: 1,
    backgroundColor: '#2b332d',
    // backgroundColor: 'blue',

    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 8,
    paddingLeft: 8,
  },
  btnCancel: {
    backgroundColor: '#2b332d',
    // backgroundColor: 'blue',

    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '8%',
  },

  textCancel: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

  langStyles: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default LanguageSelectionModal;
