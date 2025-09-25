import s from "./playlist-upload-cover.module.scss";
import {type ChangeEvent, memo, useMemo, useRef} from "react";
import DefaultPlaylistCoverImage from "@/assets/images/default-playlist-cover.png";
import {useDeletePlaylistCoverMutation, useUploadPlaylistCoverMutation} from "../../api/playlists-api";
import type {Cover, CoverType} from "@/common/types";
import {toast} from "react-toastify";
import {Box, IconButton} from "@radix-ui/themes";
import {TrashIcon, UploadIcon} from "@radix-ui/react-icons";
import clsx from "clsx";

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

    const fileInputRef = useRef<HTMLInputElement>(null)

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

    const handleImageClick = () => {
        fileInputRef.current?.click()
    }

    const uploadCoverHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0]

        if (!file) return

        if (!ALLOWED_UPLOAD_TYPES.includes(file.type)) {
            toast('Only JPEG or PNG images are allowed', {type: 'error', theme: 'colored'})
            return;
        }

        if (file.size > MAX_SIZE) {
            toast(`The file is too large. Max size is ${Math.round(MAX_SIZE / 1024)} KB`, {
                type: 'error',
                theme: 'colored'
            })
            return;
        }

        uploadPlaylistCover({
            playlistId,
            file
        })
    }

    const deleteCoverHandler = () => {
        deletePlaylistCover(playlistId)
    }

    return (
        <Box className={clsx(s.root, className)}>
            <img
                className={s.cover}
                src={cover.src}
                alt="cover"
            />
            <IconButton onClick={handleImageClick} className={s.uploadButton}>
                <UploadIcon width={18} height={18}/>
            </IconButton>

            {cover.type && (
                <IconButton
                    color="crimson"
                    className={s.deleteButton}
                    onClick={deleteCoverHandler}
                >
                    <TrashIcon width={18} height={18}/>
                </IconButton>
            )}
            <input
                type="file"
                onChange={uploadCoverHandler}
                accept={ALLOWED_UPLOAD_TYPES.join()}
                ref={fileInputRef}
                className={s.input}
            />
        </Box>
    )
})