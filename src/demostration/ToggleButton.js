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

/////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// const ToggleButtons = () => {
//   const [activeButton, setActiveButton] = useState(1);

//   const handleButtonPress = (buttonNumber) => {
//     setActiveButton(buttonNumber);
//   };

//   return (
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity
//         style={[styles.toggleButton, activeButton === 1 && styles.active]}
//         onPress={() => handleButtonPress(1)}
//       >
//         <Text>Button 1</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.toggleButton, activeButton === 2 && styles.active]}
//         onPress={() => handleButtonPress(2)}
//       >
//         <Text>Button 2</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[styles.toggleButton, activeButton === 3 && styles.active]}
//         onPress={() => handleButtonPress(3)}
//       >
//         <Text>Button 3</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   buttonContainer: {
//     flexDirection: 'row',
//   },
//   toggleButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//   },
//   active: {
//     backgroundColor: 'lightblue',
//   },
// });

// export default ToggleButtons;

///////////////////////////////////////////////////////////////////////
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// const ToggleButtons = () => {
//   const [showButton3, setShowButton3] = useState(true);

//   const handleToggle = () => {
//     setShowButton3(!showButton3);
//   };

//   return (
//     <View style={styles.buttonContainer}>
//       <TouchableOpacity style={styles.toggleButton} onPress={() => handleToggle()}>
//         <Text>Toggle Button 3</Text>
//       </TouchableOpacity>

//       {/* Button 1 */}
//       <TouchableOpacity style={styles.toggleButton}>
//         <Text>Button 1</Text>
//       </TouchableOpacity>

//       {/* Button 2 */}
//       <TouchableOpacity style={styles.toggleButton}>
//         <Text>Button 2</Text>
//       </TouchableOpacity>

//       {/* Button 3 */}
//       {showButton3 && (
//         <TouchableOpacity style={styles.toggleButton}>
//           <Text>Button 3</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   buttonContainer: {
//     flexDirection: 'row',
//   },
//   toggleButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//   },
// });

// export default ToggleButtons;
