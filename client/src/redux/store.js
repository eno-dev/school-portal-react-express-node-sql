import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../features/auth/authSlice';
import toggleReducer from '../features/toggle/toggleSlice';
import sidebarReducer from '../features/secondary-sidebar/sidebarSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import navHeightReducer from '../features/navbar-height/navHeightSlice';
import sidebarHomeReducer from '../features/sidebar-home-toggle/sidebarHomeSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [apiSlice.reducerPath],
};

const appReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  toggle: toggleReducer,
  sidebar: sidebarReducer,
  navHeight: navHeightReducer,
  sidebarHomeToggle: sidebarHomeReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
