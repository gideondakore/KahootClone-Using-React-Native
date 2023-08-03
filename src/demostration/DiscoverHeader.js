// DiscoverHeader.js
import React from 'react';
import { View, Text } from 'react-native';
// import LanguageSelectionModal from '../Screens/LanguageSelectionModal';
import LanguageSelectionModal from '../Screens/LanguageSelectionModal';
// import SearchInput from '../Screens/SearchInput';
import SearchInput from '../Screens/SearchInput';

const DiscoverHeader = () => {
  return (
    <View>
      <LanguageSelectionModal />
      <SearchInput />
    </View>
  );
};

export default DiscoverHeader;
