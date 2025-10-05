import {Pagination} from "@/common/components/pagination";
import {useCallback} from "react";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import { playlistsActions } from "../../model/slices/playlists-slice";
import {useSelector} from "react-redux";
import {getPlaylistsCurrentPage, getPlaylistsPageSize} from "../../model/selectors/playlists-selectors";

type PlaylistsPaginationProps = {
    pagesCount?: number;
}

export const PlaylistsPagination = ({pagesCount}: PlaylistsPaginationProps) => {
    const currentPage = useSelector(getPlaylistsCurrentPage)
    const pageSize = useSelector(getPlaylistsPageSize)

    const dispatch = useAppDispatch()

    const changePageSizeHandler = useCallback((size: string) => {
        dispatch(playlistsActions.updateCurrentPage(1))
        dispatch(playlistsActions.updatePageSize(size))
    }, [dispatch])

    const changeCurrentPageHandler = useCallback((currentPage: number) => {
        dispatch(playlistsActions.updateCurrentPage(currentPage))
    }, [dispatch])


    return (
        <Pagination
            currentPage={currentPage}
            setCurrentPage={changeCurrentPageHandler}
            pagesCount={pagesCount || 1}
            pageSize={pageSize}
            changePageSize={changePageSizeHandler}
        />
    )
}