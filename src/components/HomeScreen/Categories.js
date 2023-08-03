import { Pressable, StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import React from 'react';

const categories = [
  {
    name: 'Kindergarten',
    image: require('../../../assets/pexels-pixabay-247819.jpg'),
    // image: require("../../../assets/")
  },
  {
    name: 'Math',
    image: require('../../../assets/pexels-jeshootscom-714698.jpg'),
  },
  {
    name: 'High School',
    image: require('../../../assets/pexels-andrea-piacquadio-3762800.jpg'),
  },
  {
    name: 'Science',
    image: require('../../../assets/pexels-pixabay-355948.jpg'),
  },
];

const CatItem = ({ name, image }) => {
  return (
    <View>
      <ImageBackground style={styles.imageBackground} source={image} resizeMode="cover">
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', height: 100 }}>
          <Text style={styles.imageBackgroundText}>{name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
const Categories = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.categoriesText} onPress={() => navigation.navigate('Random')}>
        Categories
      </Text>

      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Pressable>
            <CatItem name={item.name} image={item.image} />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoriesText: { fontSize: 30, padding: 5, color: '#4e4c4e', fontWeight: '600', fontSize: 20 },
  imageBackground: {
    height: 100,
    width: 220,
    resizeMode: 'contain',
    margin: 5,
    borderRadius: 15,
    overflow: 'hidden',
    //need to apply shadow
    // shadowColor:'black',
    // shadowOffset:10,
    // shadowOpacity:20,
    // shadowRadius:10
  },
  imageBackgroundText: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 40,
  },
});
