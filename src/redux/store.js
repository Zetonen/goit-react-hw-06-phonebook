import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { sliceContact } from './sliceContact';
import { sliceFilter } from './sliceFilter';

const persistConfig = {
  key: 'phonebook',
  storage,
  whiteList: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: sliceContact,
  filter: sliceFilter,
});

const persistReducerContacts = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducerContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistR = persistStore(store);
