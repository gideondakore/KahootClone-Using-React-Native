import { StyleSheet, Text, View, ScrollView, Image, Pressable, FlatList } from 'react-native';
import React from 'react';

const num = [0, 1, 2, 3, 4, 5];
const UnlockMore = () => {
  return (
    <View style={styles.unlockmain}>
      <Text style={styles.unlockMainText}>Unlock more apps</Text>
      <Text style={styles.unlockText}>Make learning awesome for entire family!</Text>
      <Text style={styles.unlockText}>Tap to explore these apps:</Text>

      <View style={styles.images}>
        <View style={styles.unlockPicRow1}>
          <FlatList
            data={num}
            horizontal
            renderItem={({ item }) => (
              <Pressable>
                <Image
                  key={item}
                  style={styles.unlockImage}
                  source={require('../../../assets/pexels-thirdman-8926546.jpg')}
                />
              </Pressable>
            )}
          />
        </View>
        <View style={styles.unlockPicRow2}>
          <FlatList
            data={num}
            horizontal
            renderItem={({ item }) => (
              <Pressable>
                <Image
                  key={item}
                  style={styles.unlockImage}
                  source={require('../../../assets/pexels-jeshootscom-714698.jpg')}
                />
              </Pressable>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default UnlockMore;

const styles = StyleSheet.create({
  unlockmain: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 10,
    height: 280,
    width: '90%',
    marginLeft: 20,
    marginBottom: 20,
  },
  unlockMainText: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
    color: '#4b4a4b',
  },
  unlockText: {
    color: '#6c696c',
    paddingLeft: 10,
    fontSize: 17,
    marginBottom: 10,
  },
  images: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 5,
    alignSelf: 'center',
  },
  unlockPicRow1: {
    backgroundColor: 'white',
    height: 70,
    margin: 5,
    borderRadius: 10,
  },
  unlockImage: {
    height: 60,
    width: 70,
    overflow: 'hidden',
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 10,
  },
  unlockPicRow2: {
    backgroundColor: 'white',
    height: 70,
    margin: 5,
    borderRadius: 10,
  },
});
