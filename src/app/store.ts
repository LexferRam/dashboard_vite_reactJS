// import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'

// //slices
// import { loadingSlice, todoSlice } from '../features';


// export const store = configureStore({
//     reducer: {
//         loading: loadingSlice,
//         todosList: todoSlice,
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//     devTools: true//process.env.NODE_ENV !== 'production',
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
//slices
import { loadingSlice, todoSlice } from '../features';

export const store = configureStore({
    reducer:{
       loading: loadingSlice,
       todosList: todoSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: true//process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;