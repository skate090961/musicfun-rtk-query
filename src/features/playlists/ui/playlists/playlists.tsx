import {memo} from "react";
import {useGetPlaylistsQuery} from "../../api/playlists-api";
import s from './playlists.module.scss'
import {PlaylistCard} from "@/features/playlists/ui/playlist-card/playlist-card.tsx";

export const Playlists = memo(() => {
    const {data} = useGetPlaylistsQuery()

    return (
        <div className={s.root}>
            {data?.data.map(p => (
                <PlaylistCard
                    key={p.id}
                    title={p.attributes.title}
                    description={p.attributes.description}
                    username={p.attributes.user.name}
                />
            ))}
        </div>
    )
})