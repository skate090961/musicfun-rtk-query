import {baseApi} from '@/common/api'
import {configureStore, type ReducersMapObject} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import type {StateSchema} from './state-schema'
import {playlistsReducer} from "@/features/playlists";

export const store = configureStore({
    reducer: {
        playlists: playlistsReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    } as ReducersMapObject<StateSchema>,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch