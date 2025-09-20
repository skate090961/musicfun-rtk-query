export const Path = {
    Main: '/',
    Playlists: '/playlists',
    Tracks: '/tracks',
    Profile: '/profile',
    NotFound: '*'
} as const

export const getMainPath = () => Path.Main;
export const getPlaylistsPath = () => Path.Playlists;
export const getTracksPath = () => Path.Tracks;
export const getProfilePath = () => Path.Profile;
export const getNotFoundPath = () => Path.NotFound;