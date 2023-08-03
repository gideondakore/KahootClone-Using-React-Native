// // import React from 'react';
// // import { View, TouchableOpacity, Text } from 'react-native';

// // const Dialpad = ({ onDigitPress, onOkPress }) => {
// //   const handleDigitPress = (digit) => {
// //     onDigitPress(digit);
// //   };

// //   const handleOkPress = () => {
// //     onOkPress();
// //   };

// //   return (
// //     <View>
// //       <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
// //         {[...Array(10).keys()].map((digit) => (
// //           <TouchableOpacity
// //             key={digit}
// //             onPress={() => handleDigitPress(digit)}
// //             style={{
// //               padding: 10,
// //               borderWidth: 1,
// //               borderColor: '#000',
// //               width: '30%',
// //               margin: '1.5%',
// //             }}
// //           >
// //             <Text style={{ fontSize: 24, textAlign: 'center' }}>{digit}</Text>
// //           </TouchableOpacity>
// //         ))}
// //       </View>
// //       <TouchableOpacity
// //         onPress={handleOkPress}
// //         style={{ padding: 10, backgroundColor: '#000', marginTop: 10 }}
// //       >
// //         <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center' }}>OK</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // };

// // export default Dialpad;

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Dialpad = ({ onDigitPress, onOkPress }) => {
  const handleDigitPress = (digit) => {
    onDigitPress(digit);
  };

  const handleOkPress = () => {
    onOkPress();
  };

  const renderRow = (digits) => (
    <View style={styles.row}>
      {digits.map((digit) => (
        <TouchableOpacity key={digit} onPress={() => handleDigitPress(digit)} style={styles.button}>
          <Text style={styles.buttonText}>{digit}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View>
      {renderRow([1, 2, 3])}
      {renderRow([4, 5, 6])}
      {renderRow([7, 8, 9])}
      <View style={styles.row}>
        <TouchableOpacity style={styles.emptyButton} />
        <TouchableOpacity onPress={() => handleDigitPress(0)} style={styles.button}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOkPress} style={styles.button}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: 80,
    marginHorizontal: 5,
  },
  emptyButton: {
    width: 80,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Dialpad;

// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

// const Dialpad = ({ onDigitPress, onClearPress }) => {
//   const handleDigitPress = (digit) => {
//     onDigitPress(digit);
//   };

//   const handleClearPress = () => {
//     onClearPress();
//   };

//   const renderRow = (digits) => (
//     <View style={styles.row}>
//       {digits.map((digit) => (
//         <TouchableOpacity key={digit} onPress={() => handleDigitPress(digit)} style={styles.button}>
//           <Text style={styles.buttonText}>{digit}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   return (
//     <View>
//       {renderRow([1, 2, 3])}
//       {renderRow([4, 5, 6])}
//       {renderRow([7, 8, 9])}
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.button} onPress={handleClearPress}>
//           <Text style={styles.buttonText}>Clear</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleDigitPress(0)} style={styles.button}>
//           <Text style={styles.buttonText}>0</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.emptyButton} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   button: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#000',
//     width: 80,
//     marginHorizontal: 5,
//   },
//   emptyButton: {
//     width: 80,
//   },
//   buttonText: {
//     fontSize: 24,
//     textAlign: 'center',
//   },
// });

// export default Dialpad;
