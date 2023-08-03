import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';

const AdSection = () => {
  return (
    <View>
      <Image
        style={styles.adSectionImage}
        source={require('../../../assets/pexels-gerd-altmann-21696.jpg')}
      />
      <View style={styles.adSectionSub}>
        <Text style={styles.adSectionHeader}>Create engaging lessons</Text>
        <Text style={styles.adSectionContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ad voluptas et cumque
          dolore ab in fugit rerum doloribus.
        </Text>
        <Pressable style={styles.adSectionUpgrade}>
          <Text style={styles.adSectionUpgradeText}>Upgrade Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AdSection;

const styles = StyleSheet.create({
  adSectionImage: {
    height: 80,
    width: 100,
    alignSelf: 'center',
    marginTop: 100,
  },
  adSectionHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 50,
    padding: 20,
  },
  adSectionSub: {
    padding: 10,
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adSectionContent: {
    fontSize: 20,
    fontWeight: 300,
  },
  adSectionUpgrade: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0625a2',
    margin: 20,
    height: 40,
    width: 150,
    color: 'white',
    borderRadius: 5,
  },
  adSectionUpgradeText: {
    color: 'white',
    fontSize: 15,
    padding: 10,
  },
});
