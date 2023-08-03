// // ... (previously defined code)

// const Tabs = ({ navigation }) => {
//   // Include the navigation prop here
//   const [isFocusedState, setIsFocusedState] = useState(false);

//   const UpdateShareState = (newBoolean) => {
//     setIsFocusedState(newBoolean);
//   };

//   return (
//     // ... (previously defined code)

//     <Tab.Screen
//       name={'Join'}
//       options={{
//         tabBarButton: (props) => (
//           <CustomTabBarButton
//             {...props}
//             onPress={() => {
//               setIsFocusedState(true);
//               // navigation.navigate('Join'); // Don't need this navigation call
//             }}
//           >
//             <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//               <Image
//                 source={require('../../assets/join-logo-use.jpeg')}
//                 style={{
//                   width: 60,
//                   height: 60,
//                   marginBottom: 5,
//                   backgroundColor: 'red',
//                 }}
//               />
//               <Text style={{ color: props.focused ? 'white' : 'grey' }}>Join</Text>
//             </View>
//           </CustomTabBarButton>
//         ),
//       }}
//     >
//       {() => (
//         <Join
//           isFocusedState={isFocusedState}
//           UpdateShareState={UpdateShareState}
//           navigation={navigation} // Pass the navigation prop to the JoinModal component
//         />
//       )}
//     </Tab.Screen>
//   );
// };

// export default Tabs;

// import React, { useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Feather } from '@expo/vector-icons';
// import SignHome from '../Screens/SignHome';
// import HomeNav from '../Screens/HomeNav';
// import Discover from '../Screens/Discover';
// import SearchInput from '../Screens/SearchInput';
// import LanguageSelectionModal from '../Screens/LanguageSelectionModal';
// import Join from '../Screens/Join';
// import { View, Image, Text, Pressable } from 'react-native';
// import JoinModal from './JoinModal';

// const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => (
//   <Pressable
//     onPress={onPress}
//     style={{
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: 15,
//     }}
//   >
//     {children}
//   </Pressable>
// );

// const Tabs = () => {
//   const [isFocusedState, setIsFocusedState] = useState(false);
//   const [lastActiveTab, setLastActiveTab] = useState('Home'); // Set the default active tab here

//   const UpdateShareState = (newBoolean) => {
//     setIsFocusedState(newBoolean);
//   };

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: 'grey',
//         tabBarStyle: {
//           backgroundColor: '#2b332d',
//         },
//         headerStyle: {
//           backgroundColor: '#141c16',
//         },
//         headerShown: true,
//       }}
//     >
//       <Tab.Screen
//         name={'Home'}
//         // component={SignHome}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Feather name={'home'} size={25} color={focused ? 'white' : 'grey'} />
//           ),
//         }}
//       >
//         {() => {
//           setLastActiveTab('Home'); // Update the active tab when this screen is rendered
//           return <SignHome />;
//         }}
//       </Tab.Screen>

//       <Tab.Screen
//         name={'Discover'}
//         // component={Discover}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <Feather name={'compass'} size={25} color={focused ? 'white' : 'grey'} />
//           ),
//         }}
//       >
//         {() => {
//           setLastActiveTab('Discover'); // Update the active tab when this screen is rendered
//           return <Discover />;
//         }}
//       </Tab.Screen>

//       <Tab.Screen
//         name={'Join'}
//         options={({ navigation }) => ({
//           tabBarButton: (props) => (
//             <CustomTabBarButton
//               {...props}
//               onPress={() => {
//                 setIsFocusedState(true);
//                 navigation.navigate('Join');
//               }}
//             >
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Image
//                   source={require('../../assets/join-logo-use.jpeg')}
//                   style={{
//                     width: 60,
//                     height: 60,
//                     marginBottom: 5,
//                     backgroundColor: 'red',
//                   }}
//                 />
//                 <Text style={{ color: props.focused ? 'white' : 'grey' }}>Join</Text>
//               </View>
//             </CustomTabBarButton>
//           ),
//         })}
//       >
//         {() => {
//           if (isFocusedState === true) {
//             return (
//               <JoinModal isFocusedState={isFocusedState} UpdateShareState={UpdateShareState} />
//             );
//           } else {
//             console.log(lastActiveTab); // This will give you the name of the current tab
//             switch (lastActiveTab) {
//               case 'Home':
//                 return <SignHome />;
//               case 'Discover':
//                 return <Discover />;
//               default:
//                 return <SignHome />;
//             }
//           }
//         }}
//       </Tab.Screen>
//     </Tab.Navigator>
//   );
// };

