import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

const CreateTextInputModal = ({
  keyboardVisiblereturn,
  keyboardVisible,
  handleTextChange,
  MAX_VALUE,
  textCount,
  textInputValue,
}) => {
  const textInputRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      textInputRef.current.focus();
    });

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log('keyboard dismissed');
        keyboardVisiblereturn(false);
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView
        style={[keyboardVisible ? styles.mainWrapper : styles.mainWrapperDisplayToggle]}
      >
        <View style={styles.Wrapper}>
          <View
            //   style={[!KeyboardVisible ? styles.textInputWrapper : styles.textInputWrapperTransition]}
            style={styles.textInputWrapper}
          >
            <TextInput
              style={styles.titleTextInput}
              value={textInputValue}
              placeholder="Enter title"
              placeholderTextColor={'white'}
              ref={textInputRef}
              onChangeText={handleTextChange}
              maxLength={MAX_VALUE}
            />
            <Text style={styles.textCount}>
              {textInputValue === '' ? MAX_VALUE : MAX_VALUE - textCount}
              {/* 95 */}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 600,
    position: 'absolute',
    zIndex: 500,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // display: 'none',
  },
  mainWrapperDisplayToggle: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 600,
    position: 'absolute',
    zIndex: 500,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'none',
  },
  Wrapper: {
    // flex: 1,

    flexDirection: 'row',
    // backgroundColor: 'red',
    // backgroundColor: '#2b332d',

    height: '7%',
    alignItems: 'center',
    justifyContent: 'space-between',

    // backgroundColor: 'red',
  },
  textInputWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    backgroundColor: '#3b3d3b',
    height: '100%',
    width: '80%',
    flexWrap: 'wrap',
    borderRadius: 5,
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
    // backgroundColor: 'green',
    height: '100%',
    width: '8%',
    alignSelf: 'flex-end',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 5,
    fontWeight: 'bold',
  },
});
export default CreateTextInputModal;
