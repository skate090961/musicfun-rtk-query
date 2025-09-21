import type {Tag} from "@/common/types";
import {memo, useCallback, useMemo, useState} from "react";
import {useUpdatePlaylistMutation} from "../../api/playlists-api";
import type {SubmitHandler} from "react-hook-form";
import type {UpdatePlaylistBody} from "../../api/playlists-api.types";
import s from './playlist-card.module.scss'
import {PlaylistEditForm} from "../playlist-edit-form/playlist-edit-form";
import {PlaylistView} from "../playlist-view/playlist-view";

type PlaylistCardProps = {
    playlistId: string;
    title: string;
    description: string;
    username: string;
    tags: Tag[];
}

export const PlaylistCard = memo((props: PlaylistCardProps) => {
    const {
        playlistId,
        title,
        description,
        username,
        tags
    } = props

    const [isEditing, setIsEditing] = useState(false);

    const [updatePlaylist] = useUpdatePlaylistMutation();

    const handleToggleEditForm = useCallback(() => setIsEditing(prev => !prev), []);

    const handleSubmitEdit = useCallback<SubmitHandler<UpdatePlaylistBody>>(
        async (body) => {
            try {
                await updatePlaylist({
                    playlistId,
                    body
                }).unwrap();
                handleToggleEditForm();
            } catch (error) {
                // handle errors
                console.error(error);
            }
        },
        [playlistId, handleToggleEditForm, updatePlaylist]
    );

    const initialFormData: UpdatePlaylistBody = useMemo(() => (
        {
            title,
            description,
            tagIds: tags.map(tag => tag.id)
        }
    ), [description, tags, title]);

    return (
        <article className={s.root}>
            {isEditing ? (
                <PlaylistEditForm
                    initialData={initialFormData}
                    onSubmit={handleSubmitEdit}
                    onCancel={handleToggleEditForm}
                />
            ) : (
                <PlaylistView
                    playlistId={playlistId}
                    title={title}
                    description={description}
                    username={username}
                    onEdit={handleToggleEditForm}
                />
            )}
        </article>
    );
});