// export default Tabs;

// import React, { useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Feather } from '@expo/vector-icons';
// import SignHome from '../Screens/SignHome';
// import HomeNav from '../Screens/HomeNav';
// import Discover from '../Screens/Discover';
// import SearchInput from '../Screens/SearchInput';
// import LanguageSelectionModal from '../Screens/LanguageSelectionModal';
// import Join from '../Screens/Join';
// import { View, Image, Text, Pressable } from 'react-native';
// import JoinModal from './JoinModal';

// const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({ children, onPress }) => (
//   <Pressable
//     onPress={onPress}
//     style={{
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: 15,
//     }}
//   >
//     {children}
//   </Pressable>
// );

// const Tabs = () => {
//   const [isFocusedState, setIsFocusedState] = useState(false);
//   const [lastActiveTabIndex, setLastActiveTabIndex] = useState('Home');
//   const [testFocusedHome, setTestFocusedHome] = useState(false);
//   const [testFocusedDiscover, setTestFocusedDiscover] = useState(false);

//   const UpdateShareState = (newBoolean) => {
//     setIsFocusedState(newBoolean);
//   };

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'white',
//         tabBarInactiveTintColor: 'grey',
//         tabBarStyle: {
//           backgroundColor: '#2b332d',
//         },
//         headerStyle: {
//           backgroundColor: '#141c16',
//         },
//         headerShown: true,
//       }}
//     >
//       <Tab.Screen
//         name={'Home'}
//         options={({ navigation }) => ({
//           tabBarButton: ({ focused }) => (
//             <CustomTabBarButton
//               onPress={() => {
//                 setLastActiveTabIndex('Home');
//                 setTestFocusedHome(true);
//                 setTestFocusedDiscover(false);
//                 navigation.navigate('Home');
//               }}
//             >
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Feather name={'home'} size={25} color={testFocusedHome ? 'white' : 'grey'} />
//                 <Text style={{ color: testFocusedHome ? 'white' : 'grey' }}>Home</Text>
//               </View>
//             </CustomTabBarButton>
//           ),
//           header: ({ scene }) => (lastActiveTabIndex === 'Home' ? <HomeNav /> : null),
//         })}
//       >
//         {() => {
//           setLastActiveTabIndex('Home');
//           return <SignHome />;
//         }}
//       </Tab.Screen>

//       <Tab.Screen
//         name={'Discover'}
//         options={({ navigation }) => ({
//           tabBarButton: ({ focused }) => (
//             <CustomTabBarButton
//               onPress={() => {
//                 setLastActiveTabIndex('Discover');
//                 setTestFocusedHome(false);
//                 setTestFocusedDiscover(true);
//                 navigation.navigate('Discover');
//               }}
//             >
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Feather
//                   name={'compass'}
//                   size={25}
//                   color={testFocusedDiscover ? 'white' : 'grey'}
//                 />
//                 <Text style={{ color: testFocusedDiscover ? 'white' : 'grey' }}>Discover</Text>
//               </View>
//             </CustomTabBarButton>
//           ),
//           header: ({ scene }) => (lastActiveTabIndex === 'Discover' ? <HomeNav /> : null),
//         })}
//       >
//         {() => {
//           setLastActiveTabIndex('Discover');
//           return <Discover />;
//         }}
//       </Tab.Screen>

//       <Tab.Screen
//         name={'Join'}
//         options={({ navigation }) => ({
//           tabBarButton: (props) => (
//             <CustomTabBarButton
//               {...props}
//               onPress={() => {
//                 setIsFocusedState(true);
//                 navigation.navigate('Join');
//               }}
//             >
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Image
//                   source={require('../../assets/join-logo-use.jpeg')}
//                   style={{
//                     width: 60,
//                     height: 60,
//                     marginBottom: 5,
//                     backgroundColor: 'red',
//                   }}
//                 />
//                 <Text style={{ color: props.focused ? 'white' : 'grey' }}>Join</Text>
//               </View>
//             </CustomTabBarButton>
//           ),
//           header: ({ scene }) =>
//             isFocusedState ? null : lastActiveTabIndex === 'Join' ? <HomeNav /> : null,
//         })}
//       >
//         {() => {
//           if (isFocusedState === true) {
//             return (
//               <JoinModal isFocusedState={isFocusedState} UpdateShareState={UpdateShareState} />
//             );
//           } else {
//             console.log(lastActiveTabIndex);
//             switch (lastActiveTabIndex) {
//               case 'Home':
//                 return <SignHome />;
//               case 'Discover':
//                 return <Discover />;
//               default:
//                 return <SignHome />;
//             }
//           }
//         }}
//       </Tab.Screen>
//     </Tab.Navigator>
//   );
// };

