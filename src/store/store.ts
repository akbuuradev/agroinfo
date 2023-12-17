import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit' 
import  YesSlice  from './reducer/yesSlice'

const rootReducer = combineReducers({
    YesSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type AppState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']