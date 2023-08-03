import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const CreateButton = ({ title }) => {
  const createOnpress = () => {
    console.log('create Button Press');
  };

  return (
    <TouchableOpacity onPress={createOnpress}>
      <View style={[styles.createWrapper, styles.Wrapper]}>
        <View style={styles.textStyle}>
          <Text style={styles.createTitleStyle}>{title}</Text>
          <Text
            style={styles.createMsgStyle}
          >{`${'\n'}Create or host a kahoot and${'\n'} play with friends`}</Text>
        </View>
        <View style={styles.imageView}>
          <Image source={require('../../assets/create-icon.jpeg')} style={styles.createIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  createWrapper: {
    backgroundColor: 'lightgreen',
    height: 150,
  },

  textStyle: {
    borderWidth: 5,
    marginLeft: 10,
  },

  createIcon: {
    width: 60,
    height: 150,
  },

  imageView: {
    alignSelf: 'flex-end',
    borderWidth: 10,
  },
});

export default CreateButton;
