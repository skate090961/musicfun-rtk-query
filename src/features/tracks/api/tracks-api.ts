import {baseApi} from "@/common/api";
import type { FetchTracksResponse } from "./tracks-api.types";

export const tracksApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getTracks: build.infiniteQuery<FetchTracksResponse, void, string | null>({
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (lastPage) => {
                    return lastPage.meta.nextCursor || null
                }
            },
            query: ({pageParam}) => ({
                url: 'playlists/tracks',
                params: {
                    cursor: pageParam,
                    paginationType: 'cursor',
                    pageSize: 5
                }
            })
        })
    })
})

export const {useGetTracksInfiniteQuery} = tracksApi