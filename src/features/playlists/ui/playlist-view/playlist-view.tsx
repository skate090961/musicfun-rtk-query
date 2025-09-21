import {memo} from "react";
import {useDeletePlaylistMutation} from "@/features/playlists/api/playlists-api.ts";

type PlaylistViewProps = {
    className?: string
    playlistId: string
    title: string
    description: string
    username: string
    onEdit: () => void
}

export const PlaylistView = memo((props: PlaylistViewProps) => {
    const {
        className,
        title,
        description,
        username,
        playlistId,
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
            <h3>title: {title}</h3>
            <p>description: {description}</p>
            <p>username: {username}</p>
            <div>
                <button onClick={onDelete}>
                    Delete
                </button>
                <button onClick={onEdit}>
                    Edit
                </button>
            </div>
        </div>
    );
});
