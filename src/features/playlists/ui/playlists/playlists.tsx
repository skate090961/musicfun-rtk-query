import {memo} from "react";
import {PlaylistCard} from "../playlist-card/playlist-card";
import {Flex, Heading, Skeleton} from "@radix-ui/themes";
import type {PlaylistData} from "@/features/playlists/api/playlists-api.types.ts";

type PlaylistsProps = {
    playlists?: PlaylistData[]
    isLoading?: boolean
}

const skeletons = new Array(10)
    .fill(0)
    .map((_, idx) => <Skeleton key={idx} width={'340px'} height={'404px'}/>)

export const Playlists = memo((props: PlaylistsProps) => {
    const {
        playlists,
        isLoading
    } = props

    return (
        <Flex direction={'column'} gap={'5'} mb={'5'}>
            <Flex gap="5" wrap={"wrap"}>
                {isLoading && skeletons}
                {!playlists?.length && !isLoading && (
                    <Heading as={'h2'} align={'center'}>Playlists not found</Heading>
                )}
                {playlists?.map(p => (
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
        </Flex>
    )
})