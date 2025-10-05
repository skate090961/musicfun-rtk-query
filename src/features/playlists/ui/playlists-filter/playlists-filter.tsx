import {Box, IconButton, TextField} from "@radix-ui/themes";
import {Cross1Icon, MagnifyingGlassIcon} from "@radix-ui/react-icons";
import {type ChangeEvent, memo} from "react";

type PlaylistsFilterProps = {
    search: string
    onChangeSearch: (search: string) => void
    onClear: () => void
}

export const PlaylistsFilter = memo((props: PlaylistsFilterProps) => {
    const {
        search,
        onChangeSearch,
        onClear
    } = props

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeSearch(e.currentTarget.value)
    }

    return (
        <Box>
            <TextField.Root
                placeholder="Search the playlists…"
                value={search}
                onChange={onChangeSearchHandler}
            >
                <TextField.Slot>
                    <MagnifyingGlassIcon height="16" width="16"/>
                </TextField.Slot>
                {!!search.length && (
                    <TextField.Slot>
                        <IconButton variant="ghost" onClick={onClear}>
                            <Cross1Icon/>
                        </IconButton>
                    </TextField.Slot>
                )}
            </TextField.Root>
        </Box>
    )
})