import {type SubmitHandler, useForm} from "react-hook-form";
import { useCreatePlaylistMutation } from "../../api/playlists-api";
import type { CreatePlaylistArgs } from "../../api/playlists-api.types";

export const PlaylistCreateForm = () => {
    const {register, handleSubmit, reset} = useForm<CreatePlaylistArgs>()
    const [createPlaylist] = useCreatePlaylistMutation()

    const onSubmit: SubmitHandler<CreatePlaylistArgs> = async (data) => {
        try {
            await createPlaylist(data).unwrap()
            reset()
        } catch (e) {
            // handle errors
            console.error(e)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Create new playlist</h2>
            <div>
                <input {...register('title')} placeholder={'title'}/>
            </div>
            <div>
                <input {...register('description')} placeholder={'description'}/>
            </div>
            <button>create playlist</button>
        </form>
    )
}