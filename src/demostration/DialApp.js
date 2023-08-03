// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   Text,
//   Keyboard,
// } from 'react-native';
// import Dialpad from './Dialpad';

// const DialApp = () => {
//   const [textInputValue, setTextInputValue] = useState('');
//   const [showDialpad, setShowDialpad] = useState(false);

//   const handleDigitPress = (digit) => {
//     setTextInputValue(textInputValue + digit);
//   };

//   const handleOkPress = () => {
//     // Perform any actions you need when the user clicks "OK" on the dialpad.
//     setShowDialpad(false);
//   };

//   const toggleDialpad = () => {
//     Keyboard.dismiss();
//     setShowDialpad(!showDialpad);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <TextInput
//         value={textInputValue}
//         onChangeText={setTextInputValue}
//         onFocus={toggleDialpad}
//         placeholder="Enter text here"
//         style={{ borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 }}
//       />

//       {showDialpad && <Dialpad onDigitPress={handleDigitPress} onOkPress={handleOkPress} />}
//     </KeyboardAvoidingView>
//   );
// };

// export default DialApp;

// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   Text,
//   Keyboard,
// } from 'react-native';
// import Dialpad from './Dialpad';

// const DialApp = () => {
//   const [textInputValue, setTextInputValue] = useState('');
//   const [showDialpad, setShowDialpad] = useState(false);

//   const handleDigitPress = (digit) => {
//     setTextInputValue(textInputValue + digit);
//   };

//   const handleOkPress = () => {
//     // Perform any actions you need when the user clicks "OK" on the dialpad.
//     setShowDialpad(false);
//   };

//   const handleDeletePress = () => {
//     setTextInputValue('');
//   };

//   const toggleDialpad = () => {
//     Keyboard.dismiss();
//     setShowDialpad(!showDialpad);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <TextInput
//         value={textInputValue}
//         onChangeText={setTextInputValue}
//         onFocus={toggleDialpad}
//         placeholder="Enter text here"
//         style={{ borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 }}
//       />

//       <TouchableOpacity
//         onPress={handleDeletePress}
//         style={{ padding: 10, backgroundColor: 'red', borderRadius: 5 }}
//       >
//         <Text style={{ color: '#fff', fontSize: 18 }}>Delete</Text>
//       </TouchableOpacity>

//       {showDialpad && <Dialpad onDigitPress={handleDigitPress} onOkPress={handleOkPress} />}
//     </KeyboardAvoidingView>
//   );
// };

// export default DialApp;

import React, { useState } from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Keyboard,
} from 'react-native';
import Dialpad from './Dialpad';

const App = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [showDialpad, setShowDialpad] = useState(false);

  const handleDigitPress = (digit) => {
    setTextInputValue(textInputValue + digit);
  };

  const handleDeletePress = () => {
    setTextInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleOkPress = () => {
    // Perform any actions you need when the user clicks "OK" on the dialpad.
    setShowDialpad(false);
  };

  const toggleDialpad = () => {
    Keyboard.dismiss();
    setShowDialpad(!showDialpad);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TextInput
        value={textInputValue}
        onChangeText={setTextInputValue}
        onFocus={toggleDialpad}
        placeholder="Enter text here"
        style={{ borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 }}
      />

      <TouchableOpacity
        onPress={handleDeletePress}
        style={{ padding: 10, backgroundColor: 'red', borderRadius: 5 }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Clear</Text>
      </TouchableOpacity>

      {showDialpad && <Dialpad onDigitPress={handleDigitPress} onOkPress={handleOkPress} />}
    </KeyboardAvoidingView>
  );
};

export default App;
