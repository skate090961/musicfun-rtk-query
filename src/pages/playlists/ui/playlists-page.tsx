import {memo, useCallback, useState} from "react";
import {PlaylistCreateForm, Playlists, PlaylistsFilter, useGetPlaylistsQuery} from "@/features/playlists";
import {Pagination} from "@/common/components/pagination";
import {Flex, Heading} from "@radix-ui/themes";
import {useDebounceValue} from "@/common/hooks";

const DEFAULT_PAGE_SIZE = '8'

const PlaylistsPage = () => {
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE)

    const debouncedSearch = useDebounceValue(search)

    const {
        data: playlists,
        isLoading: playlistsIsLoading
    } = useGetPlaylistsQuery({
        search: debouncedSearch,
        pageNumber: currentPage,
        pageSize: Number(pageSize)
    })

    const onClearSearchHandler = useCallback(() => setSearch(''), [])

    const onChangeSearchHandler = useCallback((search: string) => {
        setSearch(search)
        setCurrentPage(1)
    }, [])

    const changePageSizeHandler = useCallback((size: string) => {
        setCurrentPage(1)
        setPageSize(size)
    }, [])

    return (
        <Flex direction={'column'} gap={'3'}>
            <Heading
                as={'h1'}
                align={'center'}
                color={'violet'}
            >
                Playlists
            </Heading>
            <PlaylistCreateForm/>
            <PlaylistsFilter
                search={search}
                onChangeSearch={onChangeSearchHandler}
                onClear={onClearSearchHandler}
            />
            <Playlists
                playlists={playlists?.data}
                isLoading={playlistsIsLoading}
            />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pagesCount={playlists?.meta.pagesCount || 1}
                pageSize={pageSize}
                changePageSize={changePageSizeHandler}
            />
        </Flex>
    )
}

export default memo(PlaylistsPage)