import React from 'react';
import { View, Text, Button } from 'react-native';

const ChildComponent = ({ sharedState, updateSharedState }) => {
  const handleButtonPress = () => {
    // Update the shared state when the button is pressed
    updateSharedState(true);
  };

  return (
    <View>
      <Text>{sharedState}</Text>
      <Button title="Change State" onPress={handleButtonPress} />
    </View>
  );
};

export default ChildComponent;

// ... (other import statements)

// import Join from '../Screens/Join'; // Import the Join component

// const Tabs = () => {
//   // ... (other code)

//   return (
//     <Tab.Navigator
//       // ... (other screenOptions)
//     >
//       <Tab.Screen
//         name={'Join'}
//         // Remove the inline function and pass the Join component as children
//         options={({ navigation }) => ({
//           tabBarButton: (props) => (
//             <CustomTabBarButton
//               {...props}
//               onPress={() => {
//                 setIsFocusedState(true); // Set the state to true to show the modal
//                 navigation.navigate('Join');
//               }}
//             >
//               {/* Pass the Join component as children */}
//               <Join isFocusedState={isFocusedState} UpdateShareState={updateShareState} />
//               {/* Add any other UI elements here */}
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
//       />
//       {/* ... (other Tab.Screen components) */}
//     </Tab.Navigator>
//   );
// };

// export default Tabs;
