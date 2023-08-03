// import React from 'react';

// import { View, SafeAreaView, Text } from 'react-native';
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
// import Search from '../components/DiscoverScreen/Search';
// import Discovers from '../components/DiscoverScreen/DiscoverComponent';
import DiscoverComponent from '../components/DiscoverScreen/DiscoverComponent';
import PartnerCollection from '../components/HomeScreen/PartnerCollection';
import TopPicks from '../components/HomeScreen/TopPicks';
import LibraryLineText from '../components/DiscoverScreen/LibraryLineText';
import SubscribeCardList from '../components/DiscoverScreen/SubscribeCard';
import FullList, { ListItem } from '../components/DiscoverScreen/ListItem';

import LanguageSelectionModal from './LanguageSelectionModal';
import SearchInput from './SearchInput';

const Discover = () => {
  return (
    // <SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
    <>
      <SearchInput />
      {/* <View style={{ flex: 1, backgroundColor: '#1d2920' }}> */}
      {/* <Text>{'Discover Home Page'}</Text> */}

      {/* </View> */}

      <View style={{ flex: 1 }}>
        <ScrollView
          // stickyHeaderIndices={[0]}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
          indicatorStyle={{ color: 'blue' }}
        >
          {/* <Search /> */}
          <DiscoverComponent />
          <PartnerCollection text={'Partner Collection'} />
          <TopPicks text={'Top Picks'} />
          <PartnerCollection text={'Kahoot Verified Educators'} />
          <TopPicks text={'Math With Spider Man'} />
          <LibraryLineText />
          <SubscribeCardList />
          <ListItem text="Marvel Official" />
          <ListItem text="Disney Official" />
          <PartnerCollection text={'Partner Collection'} />
          <FullList />
          {/* <Text>DiscoverScreengmai.l.cr.com</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </Pressable> */}
        </ScrollView>
      </View>
    </>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
});

export default Discover;
