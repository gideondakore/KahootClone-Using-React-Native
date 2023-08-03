import React from 'react';
import 'react-native-gesture-handler';

// import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import SignHome from '../Screens/SignHome';
import NotificationHome from '../Screens/NotificationHome';

// import { Feather } from '@expo/vector-icons';

// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Stacks = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sign Up" component={SignHome} />
      <Tab.Screen name="Notification" component={NotificationHome} />
    </Tab.Navigator>
  );
};

export default Stacks;
// const Stack = createStackNavigator();

// const Stacks = () => {
//   return (
//     // <Stack.Navigator>
//     //   <Stack.Screen
//     //     name="Notification"
//     //     component={NotificationHome}
//     //     options={{
//     //       headerLeft: () => (
//     //         <TouchableOpacity>
//     //           <Image
//     //             source={require('../../assets/create-icon.jpeg')}
//     //             style={{ width: 40, height: 40 }}
//     //           />
//     //         </TouchableOpacity>
//     //       ),
//     //       // headerTitleStyle: { display: 'none' },
//     //       cardStyle: { backgroundColor: 'white' },
//     //       cardStyleInterpolator: ({ current }) => ({
//     //         opacity: current.progress,
//     //       }),
//     //     }}
//     //   />

//     //   <Stack.Screen
//     //     name="sign up"
//     //     component={SignHome}
//     //     options={{
//     //       headerRight: () => (
//     //         <TouchableOpacity>
//     //           <Image
//     //             source={require('../../assets/create-icon.jpeg')}
//     //             style={{ width: 40, height: 40 }}
//     //           />
//     //         </TouchableOpacity>
//     //       ),
//     //       // headerTitleStyle: { display: 'none' },
//     //       cardStyle: { backgroundColor: 'white' },
//     //       cardStyleInterpolator: ({ current }) => ({
//     //         opacity: current.progress,
//     //       }),
//     //     }}
//     //   />
//     // </Stack.Navigator>

//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={SignHome} />
//       <Stack.Screen name="Notifications" component={NotificationHome} />
//       {/* <Stack.Screen name="Profile" component={Profile} /> */}
//       {/* <Stack.Screen name="Settings" component={Settings} /> */}
//     </Stack.Navigator>
//   );
// };

// export default Stacks;
