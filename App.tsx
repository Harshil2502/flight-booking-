import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import './src/i18n'
import AppNavigator from '@navigation/AppNavigator';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { store } from '@redux/store';
import { useFonts } from '@expo-google-fonts/inter';
import { fontConfig } from './src/utils/loadFonts';

const App = () => {
  const [fontsLoaded] = useFonts(fontConfig);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <AppNavigator />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;