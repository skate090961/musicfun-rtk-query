import {baseApi} from "@/common/api";
import type {PlaylistsShema} from "@/features/playlists";

export interface StateSchema {
    playlists: PlaylistsShema;
    [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>
}