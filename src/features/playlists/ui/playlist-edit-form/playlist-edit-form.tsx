import {memo} from "react";
import {type SubmitHandler, useForm} from "react-hook-form";
import type { UpdatePlaylistArgs } from "../../api/playlists-api.types";

type PlaylistEditFormProps = {
    className?: string
    initialData: UpdatePlaylistArgs
    onSubmit: SubmitHandler<UpdatePlaylistArgs>
    onCancel: () => void
}

export const PlaylistEditForm = memo((props: PlaylistEditFormProps) => {
    const {
        className,
        initialData,
        onSubmit,
        onCancel
    } = props

    const { register, handleSubmit } = useForm<UpdatePlaylistArgs>({
        defaultValues: initialData
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <h3>Edit Playlist</h3>
            <div>
                <input
                    {...register('title')}
                    placeholder="title"
                />
            </div>
            <div>
                <input
                    {...register('description')}
                    placeholder="description"
                />
            </div>
            <div>
                <button type="submit">
                    Save
                </button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
});