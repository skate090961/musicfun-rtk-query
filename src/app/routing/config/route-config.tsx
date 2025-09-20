import {getMainPath, getNotFoundPath, getPlaylistsPath, getProfilePath, getTracksPath} from "@/common/routes";
import {MainPage} from "@/pages/main";
import {PlaylistsPage} from "@/pages/playlists";
import {TracksPage} from "@/pages/tracks";
import {ProfilePage} from "@/pages/profile";
import type {RouteProps} from "react-router";
import {PageNotFound} from "@/pages/not-found";

export const routeConfig: RouteProps[] = [
    {
        path: getMainPath(),
        element: <MainPage/>
    },
    {
        path: getPlaylistsPath(),
        element: <PlaylistsPage/>
    },
    {
        path: getTracksPath(),
        element: <TracksPage/>
    },
    {
        path: getProfilePath(),
        element: <ProfilePage/>
    },
    {
        path: getNotFoundPath(),
        element: <PageNotFound/>
    },
]