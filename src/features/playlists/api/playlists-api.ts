import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {FetchPlaylistsArgs, PlaylistsResponse} from "./playlists-api.types";

export const playlistsApi = createApi({
    reducerPath: 'playlistsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        headers: {
            'API-KEY': import.meta.env.VITE_API_KEY
        }
    }),
    endpoints: (build) => ({
        getPlaylists: build.query<PlaylistsResponse, void>({
            query: () => `playlists`,
        }),
    }),
})

export const {useGetPlaylistsQuery} = playlistsApi