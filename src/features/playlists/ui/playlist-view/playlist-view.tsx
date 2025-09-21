import {memo} from "react";
import {useDeletePlaylistMutation} from "../../api/playlists-api";
import {PlaylistUploadCover} from "../playlist-upload-cover/playlist-upload-cover";
import type {Cover} from "@/common/types";

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
        <div className={className}>
            <PlaylistUploadCover playlistId={playlistId} images={images} />
            <h3>title: {title}</h3>
            <p>description: {description}</p>
            <p>username: {username}</p>
            <button onClick={onDelete}>Delete</button>
            <button onClick={onEdit}>Edit</button>
        </div>
    );
});
