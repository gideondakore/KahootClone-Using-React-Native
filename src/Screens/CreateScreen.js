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
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// import { Brightness } from 'expo-brightness';
import * as Brightness from 'expo-brightness';
import CreateTextInputModal from '../components/CreateTextInputModal';
import VisibilityModalSelection from '../components/VisibilityModalSelection';

const CreateScreen = ({ isFocusedState, UpdateShareState }) => {
  const [KeyboardVisible, setKeyboardVisible] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [visibilityState, setVisibilityState] = useState(false);
  const [visibleString, setVisibleString] = useState('Private');
  const MAX_VALUE = 95;

  const handleTextChange = (text) => {
    setTextInputValue(text);
    setTextCount(textInputValue.length + 1);
  };

  const dismissKeyboard = () => {
    console.log('touchablewithoutfeedback');
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const keyboardVisiblereturn = (newBoolean) => {
    setKeyboardVisible(newBoolean);
  };

  const visibilityStateFunc = (newBoolean) => {
    setVisibilityState(newBoolean);
    // setVisibleString(newString);
  };
  const visibilityStringFunc = (newString) => {
    // setVisibilityState(newBoolean);
    setVisibleString(newString);
  };
  ///////////////////////

  // const backgroundColor = KeyboardVisible ? 'rgba(0, 0, 0, 0.5)' : '#2b332d';

  return (
    <View style={styles.wrapper}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFocusedState}
        onRequestClose={() => {
          UpdateShareState(false);
        }}
      >
        <CreateTextInputModal
          keyboardVisiblereturn={keyboardVisiblereturn}
          keyboardVisible={KeyboardVisible}
          handleTextChange={handleTextChange}
          MAX_VALUE={MAX_VALUE}
          textCount={textCount}
          textInputValue={textInputValue}
        />

        <VisibilityModalSelection
          visibilityStateFunc={visibilityStateFunc}
          visibilityStringFunc={visibilityStringFunc}
          visibleString={visibleString}
          visibilityState={visibilityState}
        />
        <View style={[styles.modalButton]}>
          {/* <View style={styles.mainModalWrapper}> */}
          <View style={styles.modalNav}>
            <Pressable style={styles.btnCancel} onPress={() => UpdateShareState(false)}>
              {/* <Feather name="x" size={30} color="white" /> */}
              <Text style={styles.titleTxt}>Cancel</Text>
            </Pressable>
            <Pressable style={styles.createKahoot} onPress={() => UpdateShareState(false)}>
              <View style={styles.createKahootView}>
                <Text style={styles.createKahootText}>Create Kahoot</Text>
              </View>
              <View style={styles.createKahootViewBar}></View>
            </Pressable>
            <Pressable style={styles.btnHelp} onPress={() => UpdateShareState(false)}>
              <Text style={styles.titleTxt}>Save</Text>
            </Pressable>
          </View>
          <View style={styles.modalBody}>
            <Pressable
              style={styles.imageButton}
              onPress={() => {
                console.log('button Press');
              }}
            >
              <View style={styles.imageButtonView}>
                <FontAwesome name="photo" size={45} color="white" />
                <Text style={{ fontSize: 15, color: 'white' }}>Add Cover Image</Text>
              </View>
            </Pressable>

            <View style={styles.titleView}>
              <Text style={styles.titleTxt}>Title</Text>

              <View style={styles.titleTextInputSettings}>
                <View
                  style={[
                    !KeyboardVisible ? styles.textInputWrapper : styles.textInputWrapperTransition,
                  ]}
                >
                  <TextInput
                    style={styles.titleTextInput}
                    value={textInputValue}
                    placeholder="Enter title"
                    placeholderTextColor={'white'}
                    onChangeText={handleTextChange}
                    maxLength={MAX_VALUE}
                    // ref={textInputRef}
                  />
                  <Text style={styles.textCount}>
                    {/* {textInputValue === '' && KeyboardVisible ? MAX_VALUE : MAX_VALUE - textCount} */}
                  </Text>
                </View>
                <View style={styles.textInputIcon}>
                  <Feather name="settings" size={24} color="white" />
                </View>
              </View>
            </View>
            <View style={styles.themeView}>
              <Text style={styles.titleTxt}>Theme</Text>

              <Pressable
                style={styles.themePressable}
                onPress={() => {
                  console.log('Pressable pressed');
                }}
              >
                <View style={styles.themeViewViolet}></View>
                <Text style={styles.themeText}>Standard</Text>
                <MaterialIcons name="keyboard-arrow-down" size={50} color="white" />
              </Pressable>
            </View>

            <View style={styles.visibilityView}>
              <Text style={styles.titleTxt}>Visibility</Text>

              <Pressable
                style={styles.visibilityPressable}
                onPress={() => {
                  console.log('Pressable pressed Visibility');
                  return setVisibilityState(true);
                }}
              >
                <View style={styles.visibilityViewUser}>
                  {visibilityState ? (
                    <Entypo name="globe" size={24} color="white" />
                  ) : (
                    <Feather name="user" size={24} color="white" />
                  )}
                </View>
                <Text style={styles.visibilityText}>{visibleString}</Text>
                <MaterialIcons name="keyboard-arrow-down" size={50} color="white" />
              </Pressable>
            </View>
            <View style={styles.QuestionsWrapper}>
              <Text style={styles.titleTxt}>Questions(0)</Text>
            </View>

            <Pressable
              style={styles.addQuestions}
              onPress={() => {
                console.log('Add Questions');
              }}
            >
              <Text style={styles.titleTxt}>Add Question</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// const styles = StyleSheet.create({
//   containerWrapper: {
//     flex: 1,
//   },
// });

const styles = StyleSheet.create({
  // containerWrapper: {
  //   flex: 1,
  //   backgroundColor: 'blue',
  // },
  // wrapper: {
  //   // flexDirection: 'row',
  //   flex: 1,
  //   backgroundColor: 'blue',
  // },
  // mainModalWrapper: {
  //   // flex: 1,
  //   backgroundColor: 'green',
  //   // position: 'absolute',
  //   height: '100%',
  //   zIndex: 300,
  // },
  modalButton: {
    // flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    backgroundColor: '#2b332d',

    height: '100%',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },

  modalNav: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    backgroundColor: '#3b3d3b',

    width: '100%',
    height: '13.5%',

    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 15,
    // marginBottom: 50,
  },

  createKahoot: {
    flexDirection: 'column',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
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
  createKahootViewBar: {
    backgroundColor: 'black',
    width: 230,
    height: 5,
    borderRadius: 10,
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
  imageButton: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'green',
    backgroundColor: '#3b3d3b',

    // marginLeft: 2.5,
  },
  imageButtonView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleView: {
    marginTop: '3%',
    width: '100%',
    // height: 75,
    // backgroundColor: 'blue',
    // backgroundColor: '#2b332d',

    justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'column',
    height: 60,
  },
  titleTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    // backgroundColor: 'yellow',
  },
  titleTextInputSettings: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // backgroundColor: '#2b332d',

    height: '97%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    backgroundColor: '#3b3d3b',
    height: '88%',
    width: '83%',
    flexWrap: 'wrap',
    borderRadius: 5,
  },
  textInputWrapperTransition: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    backgroundColor: '#3b3d3b',

    height: '88%',
    width: '83%',
    flexWrap: 'wrap',
    zIndex: 100,
    borderRadius: 5,
    transform: [{ translateX: 30 }],
  },
  titleTextInput: {
    height: '100%',
    // backgroundColor: 'yellow',
    backgroundColor: '#3b3d3b',
    // borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    // color: 'red',
    paddingLeft: 10,
    width: '90%',
    alignSelf: 'flex-end',
    color: 'white',
    // flexWrap: 'nowrap',
  },
  textCount: {
    color: 'white',
    // backgroundColor: 'red',
    height: '100%',
    width: '8%',
    alignSelf: 'flex-end',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 5,
    fontWeight: 'bold',
  },
  textInputIcon: {
    // backgroundColor: 'green',
    backgroundColor: '#3b3d3b',
    width: '14%',
    height: '88%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    alignSelf: 'flex-end',
  },
  themeView: {
    marginTop: '10%',
    width: '100%',
    // backgroundColor: 'blue',
    // backgroundColor: '#2b332d',

    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 60,
  },
  themePressable: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    backgroundColor: '#3b3d3b',

    height: '88%',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
  },
  themeViewViolet: {
    backgroundColor: '#35227a',
    width: '15%',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 8,
  },

  themeText: {
    // backgroundColor: 'yellow',
    // height: '88%',
    width: '70%',
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 17,
  },

  /////////////////

  visibilityView: {
    marginTop: '10%',
    width: '100%',
    // backgroundColor: 'blue',
    // backgroundColor: '#2b332d',

    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 60,
  },
  visibilityPressable: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    backgroundColor: '#3b3d3b',

    height: '88%',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 5,
  },
  visibilityViewUser: {
    backgroundColor: '#2b332d',
    width: '15%',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  visibilityText: {
    // backgroundColor: 'yellow',
    // height: '88%',
    width: '70%',
    color: 'white',
    // fontWeight: 'bold',
    fontSize: 17,
  },
  QuestionsWrapper: {
    marginTop: 48,
  },
  addQuestions: {
    marginTop: 34,
    backgroundColor: '#2261bf',
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    alignSelf: 'flex-end',
    borderRadius: 5,
    paddingBottom: 4,

    //////////
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#154285',
    shadowOpacity: 1,
    elevation: 4, // for android purpose
  },
});

export default CreateScreen;
