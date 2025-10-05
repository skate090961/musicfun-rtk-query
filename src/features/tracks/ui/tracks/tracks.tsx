import {Flex} from "@radix-ui/themes";
import type {TrackData} from "../../api/tracks-api.types";
import {TrackCard} from "@/features/tracks/ui/track-card/track-card.tsx";
import {memo} from "react";

type TracksProps = {
    tracks: TrackData[]
}

export const Tracks = memo(({tracks}: TracksProps) => {
    return (
        <Flex direction={'column'} gap={'5'}>
            {tracks.map((t) => <TrackCard track={t} key={t.id}/>)}
        </Flex>
    )
})