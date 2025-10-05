import {memo, type RefObject} from 'react'
import {Box} from "@radix-ui/themes";

type LoadingTriggerProps = {
    observerRef: RefObject<HTMLDivElement | null>
    isFetchingNextPage: boolean
}

export const LoadingTrigger = memo(({ observerRef, isFetchingNextPage }: LoadingTriggerProps) => {
    return (
        <Box ref={observerRef}>
            {isFetchingNextPage ? <Box>Loading more tracks...</Box> : <Box style={{ height: '20px' }} />}
        </Box>
    )
})