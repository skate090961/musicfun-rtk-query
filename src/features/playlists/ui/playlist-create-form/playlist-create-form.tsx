import {type SubmitHandler, useForm} from "react-hook-form";
import {useCreatePlaylistMutation} from "../../api/playlists-api";
import type {CreatePlaylistArgs} from "../../api/playlists-api.types";
import {Box, Button, Card, Flex, Heading, TextField} from "@radix-ui/themes";

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
        <Box maxWidth="240px">
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex gap={'3'} direction={'column'}>
                        <Heading as={'h3'}>Create new playlist</Heading>
                        <TextField.Root {...register('title')} placeholder="title"/>
                        <TextField.Root {...register('description')} placeholder="description"/>
                        <Button>create playlist</Button>
                    </Flex>
                </form>
            </Card>
        </Box>
    )
}