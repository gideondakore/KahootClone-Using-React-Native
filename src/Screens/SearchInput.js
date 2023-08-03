import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import LanguageSelectionModal from './LanguageSelectionModal';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');
  const [KeyboardVisible, setKeyboardVisible] = useState(false);

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

  const handleSearch = () => {
    console.log('Search Text:', searchText);
    setSearchText('');
    Keyboard.dismiss();
  };

  const handelCancel = () => {
    setSearchText('');
    Keyboard.dismiss();
  };

  const handelCancelX = () => {
    setSearchText('');
    // Keyboard.dismiss();
  };

  return (
    <View
      style={{
        // backgroundColor: '#2b332d',
        // backgroundColor: '#3b3d3b',
        // backgroundColor: 'red',
        backgroundColor: '#3b3d3b',

        height: 115,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
      }}
    >
      <View
        style={{
          backgroundColor: '#171c18',
          backgroundColor: '#171c18',

          alignSelf: 'flex-end',
          height: 45,
          flexDirection: 'row',
          marginLeft: 10,
          borderRadius: 8,
          marginBottom: 8,
          alignItems: 'center',
          width: '80%',
          overflow: 'hidden',
        }}
      >
        <TouchableOpacity
          onPress={handleSearch}
          style={{ width: '10%', backgroundColor: '#171c18' }}
        >
          <Feather name="search" size={22} color={'#8a9c8f'} />
        </TouchableOpacity>
        <TextInput
          style={{
            height: '100%',
            backgroundColor: '#171c18',
            borderBottomEndRadius: 8,
            borderTopEndRadius: 8,
            marginLeft: 8,
            color: 'white',
            width: '75%',
          }}
          placeholder="Find me a kahoot about..."
          value={searchText}
          onChangeText={setSearchText}
        />
        {searchText.length > 0 && (
          <TouchableOpacity
            onPress={handelCancelX}
            style={{ padding: 8, backgroundColor: '#171c18', width: '15%', alignItems: 'center' }}
          >
            <Feather name="x" size={25} color={'#8a9c8f'} />
          </TouchableOpacity>
        )}
      </View>

      <LanguageSelectionModal style={{ flex: 1 }} />

      {KeyboardVisible && (
        <TouchableOpacity
          onPress={handelCancel}
          style={{
            position: 'absolute',
            justifyContent: 'center',
            // alignItems: 'flex-end',
            // width: '25%',
            height: 40,
            // alignSelf: 'flex-end',
            marginBottom: 18,
            marginRight: 10,
            backgroundColor: '#3b3d3b',

            right: 0,
            bottom: -8,
          }}
        >
          <Text style={styles.cancelText}>{'Cancel'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cancelText: {
    // position: 'absolute',
    // right: 80,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 0,
    backgroundColor: '#3b3d3b',

    alignSelf: 'flex-end',

    // top: 30,
    // zIndex: 200
  },
});
export default SearchInput;

// backgroundColor: '#171c18'
