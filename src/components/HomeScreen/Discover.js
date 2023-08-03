import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';

const data = [
  {
    key: '1',
    discoverText: 'Discover more resources',
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
  },
  {
    key: '2',
    discoverText: 'Engage young learners with easy to use resources',
    imageUrl: require('../../../assets/pexels-yan-krukau-8613319.jpg'),
  },
  {
    key: '3',
    discoverText: 'Master complex topics in minutes',
    imageUrl: require('../../../assets/standing-suit-development-young-people_1134-988.avif'),
  },
  {
    key: '4',
    discoverText: 'Find resources to bring fun to your classroom',
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
  },
  {
    key: '5',
    discoverText: 'Summer fun resources',
    imageUrl: require('../../../assets/pexels-juan-salamanca-61129.jpg'),
  },
];

const DiscoverItem = ({ text, url }) => {
  return (
    <View style={styles.discoverItem}>
      <Text numberOfLines={1} style={styles.discoverText}>
        {text}
      </Text>
      <Image style={styles.discoverImage} source={url} />
    </View>
  );
};

///////////////////////////////////////////////////////////////////
const Discover = () => {
  const currentKey = useRef(data[0].key);
  const imageWidth = 370;

  const flatListRef = useRef(null);

  const scrollToNextImage = () => {
    const currentIndex = data.findIndex((item) => item.key === currentKey.current);
    const nextIndex = (currentIndex + 1) % data.length;

    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ offset: nextIndex * imageWidth });
      currentKey.current = data[nextIndex].key;
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(scrollToNextImage, 2000);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Pressable>
          <DiscoverItem text={item.discoverText} url={item.imageUrl} />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 60 }}>
      <View style={styles.kahootHeader}>
        <View style={styles.kahootHeaderSub}>
          <Ionicons style={{ marginLeft: 10 }} name="compass" color="#605f60" size={30} />
          <Text style={styles.kahootDiscoverText}>Discover</Text>
        </View>
        <Pressable>
          <Text style={styles.kahootText}>See All</Text>
        </Pressable>
      </View>
      {/* main discover section */}
      <View>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export default Discover;

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
    gap: 10,
  },
  kahootHeaderImage: {
    height: 20,
    width: 20,
  },
  kahootDiscoverText: {
    fontSize: 22,
    marginRight: 20,
    fontWeight: '600',
    paddingTop: 2,
  },
  kahootText: {
    //  fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
    fontSize: 20,
    marginRight: 20,
    fontWeight: '400',
    color: '#605f60',
  },

  discoverItem: {
    height: 195,
    width: 350,
    backgroundColor: 'white',
    marginTop: 10,
    // overflow :'hidden'
    borderRadius: 10,
    margin: 10,
  },
  discoverImage: {
    height: 160,
    width: 320,
    borderRadius: 15,
    overflow: 'hidden',
    // borderWidth:3,
    marginLeft: 15,
    marginTop: 5,
  },
  discoverText: {
    fontSize: 20,
    color: 'black',
    padding: 3,
    marginLeft: 10,
    fontWeight: '500',
  },
});
