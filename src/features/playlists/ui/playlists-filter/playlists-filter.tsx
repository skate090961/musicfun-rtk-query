import {Box, IconButton, TextField} from "@radix-ui/themes";
import {Cross1Icon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {type ChangeEvent, memo, useCallback} from "react";
import {useAppDispatch} from "@/common/hooks/useAppDispatch.ts";
import {useSelector} from "react-redux";
import { playlistsActions } from "../../model/slices/playlists-slice";
import { getPlaylistsSearch } from "../../model/selectors/playlists-selectors";

export const PlaylistsFilter = memo(() => {
    const search = useSelector(getPlaylistsSearch)
    const dispatch = useAppDispatch()

    const onClearSearchHandler = useCallback(() =>
        dispatch(playlistsActions.updateSearch('')
        ), [dispatch]
    )

    const onChangeSearchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(playlistsActions.updateSearch(e.currentTarget.value))
        dispatch(playlistsActions.updateCurrentPage(1))
    }, [dispatch])

    return (
        <Box mt={'3'}>
            <TextField.Root
                placeholder="Search the playlists…"
                value={search}
                onChange={onChangeSearchHandler}
            >
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16"/>
                </TextField.Slot>
                {!!search.length && (
                    <TextField.Slot>
                        <IconButton variant="ghost" onClick={onClearSearchHandler}>
                            <Cross1Icon/>
                        </IconButton>
                    </TextField.Slot>
                )}
            </TextField.Root>
        </Box>
    )
})