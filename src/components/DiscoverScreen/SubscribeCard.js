import { StyleSheet, Text, View, Button, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';

const subscribeInfo = [
  {
    imageUrl: null,
    accessType: 'K+ AccessPass',
    itemType: 'Trivia',
    title: 'Summer Vibes',
    activities: 4,
    personName: 'Kahoot! Studio',
    verified: true,
  },
  {
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
    accessType: 'K+ AccessPass',
    itemType: 'Trivia',
    title: 'Science',
    activities: 6,
    personName: 'Mr. Andrews',
    verified: false,
  },
  {
    imageUrl: require('../../../assets/pexels-naomi-shi-1001914.jpg'),
    accessType: 'Free Access',
    itemType: 'Special!',
    title: 'English',
    activities: 10,
    personName: 'Kahoot! Studio',
    verified: true,
  },
];
const ButtonExtra = () => {
  return <View style={styles.buttonExtra}></View>;
};
const SubscribeCard = ({
  imageUrl,
  accessType,
  itemType,
  title,
  activities,
  personName,
  verified,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <ImageBackground source={imageUrl} style={styles.backgroundImage}>
          <Pressable style={styles.btn}>
            <Text style={styles.typeText}>{accessType}</Text>
          </Pressable>
          <Pressable>
            <Text style={styles.itemText}>{`${itemType.substring(0, 6)}...`}</Text>
          </Pressable>
        </ImageBackground>
      </View>
      <View style={styles.lower}>
        <Text style={styles.header} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.information}>
          <View style={styles.activities}>
            <Pressable style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="dots-grid" size={15} color="#585856" />
              <Text style={styles.activitiesText}>{activities} Activities</Text>
            </Pressable>
          </View>
          <View style={styles.personInfo}>
            <Text style={styles.personName}>{personName}</Text>
            {verified && (
              <MaterialIcons style={{ marginTop: 2 }} name="verified" size={15} color="#0e8ade" />
            )}
          </View>
        </View>
        <Pressable style={styles.button}>
          <Text>Subscribe </Text>
        </Pressable>
        {/* <ButtonExtra /> */}
      </View>
    </View>
  );
};

const SubscribeCardList = () => {
  return (
    <View style={{ margin: 5, marginBottom: 15, paddingBottom: 5 }}>
      <FlatList
        data={subscribeInfo}
        renderItem={({ item }) => (
          <Pressable>
            <SubscribeCard
              imageUrl={item.imageUrl}
              accessType={item.accessType}
              itemType={item.itemType}
              title={item.title}
              activities={item.activities}
              personName={item.personName}
              verified={item.verified}
            />
          </Pressable>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default SubscribeCardList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 330,
    width: 200,
    overflow: 'hidden',
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10,
    //setting a shadow
    elevation: 5, // Adjust the value as per your requirement
    shadowColor: '#828484', // Set the shadow color
    shadowOpacity: 0.3, // Set the shadow opacity
    shadowRadius: 5, // Set the shadow radius
    shadowOffset: {
      width: 0,
      height: 300,
    },
  },

  upper: {
    height: 170,
    backgroundColor: 'white',
  },
  backgroundImage: {
    overflow: 'hidden',
    height: 170,
    width: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  typeText: {
    color: 'white',
    fontSize: 15,
    width: 100,
    backgroundColor: '#8e6c04',
    borderRadius: 2,
    alignSelf: 'flex-end',
    marginRight: 3,
  },
  itemText: {
    backgroundColor: '#e0e0df',
    width: 50,
    height: 20,
    color: '#a0a09b',
    borderRadius: 4,
    margin: 5,
    paddingLeft: 3,
  },
  lower: {
    height: 180,
  },
  header: {
    fontWeight: 620,
    fontSize: 15,
    width: 150,
    height: 40,
    marginLeft: 10,
  },
  activities: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 100,
    marginLeft: 5,
    marginTop: 20,
    backgroundColor: '#e0e0d8',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#9e9e9a',
  },
  activitiesText: {
    marginLeft: 7,
    color: '#797976',
  },
  personInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 5,
  },
  personName: {
    color: '#797976',
  },
  button: {
    height: 30,
    width: 180,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#d9dbdc',
    borderRadius: 5,
    marginBottom: 0,
  },
  buttonExtra: {
    width: 180,
    height: 2,
    backgroundColor: '#949697',
    alignSelf: 'center',
    marginTop: -2,
  },
});
