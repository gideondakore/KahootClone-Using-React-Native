import { StyleSheet, Text, View, Pressable, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Search from '../components/DiscoverScreen/Search';
import Discover from '../components/DiscoverScreen/DiscoverComponent';
import PartnerCollection from '../components/HomeScreen/PartnerCollection';
import TopPicks from '../components/HomeScreen/TopPicks';
import LibraryLineText from '../components/DiscoverScreen/LibraryLineText';
import SubscribeCardList from '../components/DiscoverScreen/SubscribeCard';
import FullList, { ListItem } from '../components/DiscoverScreen/ListItem';

export default function DiscoverScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        // stickyHeaderIndices={[0]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        indicatorStyle={{ color: 'blue' }}
      >
        {/* <Search /> */}
        <Discover />
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
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
});
