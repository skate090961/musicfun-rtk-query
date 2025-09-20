import {getMainPath, getPlaylistsPath, getProfilePath, getTracksPath} from "@/common/routes";
import {NavLink} from "react-router";
import clsx from "clsx";
import s from './header.module.scss'

interface NavItem {
    to: string,
    label: string
}

const navItems: NavItem[] = [
    {
        to: getMainPath(),
        label: 'Main'
    },
    {
        to: getPlaylistsPath(),
        label: 'Playlists'
    },
    {
        to: getTracksPath(),
        label: 'Tracks'
    },
    {
        to: getProfilePath(),
        label: 'Profile'
    }
]

export const Header = () => {
    return (
        <header className={s.root}>
            <nav>
                <ul className={s.list}>
                    {navItems.map(i => (
                        <li key={i.to}>
                            <NavLink
                                to={i.to}
                                className={({ isActive }) =>
                                    clsx(s.link, {[s.activeLink]: isActive})
                                }
                            >
                                {i.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}