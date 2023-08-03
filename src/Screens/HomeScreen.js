import { Button, SafeAreaView } from 'react-native';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import * as React from 'react';

import Categories from '../components/HomeScreen/Categories';
import MyKahoots from '../components/HomeScreen/MyKahoots';
import Discover from '../components/HomeScreen/Discover';
import PartnerCollection from '../components/HomeScreen/PartnerCollection';
import AdSection from '../components/HomeScreen/AdSection';
import WhatsNew from '../components/HomeScreen/WhatsNew';
import TopPicks from '../components/HomeScreen/TopPicks';
import UnlockMore from '../components/HomeScreen/UnlockMore';
import HomeNav from './HomeNav';

export default function SignHomes() {
  return (
    <View style={styles.container}>
      <HomeNav />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        stickyHeaderIndices={[0]}
        indicatorStyle={'black'}
      >
        {/* <Header /> */}
        <Main />
        {/* <Pressable onPress={() => navigation.navigate('Discover')}> */}
        <Text>Sample text </Text>
        {/* </Pressable> */}
      </ScrollView>
    </View>
  );
}
const Header = () => {
  return (
    <View style={{ height: 100, backgroundColor: 'white', flexDirection: 'row' }}>
      <View style={styles.headerCircle}>
        <Ionicons style={{ marginLeft: 2 }} name="person-circle" size={40} color={'white'} />
      </View>
      <Text>Kahoot</Text>
    </View>
  );
};

const Main = () => {
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1, height: 600, backgroundColor: '#e6e1e6' }}>
      <Categories navigation={navigate} />
      <MyKahoots />
      <Discover />
      <PartnerCollection text={'PARTNER COLLECTION'} />
      <AdSection />
      <WhatsNew />
      <TopPicks text={'TopPicks'} />
      <UnlockMore />
    </View>
  );
};
const ListHeader = () => {
  return (
    <View style={{ backgroundColor: 'blue' }}>
      <Text style={{ color: 'white' }}>Categories</Text>
    </View>
  );
};

//categories, my kahoots, discover, partner collections,ad, what new, top picks, unlock more

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3a3a',
  },
  text: {
    fontSize: 30,
  },
  headerCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#3d3a3a',
  },
  scrolls: {
    backgroundColor: '#ed900c',
    paddingTop: 10,
  },
  scrollContent: {
    flexGrow: 1,
    // paddingHorizontal: 16,
    backgroundColor: '#3d3a3a',
  },
});

/*
# to fix
1- actual images
2- a database if possible
3- animation, auto scroll after some seconds
4- add shadow to button and button on click animation
5- display pictures in the unlock more section
6.Safe Area view causes problems in web display
  */
