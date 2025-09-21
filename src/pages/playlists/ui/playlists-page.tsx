import {memo} from "react";
import {PlaylistCreateForm, Playlists} from "@/features/playlists";
import s from './playlists-page.module.scss'

const PlaylistsPage = () => {

    return (
        <div className={s.root}>
            <h1>Playlists Page</h1>
            <PlaylistCreateForm/>
            <Playlists/>
        </div>
    )
}

export default memo(PlaylistsPage)