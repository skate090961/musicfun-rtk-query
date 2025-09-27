import type {Cover, Tag} from "@/common/types";
import {memo, useCallback, useMemo, useState} from "react";
import {useUpdatePlaylistMutation} from "../../api/playlists-api";
import type {SubmitHandler} from "react-hook-form";
import type {UpdatePlaylistArgs} from "../../api/playlists-api.types";
import {PlaylistEditForm} from "../playlist-edit-form/playlist-edit-form";
import {PlaylistView} from "../playlist-view/playlist-view";
import {Card} from "@radix-ui/themes";

type PlaylistCardProps = {
    playlistId: string;
    title: string;
    description: string;
    username: string;
    tags: Tag[];
    images: Cover[];
}

export const PlaylistCard = memo((props: PlaylistCardProps) => {
    const {
        playlistId,
        title,
        description,
        username,
        tags,
        images,
    } = props

    const [isEditing, setIsEditing] = useState(false);

    const [updatePlaylist] = useUpdatePlaylistMutation();

    const handleToggleEditForm = useCallback(() => setIsEditing(prev => !prev), []);

    const handleSubmitEdit = useCallback<SubmitHandler<UpdatePlaylistArgs>>(
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

    const initialFormData: UpdatePlaylistArgs = useMemo(() => (
        {
            title,
            description,
            tagIds: tags.map(tag => tag.id)
        }
    ), [description, tags, title]);

    return (
            <Card size={"3"}>
                {isEditing ? (
                    <PlaylistEditForm
                        initialData={initialFormData}
                        onSubmit={handleSubmitEdit}
                        onCancel={handleToggleEditForm}
                    />
                ) : (
                    <PlaylistView
                        playlistId={playlistId}
                        images={images}
                        title={title}
                        description={description}
                        username={username}
                        onEdit={handleToggleEditForm}
                    />
                )}
            </Card>
    );
});