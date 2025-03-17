"use client"
import { combineReducers, configureStore } from '@reduxjs/toolkit'
 import AutomationReducer from '@/redux/slices/automation'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const rootReducer = combineReducers({
    AutomationReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})


//This code is related to TypeScript types and Redux. It helps provide strong type safety when working with the Redux store in a TypeScript-based project.

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
