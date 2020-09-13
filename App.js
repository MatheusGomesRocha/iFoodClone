import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store';
import Preload from './src/navigators/PreloadStack';

function App() {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate loading={null} persistor={persistor}>
          <Preload/>
        </PersistGate>
      </NavigationContainer>
    </Provider>   
  );
}
export default App;
