import React from 'react';

import { View, StatusBar } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';
import AppStyle from './src/styles/AppStyle';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import { persistor } from './src/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={[AppStyle.flex1]}>
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
