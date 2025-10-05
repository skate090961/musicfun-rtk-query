import {memo} from "react";
import {Flex, Heading, Text} from "@radix-ui/themes";
import {LoadingTrigger, Tracks, useGetTracksInfiniteQuery} from "@/features/tracks";
import {useInfiniteScroll} from "@/common/hooks";

const TracksPage = () => {
    const {
        data: tracks,
        hasNextPage,
        isFetching,
        fetchNextPage,
        isFetchingNextPage
    } = useGetTracksInfiniteQuery()

    const {observerRef} = useInfiniteScroll({hasNextPage, isFetching, fetchNextPage})

    const pages = tracks?.pages.flatMap((p) => p.data) || []

    return (
        <Flex direction={'column'} gap={'3'}>
            <Heading
                as={'h1'}
                align={'center'}
                color={'violet'}
            >
                Tracks Page
            </Heading>
            <Tracks tracks={pages}/>
            {hasNextPage && (<LoadingTrigger
                    observerRef={observerRef}
                    isFetchingNextPage={isFetchingNextPage}
                />
            )}
            {!hasNextPage && pages.length > 0 && <Text align={'center'} mt={'3'}>Nothing more load</Text>}
        </Flex>
    )
}

export default memo(TracksPage)