// export default Tabs;

// ... (previous code)

// const JoinModal = ({ isFocusedState, UpdateShareState }) => {
//   return (
//     <SafeAreaView style={styles.containerWrapper}>
//       <View style={styles.wrapper}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={isFocusedState}
//           onRequestClose={() => {
//             UpdateShareState(false, 'Join'); // Pass the active tab name as the second argument.
//           }}
//         >
//           {/* ... (previous code) */}
//           <View style={styles.modalButton}>
//             <Pressable
//               style={styles.btnCancel}
//               onPress={() => {
//                 UpdateShareState(false, 'Join'); // Pass the active tab name as the second argument.
//               }}
//             >
//               <Feather name="x" size={24} color="pink" />
//             </Pressable>
//             <Text>{'Join game'}</Text>
//             <Pressable style={styles.btnHelp} onPress={() => UpdateShareState(false, 'Join')}>
//               <MaterialIcons name="help-center" size={24} color="pink" />
//             </Pressable>
//           </View>
//           {/* ... (previous code) */}
//         </Modal>
//       </View>
//     </SafeAreaView>
//   );
// };

// // ... (previous code)

// export default JoinModal;

// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// const ToggleButtons = () => {
//   const [isActiveButton1, setIsActiveButton1] = useState(true);
//   const [isActiveButton2, setIsActiveButton2] = useState(false);

//   // Function to toggle the buttons
//   const toggleButton1 = () => {
//     setIsActiveButton1(true);
//     setIsActiveButton2(false);
//   };

//   const toggleButton2 = () => {
//     setIsActiveButton1(false);
//     setIsActiveButton2(true);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={[styles.button, isActiveButton1 ? styles.activeButton : null]}
//         onPress={toggleButton1}
//       >
//         <Text style={[styles.buttonText, isActiveButton1 ? styles.activeButtonText : null]}>
//           Button 1
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.button, isActiveButton2 ? styles.activeButton : null]}
//         onPress={toggleButton2}
//       >
//         <Text style={[styles.buttonText, isActiveButton2 ? styles.activeButtonText : null]}>
//           Button 2
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     backgroundColor: 'grey',
//     marginHorizontal: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   activeButton: {
//     backgroundColor: 'blue',
//   },
//   activeButtonText: {
//     fontWeight: 'bold',
//   },
// });

// export default ToggleButtons;

// import React, { useState, useEffect } from 'react';
// import { View, TextInput, StyleSheet, Keyboard, Dimensions } from 'react-native';

// const TextInputWithDarkenedBackground = () => {
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const backgroundColor = isKeyboardVisible ? 'rgba(0, 0, 0, 0.5)' : 'transparent';

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter text..."
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textInput: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
// });

// export default TextInputWithDarkenedBackground;

// useEffect(() => {
//   const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);

//   const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

//   return () => {
//     keyboardDidShowListener.remove();
//     keyboardDidHideListener.remove();
//   };
// }, []);

// const handleKeyboardShow = async () => {
//   try {
//     // Reduce screen brightness
//     await Brightness.setBrightnessAsync(0.3);
//   } catch (error) {
//     console.error('Error setting brightness:', error);
//   }
// };

// const handleKeyboardHide = async () => {
//   try {
//     // Restore original screen brightness
//     await Brightness.setBrightnessAsync(1);
//   } catch (error) {
//     console.error('Error setting brightness:', error);
//   }
// };

// useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);

//     const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const handleKeyboardShow = async () => {
//     try {
//       setKeyboardVisible(true);
//       // Reduce screen brightness
//       // await Brightness.setBrightnessAsync(0.3);

//       const { status } = await Brightness.requestPermissionsAsync();
//       if (status === 'granted') {
//         Brightness.setSystemBrightnessAsync(1);
//       }
//       // console.log(Brightness.getBrightnessAsync());
//     } catch (error) {
//       console.error('Error setting brightness:', error);
//     }
//   };

//   const handleKeyboardHide = async () => {
//     try {
//       setKeyboardVisible(true);
//       // Restore original screen brightness
//       // await Brightness.setBrightnessAsync(1);

//       const { status } = await Brightness.requestPermissionsAsync();
//       if (status === 'granted') {
//         Brightness.setSystemBrightnessAsync(1);
//       }
//       console.log(Brightness.getBrightnessAsync());
//     } catch (error) {
//       console.error('Error setting brightness:', error);
//     }
//   };

