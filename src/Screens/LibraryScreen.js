import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from '@expo/vector-icons';

const LibraryHeader = () => {
  return (
    <View style={styles.libraryHeader}>
      <Text style={styles.libraryHeaderText}>Library</Text>
    </View>
  );
};

export default function LibraryScreen() {
  return (
    <View style={styles.wrapper}>
      <LibraryHeader />
      <View style={styles.container}>
        <View style={styles.upper}>
          <Pressable>
            <View style={styles.libraryItemContainerKahoot}>
              <Ionicons
                style={styles.libraryItemIcon}
                name="person-outline"
                size={22}
                color="white"
              />
              <Text style={styles.libraryItemText}>Kahoot</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.libraryItemContainerReport}>
              <Entypo style={styles.libraryItemIcon} name="bar-graph" size={22} color="white" />
              <Text style={styles.libraryItemText}>Reports</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.lower}>
          <Pressable>
            <View style={styles.libraryItemContainerGroup}>
              <MaterialIcons style={styles.libraryItemIcon} name="groups" size={22} color="white" />
              <Text style={styles.libraryItemTextlight}>Groups</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.libraryItemContainerStudy}>
              <FontAwesome
                style={styles.libraryItemIcon}
                name="graduation-cap"
                size={22}
                color="white"
              />
              <Text style={styles.libraryItemTextlight}>Study</Text>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.libraryItemContainerCourses}>
              <FontAwesome5
                style={styles.libraryItemIcon}
                name="book-open"
                size={22}
                color="white"
              />
              <Text style={styles.libraryItemTextlight}>Courses</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#2b332d',
  },
  libraryHeader: {
    justifyContent: 'center',
    alignItems: 'center',

    height: 92,
    backgroundColor: '#3b3d3b',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    paddingTop: 45,
  },
  libraryHeaderText: {
    fontSize: 18,
    fontWeight: 600,
    color: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 15,
  },
  upper: {
    borderRadius: 5,
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    marginTop: 18,
    height: '18%',
  },
  lower: {
    borderRadius: 5,
    width: '100%',
    // backgroundColor: 'blue',
    justifyContent: 'space-between',
    marginTop: 8,
    height: '18%',
    height: '27%',
    // flexDirection: 'column'
  },
  libraryItemContainerKahoot: {
    flexDirection: 'row',
    borderTopEndRadius: 5,
    borderTopLeftRadius: 5,
    alignItems: 'center',
    backgroundColor: '#3b3d3b',
    height: 57,
  },
  libraryItemContainerReport: {
    flexDirection: 'row',
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#3b3d3b',

    height: 57,
    alignItems: 'center',
  },

  libraryItemContainerGroup: {
    flexDirection: 'row',
    borderTopEndRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: '#3b3d3b',

    height: 57,
    alignItems: 'center',
  },

  libraryItemContainerStudy: {
    flexDirection: 'row',
    backgroundColor: '#3b3d3b',
    height: 57,
    alignItems: 'center',
  },

  libraryItemContainerCourses: {
    flexDirection: 'row',
    backgroundColor: '#3b3d3b',
    borderBottomEndRadius: 5,
    borderBottomLeftRadius: 5,
    height: 57,
    alignItems: 'center',
  },
  libraryItemIcon: {
    marginLeft: 15,
  },
  libraryItemText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
    color: 'white',
  },
  libraryItemTextlight: {
    fontSize: 15,
    marginLeft: 20,
    color: 'white',
  },
});
