import React, { useState } from 'react';
import { View } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [sharedState, setSharedState] = useState(false);

  // Define a function to update the shared state
  const updateSharedState = (newValue) => {
    setSharedState(newValue);
    console.log(sharedState);
    // return sharedState;
  };

  return (
    <View>
      <ChildComponent sharedState={sharedState} updateSharedState={updateSharedState} />
    </View>
  );
};

export default ParentComponent;
