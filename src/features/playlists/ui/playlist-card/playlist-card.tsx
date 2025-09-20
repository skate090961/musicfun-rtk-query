import {memo} from "react";
import s from './playlist-card.module.scss';

interface PlaylistCardProps {
    title: string
    description: string
    username: string
}

export const PlaylistCard = memo((card: PlaylistCardProps) => {
   const {title, username, description} = card;

    return (
        <article className={s.root}>
            <h3>title: {title}</h3>
            <p>description: {description}</p>
            <p>username: {username}</p>
        </article>
    )
})