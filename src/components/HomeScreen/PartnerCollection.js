import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import React from 'react';

const discoverList = [
  {
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
  },
  {
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
  },
  {
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
  },
  {
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
  },
  {
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
  },
];

const PartnerCollection = ({ text }) => {
  return (
    <View>
      <View style={styles.kahootHeader}>
        <View style={styles.kahootHeaderSub}>
          <Text style={styles.partnerText}>{text}</Text>
        </View>
      </View>
      {/* partner collection main content */}
      <FlatList
        data={discoverList}
        renderItem={({ item }) => (
          <Pressable>
            <Image style={styles.partnerImage} source={item.imageUrl} />
          </Pressable>
        )}
        horizontal={true}
      />
    </View>
  );
};

export default PartnerCollection;

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
  kahootText: {
    //  fontFamily:'Verdana, Geneva, Tahoma, sans-serif',
    fontSize: 20,
    marginRight: 20,
  },
  partnerText: {
    fontSize: 18,
    marginRight: 20,
    padding: 10,
    fontWeight: '750',
    color: '#454345',
  },
  partnerImage: {
    height: 100,
    width: 250,
    margin: 1,
    marginLeft: 10,
    borderRadius: 15,
  },
});
