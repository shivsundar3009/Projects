import {configureStore} from '@reduxjs/toolkit'
import  UserSlice  from '../features/User/UserSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: 'User',
     storage,
}

const persistedReducer = persistReducer(persistConfig , UserSlice)


export const store = configureStore({

    reducer: {
        User: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),

})

export const persistor  = persistStore(store)
