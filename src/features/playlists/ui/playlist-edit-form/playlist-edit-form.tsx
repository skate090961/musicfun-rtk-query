import {memo} from "react";
import {type SubmitHandler, useForm} from "react-hook-form";
import type {UpdatePlaylistArgs} from "../../api/playlists-api.types";
import {Button, Flex, Heading, TextField} from "@radix-ui/themes";

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

    const {register, handleSubmit} = useForm<UpdatePlaylistArgs>({
        defaultValues: initialData
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={className}>
            <Flex gap={'3'} direction={'column'}>
                <Heading as={'h3'}>Edit Playlist</Heading>
                <TextField.Root
                    {...register('title')}
                    placeholder="title"
                />
                <TextField.Root
                    {...register('description')}
                    placeholder="description"
                />
                <Flex gap={'3'}>
                    <Button type="submit">
                        Save
                    </Button>
                    <Button type="button" onClick={onCancel}>
                        Cancel
                    </Button>
                </Flex>
            </Flex>
        </form>
    );
});