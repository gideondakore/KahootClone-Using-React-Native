import { StyleSheet, Text, View, FlatList, Pressable, Image, ImageBackground } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const pickItems = [
  {
    backgroundImage: require('../../../assets/pexels-jeshootscom-714698.jpg'),
    numofQuestions: 13,
    type: 'K+ access needed',
    title: 'Sample title to display and cut short with 3 dots',
    name: 'History_by_Kahoot',
    nameImage: require('../../../assets/pexels-pixabay-220453.jpg'),
  },
  {
    backgroundImage: require('../../../assets/pexels-jeshootscom-714698.jpg'),
    numofQuestions: 13,
    title: 'Sample title to display and cut short with 3 dots',
    name: 'History_by_Kahoot',
    nameImage: require('../../../assets/pexels-pixabay-220453.jpg'),
  },
  {
    backgroundImage: require('../../../assets/pexels-jeshootscom-714698.jpg'),
    numofQuestions: 13,
    type: 'K+ access needed',
    title: 'Sample title to display and cut short with 3 dots',
    name: 'History_by_Kahoot',
    nameImage: require('../../../assets/pexels-pixabay-220453.jpg'),
  },
  {
    backgroundImage: require('../../../assets/pexels-jeshootscom-714698.jpg'),
    numofQuestions: 13,
    type: 'K+ access needed',
    title: 'Sample title to display and cut short with 3 dots',
    name: 'History_by_Kahoot',
    nameImage: require('../../../assets/pexels-pixabay-220453.jpg'),
  },
];

const TopPicksItem = ({ backgroundImage, numofQuestions, type, title, name, nameImage }) => {
  return (
    <View style={styles.topPicksItemMain}>
      <View>
        <ImageBackground style={styles.topPicksItemBackground} source={backgroundImage}>
          <View style={styles.sectionContent}>
            <Text numberOfLines={1} style={styles.topPicksItemQuestionText}>
              {numofQuestions} Qs
            </Text>
            {type && (
              <Text style={styles.topPicksItemTypeText}>{`${type.substring(0, 10)}...`}</Text>
            )}
          </View>
        </ImageBackground>
      </View>
      <View>
        <Text style={styles.topPicksItemTitleText} numberOfLines={2}>{`${title.substring(
          0,
          150
        )}...`}</Text>
        <View style={styles.topPicksItemImageName}>
          <Image style={styles.nameImage} source={nameImage} />
          <Text style={styles.nameImageText}>{name}</Text>
          <MaterialIcons style={{ marginTop: 2 }} name="verified" size={15} color="#0e8ade" />
        </View>
      </View>
    </View>
  );
};

const TopPicks = ({ text }) => {
  return (
    <View style={styles.TopPicks}>
      <View style={styles.kahootHeader}>
        <View style={styles.kahootHeaderSub}>
          <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 500 }}>{text}</Text>
        </View>
        <Pressable>
          <Text style={styles.kahootText}>See All</Text>
        </Pressable>
      </View>

      <FlatList
        data={pickItems}
        renderItem={({ item }) => (
          <Pressable>
            <TopPicksItem
              backgroundImage={item.backgroundImage}
              numofQuestions={item.numofQuestions}
              type={item.type}
              title={item.title}
              name={item.name}
              nameImage={item.nameImage}
            />
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default TopPicks;

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
    fontWeight: 500,
    color: '#6c696c',
  },
  TopPicks: {
    marginTop: 20,
    marginBottom: 30,
  },
  topPicksItemMain: {
    height: 200,
    width: 170,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 15,
  },
  topPicksItemBackground: {
    height: 120,
    width: 170,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  sectionContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    color: 'white',
    backgroundColor: '#4a4a4c',
    borderRadius: 5,
    marginTop: 90,
    padding: 5,
    width: 50,
    marginLeft: 110,
  },
  topPicksItemQuestionText: {
    color: 'white',
    backgroundColor: '#4a4a4c',
    borderRadius: 5,
    marginTop: 55,
    padding: 5,
    width: 50,
    marginLeft: 110,
  },
  topPicksItemTypeText: {
    color: 'white',
    backgroundColor: '#4a4a4c',
    borderRadius: 2,
    marginTop: 5,
    padding: 5,
    marginLeft: 70,
  },
  topPicksItemTitleText: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 20,
    marginBottom: 10,
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
  },
  topPicksItemImageName: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    gap: 7,
  },
  nameImage: {
    height: 20,
    width: 20,
    overflow: 'hidden',
    borderRadius: '50%',
    borderWidth: 1,
    borderColor: 'white',
  },
  nameImageText: {
    color: '#6c696c',
  },
});
