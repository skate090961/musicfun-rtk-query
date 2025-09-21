import type {CreatePlaylistArgs, PlaylistData, PlaylistsResponse, UpdatePlaylistArgs} from "./playlists-api.types";
import {baseApi} from "@/common/api";

export const playlistsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPlaylists: build.query<PlaylistsResponse, void>({
            query: () => `playlists`,
            providesTags: ['Playlist']
        }),
        createPlaylist: build.mutation<{data: PlaylistData}, CreatePlaylistArgs>({
            query: (body) => ({
                method: 'post',
                url: 'playlists',
                body
            }),
            invalidatesTags: ['Playlist']
        }),
        deletePlaylist: build.mutation<void, string>({
            query: (playlistId ) => ({
                method: 'delete',
                url: `playlists/${playlistId}`,
            }),
            invalidatesTags: ['Playlist']
        }),
        updatePlaylist: build.mutation<void, UpdatePlaylistArgs>({
            query: ({playlistId, body}) => ({
                method: 'put',
                url: `playlists/${playlistId}`,
                body
            }),
            invalidatesTags: ['Playlist']
        }),
    }),
})

export const {
    useGetPlaylistsQuery,
    useCreatePlaylistMutation,
    useDeletePlaylistMutation,
    useUpdatePlaylistMutation
} = playlistsApi