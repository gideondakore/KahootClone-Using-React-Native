import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import JoinModal from '../components/JoinModal';

const Join = ({ isFocusedState, UpdateShareState }) => {
  return (
    <SafeAreaView style={styles.containerWrapper}>
      <JoinModal isFocusedState={isFocusedState} UpdateShareState={UpdateShareState} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#2b332d',
  },
});
export default Join;
