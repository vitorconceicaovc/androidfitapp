import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import Reducers from './reducers/index';

const persistedReducer = persistReducer({
    key:'root',
    storage:AsyncStorage,
    whitelist:['userReducer']
}, Reducers);

const store = createStore(persistedReducer);
let persistor = persistStore(store);

export {store, persistor};