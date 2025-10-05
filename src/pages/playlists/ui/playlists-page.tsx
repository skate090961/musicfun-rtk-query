import {memo} from "react";
import {Playlists, PlaylistsFilter, PlaylistsPagination, usePlaylists} from "@/features/playlists";
import {Flex} from "@radix-ui/themes";

const PlaylistsPage = () => {
    const {
       data: playlists,
       isLoading: playlistsIsLoading
    } = usePlaylists()

    return (
        <Flex direction={'column'} gap={'3'} pb={'5'}>
            <PlaylistsFilter />
            <Playlists
                playlists={playlists?.data}
                isLoading={playlistsIsLoading}
            />
            <PlaylistsPagination pagesCount={playlists?.meta.pagesCount}/>
        </Flex>
    )
}

export default memo(PlaylistsPage)