///////////////////////
// import { Pressable, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import {
//   Ionicons,
//   Entypo,
//   MaterialIcons,
//   FontAwesome,
//   FontAwesome5,
//   AntDesign,
// } from '@expo/vector-icons';

// const LibraryHeader = () => {
//   return (
//     <View style={styles.libraryHeader}>
//       <Text style={styles.libraryHeaderText}>Library</Text>
//     </View>
//   );
// };

// export default function LibraryScreen() {
//   return (
//     <View>
//       <LibraryHeader />
//       <View style={styles.container}>
//         <View style={styles.upper}>
//           <Pressable>
//             <View style={styles.libraryItemContainer}>
//               <Ionicons
//                 style={styles.libraryItemIcon}
//                 name="person-outline"
//                 size={30}
//                 color="violet"
//               />
//               <Text style={styles.libraryItemText}>Kahoot</Text>
//             </View>
//           </Pressable>

//           <Pressable>
//             <View style={styles.libraryItemContainer}>
//               <Entypo style={styles.libraryItemIcon} name="bar-graph" size={30} color="violet" />
//               <Text style={styles.libraryItemText}>Reports</Text>
//             </View>
//           </Pressable>
//         </View>

//         <View style={styles.lower}>
//           <Pressable>
//             <View style={styles.libraryItemContainer}>
//               <MaterialIcons
//                 style={styles.libraryItemIcon}
//                 name="groups"
//                 size={30}
//                 color="violet"
//               />
//               <Text style={styles.libraryItemTextlight}>Groups</Text>
//             </View>
//           </Pressable>

//           <Pressable>
//             <View style={styles.libraryItemContainer}>
//               <FontAwesome
//                 style={styles.libraryItemIcon}
//                 name="graduation-cap"
//                 size={28}
//                 color="violet"
//               />
//               <Text style={styles.libraryItemTextlight}>Study</Text>
//             </View>
//           </Pressable>

//           <Pressable>
//             <View style={styles.libraryItemContainer}>
//               <FontAwesome5
//                 style={styles.libraryItemIcon}
//                 name="book-open"
//                 size={30}
//                 color="violet"
//               />
//               <Text style={styles.libraryItemTextlight}>Courses</Text>
//             </View>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   libraryHeader: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     height: 80,
//     //setting shadow
//     elevation: 5,
//     shadowColor: 'black',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//   },
//   libraryHeaderText: {
//     fontSize: 25,
//     fontWeight: 600,
//   },
//   container: {
//     marginTop: 100,
//     justifyContent: 'center',
//   },
//   upper: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     width: 370,
//     alignSelf: 'center',
//     elevation: 5,
//     shadowColor: 'black',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//   },
//   lower: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     marginTop: 30,
//     width: 370,
//     alignSelf: 'center',
//     elevation: 5,
//     shadowColor: 'black',
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//   },
//   libraryItemContainer: {
//     flexDirection: 'row',
//     gap: 20,
//     margin: 5,
//     elevation: 5, // Adjust the value as per your requirement
//     shadowColor: '#828484', // Set the shadow color
//     shadowOpacity: 0.3, // Set the shadow opacity
//     shadowRadius: 0, // Set the shadow radius
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     padding: 5,
//   },
//   libraryItemIcon: {
//     marginLeft: 15,
//   },
//   libraryItemText: {
//     fontWeight: 700,
//     fontSize: 25,
//   },
//   libraryItemTextlight: {
//     fontWeight: 400,
//     fontSize: 25,
//   },
// });

/*
<Entypo name="bar-graph" size={24} color="black" /> --for graph
<MaterialIcons name="groups" size={24} color="black" /> -- for groups
<FontAwesome name="graduation-cap" size={24} color="black" /> --for study
<FontAwesome5 name="book-open" size={24} color="black" /> --for courses

<AntDesign name="rightcircle" size={24} color="black" /> --for default cases

*/

// import React, { useState } from 'react';
// import { View, TextInput, Text, StyleSheet } from 'react-native';

// const KeyboardTextListener = () => {
//   const [textInputValue, setTextInputValue] = useState('');

//   const handleTextChange = (text) => {
//     setTextInputValue(text);
//     // Additional logic or processing you want to perform with the updated text value.
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Type here..."
//         value={textInputValue}
//         onChangeText={handleTextChange}
//       />
//       <Text>Text Value: {textInputValue}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textInput: {
//     width: '80%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//   },
// });

// export default KeyboardTextListener;

// ... (import statements)
