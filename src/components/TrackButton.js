import React from 'react';

import { View, StyleSheet, Text, Image, TouchableOpacity, Button } from 'react-native';

const TrackButton = ({ title }) => {
  const goalsButton = () => {
    console.log('Weekly goals Button pressed');
  };

  return (
    <TouchableOpacity onPress={goalsButton}>
      <View style={[styles.TrackWrapper, styles.Wrapper]}>
        <Image
          source={require('../../assets/create-icon.jpeg')}
          style={[styles.trackIcon, styles.createIcon]}
        />
        <View style={styles.trackInnerStyle}>
          <Text style={styles.tracInnerText}>{title}</Text>
          <Button title={'Set weekly goals'} onPress={goalsButton} />
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

  createIcon: {
    width: 60,
    height: 150,
  },

  TrackWrapper: {
    backgroundColor: 'red',
    marginTop: 20,
    height: 130,
  },
});

export default TrackButton;
