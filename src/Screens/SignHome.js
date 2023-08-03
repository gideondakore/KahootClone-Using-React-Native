// import React from 'react';

// import { View, SafeAreaView, Text, ScrollView } from 'react-native';
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

const SignHome = () => {
  const navigate = useNavigation();
  return (
    <>
      <HomeNav />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        // stickyHeaderIndices={[0]}
        indicatorStyle={'black'}
      >
        <View style={{ flex: 1, backgroundColor: '#1d2920' }}>
          {/* <Text>{'Sign Home Page'}</Text> */}

          <View style={{ flex: 1, height: '100%', backgroundColor: '#e6e1e6' }}>
            <Categories navigation={navigate} />
            <MyKahoots />

            <Discover />

            <PartnerCollection text={'PARTNER COLLECTION'} />

            <AdSection />

            <WhatsNew />
            <TopPicks text={'TopPicks'} />
            <UnlockMore />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

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
    flex: 1,
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

export default SignHome;
