import {memo} from "react";
import {useGetPlaylistsQuery} from "../../api/playlists-api";
import s from './playlists.module.scss'
import {PlaylistCard} from "@/features/playlists/ui/playlist-card/playlist-card.tsx";

export const Playlists = memo(() => {
    const {data: playlists} = useGetPlaylistsQuery()

    return (
        <div className={s.root}>
            {playlists?.data.map(p => (
                <PlaylistCard
                    key={p.id}
                    playlistId={p.id}
                    title={p.attributes.title}
                    description={p.attributes.description}
                    username={p.attributes.user.name}
                    tags={p.attributes.tags}
                />
            ))}
        </div>
    )
})