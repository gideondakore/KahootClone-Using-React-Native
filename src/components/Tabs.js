import React, { useState, useContext, createContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import SignHome from '../Screens/SignHome';
import HomeNav from '../Screens/HomeNav';
import Discover from '../Screens/Discover';
import SearchInput from '../Screens/SearchInput';
import LanguageSelectionModal from '../Screens/LanguageSelectionModal';
import LibraryScreen from '../Screens/LibraryScreen';
import Join from '../Screens/Join';
import { View, Image, Text, Pressable } from 'react-native';
import JoinModal from './JoinModal';

import { Ionicons } from '@expo/vector-icons';

import HomeHeader from '../demostration/HomeHeader';
import DiscoverHeader from '../demostration/DiscoverHeader';

import CreateScreen from '../Screens/CreateScreen';

///////////////////////////////////////
// import SignHomes from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

// const TabLevelContext = createContext(0);

const CustomTabBarButton = ({ children, onPress }) => (
  <Pressable
    onPress={onPress}
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    }}
  >
    {children}
  </Pressable>
);

const Tabs = () => {
  const [isFocusedState, setIsFocusedState] = useState(false);

  const [lastActiveTabIndex, setLastActiveTabIndex] = useState('Home');
  const [testFocusedHome, setTestFocusedHome] = useState(false);
  const [testFocusedDiscover, setTestFocusedDiscover] = useState(false);
  const [testFocusedLibrary, setTestFocusedLibrary] = useState(false);

  const UpdateShareState = (newBoolean) => {
    setIsFocusedState(newBoolean);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: '#2b332d',
        },
        headerStyle: {
          backgroundColor: '#141c16',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={'Home'}
        // component={SignHome}
        options={({ navigation }) => ({
          // tabBarIcon: ({ focused }) => (
          //   <Feather name={'home'} size={25} color={focused ? 'white' : 'grey'} />
          // ),
          tabBarButton: ({ focused }) => (
            <CustomTabBarButton
              onPress={() => {
                console.log('Home Display');
                setLastActiveTabIndex('Home');
                setTestFocusedHome(true);
                setTestFocusedDiscover(false);
                setTestFocusedLibrary(false);
                navigation.navigate('Home');
              }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <Feather name={'home'} size={25} color={testFocusedHome ? 'white' : 'grey'} />
                <Text style={{ color: testFocusedHome ? 'white' : 'grey' }}>Home</Text>
              </View>
            </CustomTabBarButton>
          ),
          header: ({ scene }) => <HomeNav />,
        })}
      >
        {() => <SignHome />}
      </Tab.Screen>
      <Tab.Screen
        name={'Discover'}
        options={({ navigation }) => ({
          tabBarButton: ({ focused }) => (
            <CustomTabBarButton
              onPress={() => {
                // console.log(focused);
                setLastActiveTabIndex('Discover');
                setTestFocusedHome(false);
                setTestFocusedDiscover(true);
                setTestFocusedLibrary(false);

                navigation.navigate('Discover');
              }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <Feather
                  name={'compass'}
                  size={25}
                  color={testFocusedDiscover ? 'white' : 'grey'}
                />
                <Text style={{ color: testFocusedDiscover ? 'white' : 'grey' }}>Discover</Text>
              </View>
            </CustomTabBarButton>
          ),
          header: () => (
            <View>
              <LanguageSelectionModal />
              <SearchInput />
            </View>
          ),
          // header: ({ scene }) => (lastActiveTabIndex === 'Discover' ? <DiscoverHeader /> : null),
        })}
      >
        {() => <Discover />}
      </Tab.Screen>
      <Tab.Screen
        name={'Join'}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => {
                setIsFocusedState(true);
                navigation.navigate('Join');
              }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/join-logo-use.jpeg')}
                  style={{
                    width: 60,
                    height: 60,
                    // marginBottom: 10,
                    // backgroundColor: 'red',
                  }}
                />
                <Text style={{ color: props.focused ? 'white' : 'grey', marginBottom: 20 }}>
                  Join
                </Text>
              </View>
            </CustomTabBarButton>
          ),
          // header: ({ scene }) =>
          //   isFocusedState ? null : lastActiveTabIndex === 'Join' ? <HomeNav /> : null,
        })}
      >
        {() => {
          if (isFocusedState === true) {
            return (
              <JoinModal isFocusedState={isFocusedState} UpdateShareState={UpdateShareState} />
            );
          } else {
            // console.log(lastActiveTabIndex);
            switch (lastActiveTabIndex) {
              case 'Home':
                return <SignHome />;
              case 'Discover':
                return <Discover />;
              case 'Library':
                return <LibraryScreen />;
              default:
                return <SignHome />;
            }
          }
        }}
      </Tab.Screen>

      <Tab.Screen
        name={'Create'}
        options={({ navigation }) => ({
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => {
                setIsFocusedState(true);
                navigation.navigate('Create');
              }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AntDesign name="plussquareo" size={24} color="grey" />
                <Text style={{ color: props.focused ? 'white' : 'grey', marginBottom: -20 }}>
                  Create
                </Text>
              </View>
            </CustomTabBarButton>
          ),
          // header: ({ scene }) =>
          //   isFocusedState ? null : lastActiveTabIndex === 'Join' ? <HomeNav /> : null,
        })}
      >
        {() => {
          if (isFocusedState === true) {
            return (
              <CreateScreen isFocusedState={isFocusedState} UpdateShareState={UpdateShareState} />
            );
          } else {
            // console.log(lastActiveTabIndex);
            switch (lastActiveTabIndex) {
              case 'Home':
                return <SignHome />;
              case 'Discover':
                return <Discover />;
              case 'Library':
                return <LibraryScreen />;
              default:
                return <SignHome />;
            }
          }
        }}
      </Tab.Screen>

      <Tab.Screen
        name={'Library'}
        // component={SignHome}
        options={({ navigation }) => ({
          // tabBarIcon: ({ focused }) => (
          //   <Feather name={'home'} size={25} color={focused ? 'white' : 'grey'} />
          // ),
          tabBarButton: ({ focused }) => (
            <CustomTabBarButton
              onPress={() => {
                // console.log('Home Display');
                setLastActiveTabIndex('Library');
                setTestFocusedHome(false);
                setTestFocusedDiscover(false);
                setTestFocusedLibrary(true);
                navigation.navigate('Library');
              }}
            >
              <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                <Ionicons name="library" size={24} color={testFocusedLibrary ? 'white' : 'grey'} />
                <Text style={{ color: testFocusedLibrary ? 'white' : 'grey' }}>Library</Text>
              </View>
            </CustomTabBarButton>
          ),
          // header: ({ scene }) => <HomeNav />,
        })}
      >
        {() => <LibraryScreen />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
