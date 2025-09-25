import {memo} from "react";
import {useDeletePlaylistMutation} from "../../api/playlists-api";
import {PlaylistUploadCover} from "../playlist-upload-cover/playlist-upload-cover";
import type {Cover} from "@/common/types";
import {Box, Button, Flex, Heading, Inset, Text} from "@radix-ui/themes";

type PlaylistViewProps = {
    className?: string
    playlistId: string
    title: string
    description: string
    username: string
    images: Cover[]
    onEdit: () => void
}

export const PlaylistView = memo((props: PlaylistViewProps) => {
    const {
        className,
        title,
        description,
        username,
        playlistId,
        images,
        onEdit
    } = props

    const [deletePlaylist] = useDeletePlaylistMutation();

    const onDelete = () => {
        if (confirm('Are you sure you want to delete this playlist?')) {
            deletePlaylist(playlistId);
        }
    };

    return (
        <Box className={className}>
            <Inset clip="padding-box" pb="current">
                <PlaylistUploadCover playlistId={playlistId} images={images}/>
            </Inset>
            <Heading as={'h3'} mt={'3'} color={'violet'} truncate>{title}</Heading>
            <Text as={'p'} truncate>{description}</Text>
            <Text as={'p'} truncate>{username}</Text>
            <Flex gap={'3'} mt={'3'}>
                <Button variant={'outline'} onClick={onDelete}>Delete</Button>
                <Button onClick={onEdit}>Edit</Button>
            </Flex>
        </Box>
    );
});
