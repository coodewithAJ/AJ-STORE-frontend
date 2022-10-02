import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userSlice"
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
   
  } from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit"

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const reducer = combineReducers({
    cart:cartReducer,
    user:userReducer
})

const persistedReducer = persistReducer(persistConfig,reducer);

export const store = configureStore({
    reducer:persistedReducer
})



