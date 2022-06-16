import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import authReducer from '../features/auth/authSlice'
import toggleReducer from '../features/toggle/toggleSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    toggle: toggleReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export const persistor = persistStore(store)