import { StyleSheet, Text, View, Pressable, Image, ImageBackground } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const MyKahoots = () => {
  return (
    <View>
      <View style={styles.kahootHeader}>
        <View style={styles.kahootHeaderSub}>
          <Ionicons
            style={{ marginRight: -5, marginLeft: 10 }}
            name="ios-person"
            size={20}
            color={'grey'}
          />
          <Text style={styles.myKahootText}>My Kahoots</Text>
        </View>
        <Pressable>
          <Text style={styles.kahootText}>See All</Text>
        </Pressable>
      </View>

      <View style={styles.kahootCard}>
        <View>
          <ImageBackground
            style={styles.kahootCardUp}
            source={require('../../../assets/splash.png')}
          >
            <Text style={styles.button}>2 Qs</Text>
          </ImageBackground>
        </View>
        <View style={styles.kahootCardDown}>
          <Text style={styles.kahootBottomText}>Draft</Text>
          <Text style={{ marginTop: 30, marginLeft: 5 }}>Progress Bar</Text>
        </View>
      </View>
    </View>
  );
};

export default MyKahoots;

const styles = StyleSheet.create({
  kahootHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  kahootHeaderSub: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  kahootHeaderImage: {
    height: 20,
    width: 20,
  },
  myKahootText: {
    fontSize: 20,
    fontWeight: '500',
  },
  kahootText: {
    fontSize: 20,
    marginRight: 20,
    color: '#454345',
  },
  kahootCard: {
    display: 'flex',
    flexDirection: 'column',
    height: 180,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  kahootCardUp: {
    height: 95,
    width: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  kahootCardDown: {
    backgroundColor: 'white',
    height: 85,
    width: 200,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button: {
    color: 'white',
    backgroundColor: '#615e5e',
    height: 30,
    width: 50,
    fontSize: 15,
    fontStyle: 'bold',
    marginLeft: 140,
    marginTop: 50,
    padding: 5,
    borderRadius: 5,
  },
  kahootBottomText: {
    color: 'white',
    backgroundColor: 'pink',
    fontSize: 15,
    marginLeft: 5,
    marginTop: 10,
    width: 40,
    paddingLeft: 3,
    overflow: 'hidden',
    borderRadius: 3,
  },
});

/*const questions = 2
  return <View >
    <View style={styles.kahootHeader}>
      <View style={styles.kahootHeaderSub}>
      { <Image style={styles.kahootHeaderImage} source={require ("../../ep1.jpeg")}/> }
      <Text style={styles.kahootText}>My kahoots</Text>
      </View>
      <Pressable>
      <Text style={styles.kahootText}>See All</Text>
      </Pressable>
    </View>

    <View style={styles.kahootCard}>
      <ImageBackground style={styles.kahootCardUp} source={require ("../../ep1.jpeg")}>
        <Text style={styles.button}>{questions} Qs</Text>
      </ImageBackground>
      <View style={styles.kahootCardDown}>
        <Text style={styles.kahootBottomText}>Draft</Text>
        <Text>Progress Bar</Text>
      </View>

    </View>
  </View>

  */
