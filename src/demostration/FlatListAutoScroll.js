import React, { useRef, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

const data = [
  { key: '1', imageName: require('../../assets/kahoot-logo.jpg') },
  { key: '2', imageName: require('../../assets/image-1.png') },
  { key: '3', imageName: require('../../assets/image-2.jpg') },
  { key: '4', imageName: require('../../assets/image-3.jpeg') },
  { key: '5', imageName: require('../../assets/join-logo-use.jpeg') },
  { key: '6', imageName: require('../../assets/splash.png') },
  { key: '7', imageName: require('../../assets/icon.png') },
  { key: '8', imageName: require('../../assets/image-2.jpg') },
  { key: '9', imageName: require('../../assets/favicon.png') },
  { key: '10', imageName: require('../../assets/create-icon.jpeg') },
  { key: '11', imageName: require('../../assets/adaptive-icon.png') },

  // Add more items as needed
];

const FlatListAutoScroll = () => {
  const currentKey = useRef(data[0].key); // Store the current key to keep track of the current item
  const imageWidth = 200; // Width of each image (Adjust according to your image width)

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
    const scrollInterval = setInterval(scrollToNextImage, 500);

    return () => {
      clearInterval(scrollInterval); // Clear the interval when the component unmounts
    };
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.imageName} />
      </View>
    );
  };

  return (
    <View>
      <FlatList ref={flatListRef} data={data} renderItem={renderItem} horizontal={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
  },
});

export default FlatListAutoScroll;
