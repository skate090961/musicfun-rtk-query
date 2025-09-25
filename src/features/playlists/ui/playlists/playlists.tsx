import {memo} from "react";
import {useGetPlaylistsQuery} from "../../api/playlists-api";
import {PlaylistCard} from "../playlist-card/playlist-card";
import {Flex} from "@radix-ui/themes";

export const Playlists = memo(() => {
    const {data: playlists} = useGetPlaylistsQuery()

    return (
        <Flex gap="5" wrap={"wrap"}>
            {playlists?.data.map(p => (
                <PlaylistCard
                    key={p.id}
                    playlistId={p.id}
                    images={p.attributes.images.main}
                    title={p.attributes.title}
                    description={p.attributes.description}
                    username={p.attributes.user.name}
                    tags={p.attributes.tags}
                />
            ))}
        </Flex>
    )
})