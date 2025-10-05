import {useSelector} from "react-redux";

import {useDebounceValue} from "@/common/hooks";
import {useGetPlaylistsQuery} from "@/features/playlists";
import type {PlaylistsResponse} from "../api/playlists-api.types";
import {
    getPlaylistsCurrentPage,
    getPlaylistsPageSize,
    getPlaylistsSearch
} from "../model/selectors/playlists-selectors";

type UsePlaylistsResult = {
    data?: PlaylistsResponse
    isLoading: boolean
}

export const usePlaylists = (): UsePlaylistsResult => {
    const search = useSelector(getPlaylistsSearch)
    const currentPage = useSelector(getPlaylistsCurrentPage)
    const pageSize = useSelector(getPlaylistsPageSize)
    const debouncedSearch = useDebounceValue(search)

    const {
        data,
        isLoading,
    } = useGetPlaylistsQuery({
        search: debouncedSearch,
        pageNumber: currentPage,
        pageSize: pageSize
    })

    return {
        data: data,
        isLoading,
    };
}