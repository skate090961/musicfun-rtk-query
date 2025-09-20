import {lazy} from "react";

export const PlaylistsPageAsync = lazy(
    () => import('./playlists-page.tsx')
)