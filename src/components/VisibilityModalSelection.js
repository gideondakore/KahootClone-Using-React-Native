import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const VisibilityModalSelection = ({
  visibilityStateFunc,
  visibilityStringFunc,
  visibleString,
  visibilityState,
}) => {
  const [visibleStringModal, setVisibleStringModal] = useState(visibleString);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // console.log('keyboard dismissed');
        visibilityStringFunc(visibleStringModal);
        visibilityStateFunc(false);
      }}
    >
      <SafeAreaView
        style={[visibilityState ? styles.mainWrapper : styles.mainWrapperDisplayToggle]}
      >
        <View style={styles.Wrapper}>
          <View style={styles.textInputWrapper}>
            <Pressable
              style={styles.privateStyle}
              onPress={() => {
                setVisibleStringModal('Private');
                visibilityStringFunc('Private');
                visibilityStateFunc(false);
              }}
            >
              <Feather name="user" size={24} color="white" />
              <View style={styles.privateTextStyles}>
                <Text style={styles.mainTextStyle}>Private</Text>
                <Text style={styles.subTextStyle}>People you share it can find it</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.publicStyle}
              onPress={() => {
                setVisibleStringModal('Public');
                visibilityStringFunc('Public');
                visibilityStateFunc(false);
              }}
            >
              <Entypo name="globe" size={24} color="white" />
              <View style={styles.publicTextStyles}>
                <Text style={styles.mainTextStyle}>Public</Text>
                <Text style={styles.subTextStyle}>Everyone can find it</Text>
              </View>
            </Pressable>
          </View>

          <View style={styles.cancelView}>
            <Pressable
              style={styles.cancelPressable}
              onPress={() => {
                visibilityStringFunc(visibleStringModal);
                visibilityStateFunc(false);
              }}
            >
              <Text style={styles.cancelStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundColor: 'green',
    height: 600,
    position: 'absolute',
    zIndex: 500,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    // display: 'none',
  },
  mainWrapperDisplayToggle: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundColor: 'green',
    height: 600,
    position: 'absolute',
    zIndex: 500,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    display: 'none',
  },

  Wrapper: {
    // backgroundColor: 'red',
    // backgroundColor: '#3b3d3b',
    width: '95%',
    height: '25%',
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  textInputWrapper: {
    flexDirection: 'column',
    // backgroundColor: 'blue',
    backgroundColor: '#3b3d3b',
    height: '68%',
    width: '100%',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  privateStyle: {
    width: '100%',
    height: '45%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // backgroundColor: 'yellow',
    backgroundColor: '#3b3d3b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  privateTextStyles: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },

  publicStyle: {
    width: '100%',
    height: '45%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // backgroundColor: 'blue',
    backgroundColor: '#3b3d3b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },

  publicTextStyles: {
    flexDirection: 'column',
    marginHorizontal: 15,
  },

  cancelPressable: {
    // backgroundColor: 'purple',
    backgroundColor: '#3b3d3b',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cancelStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  cancelView: {
    backgroundColor: 'pink',
    height: '28%',
    borderRadius: 5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  mainTextStyle: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'white',
  },

  subTextStyle: {
    fontSize: 14,
    // fontWeight: 'bold',
    color: 'grey',
  },
});
export default VisibilityModalSelection;
