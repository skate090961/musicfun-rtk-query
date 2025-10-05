import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type { PlaylistsShema } from '../types/playlists-shema';

const initialState: PlaylistsShema = {
    currentPage: 1,
    pageSize: 8,
    search: '',
}

const playlistsSlice = createSlice({
    name: 'articlesSlice',
    initialState,
    reducers: {
        updateSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
        updateCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
        updatePageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload
        }
    },
});

export const { reducer: playlistsReducer } = playlistsSlice;
export const { actions: playlistsActions } = playlistsSlice;
