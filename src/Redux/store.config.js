import { configureStore } from '@reduxjs/toolkit';
import sessionReducer, { persistedState } from './slice/user'

export const store = configureStore({
    reducer: {
        session: sessionReducer,
    },
    preloadedState: persistedState,
});