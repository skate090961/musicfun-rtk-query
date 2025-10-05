import type {TrackData} from "@/features/tracks/api/tracks-api.types.ts";
import {Card, Flex, Heading, Text} from "@radix-ui/themes";
import {memo} from "react";

type TrackCardProps = {
    track: TrackData
}

export const TrackCard = memo(({track}: TrackCardProps) => {
    const {title, user, attachments} = track.attributes

    return (
        <Card size={"2"} key={track.id}>
            <Flex align={'center'} justify={'between'}>
                <Flex direction={'column'}>
                    <Heading as={'h3'} mt={'3'} color={'violet'} truncate>{title}</Heading>
                    <Text as={'p'} truncate>Name: {user.name}</Text>
                </Flex>
                {attachments.length ? <audio controls src={attachments[0]?.url}/> : "no file"}
            </Flex>
        </Card>
    )
})