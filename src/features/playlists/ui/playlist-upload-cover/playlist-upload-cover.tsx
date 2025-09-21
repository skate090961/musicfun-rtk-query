import s from "./playlist-upload-cover.module.scss";
import {type ChangeEvent, memo, useMemo} from "react";
import DefaultPlaylistCoverImage from "@/assets/images/default-playlist-cover.png";
import {useDeletePlaylistCoverMutation, useUploadPlaylistCoverMutation} from "../../api/playlists-api";
import type {Cover, CoverType} from "@/common/types";
import {toast} from "react-toastify";

type PlaylistUploadCoverProps = {
    playlistId: string
    className?: string
    images: Cover[]
    type?: CoverType
}

const ALLOWED_UPLOAD_TYPES = ['image/jpeg', 'image/png']
const MAX_SIZE = 1024 * 1024 // 1 MB

export const PlaylistUploadCover = memo((props: PlaylistUploadCoverProps) => {
    const {
        className,
        images,
        playlistId,
        type = 'original'
    } = props

    const [uploadPlaylistCover] = useUploadPlaylistCoverMutation()
    const [deletePlaylistCover] = useDeletePlaylistCoverMutation()

    const cover = useMemo(() => {
        const coverType = images.find(img => img.type === type)
        const coverSrc = coverType ? coverType.url : DefaultPlaylistCoverImage

        return {
            type: coverType,
            src: coverSrc
        }
    }, [images, type])


    const uploadCoverHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0]

        if (!file) return

        if (!ALLOWED_UPLOAD_TYPES.includes(file.type)) {
            toast('Only JPEG or PNG images are allowed', {type: 'error', theme: 'colored'})
            return;
        }

        if (file.size > MAX_SIZE) {
            toast(`The file is too large. Max size is ${Math.round(MAX_SIZE / 1024)} KB`, {type: 'error', theme: 'colored'})
            return;
        }

        uploadPlaylistCover({
            playlistId,
            file
        })
    }

    const deleteCoverHandler = () => deletePlaylistCover(playlistId)

    return (
        <div className={className}>
            <img
                className={s.cover}
                src={cover.src}
                alt="cover"
            />
            <div>
                {cover.type && <button onClick={deleteCoverHandler}>delete cover</button>}
                <input type="file" onChange={uploadCoverHandler} accept={ALLOWED_UPLOAD_TYPES.join()}/>
            </div>
        </div>
    )
})