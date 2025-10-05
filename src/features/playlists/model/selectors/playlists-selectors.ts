import type {StateSchema} from "@/app/providers/store";

export const getPlaylistsPageSize = (state: StateSchema) => state.playlists?.pageSize;
export const getPlaylistsCurrentPage = (state: StateSchema) => state.playlists?.currentPage;
export const getPlaylistsSearch = (state: StateSchema) => state.playlists?.search;
