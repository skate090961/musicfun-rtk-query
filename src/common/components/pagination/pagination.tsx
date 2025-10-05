import {memo} from "react";
import {getPaginationPages} from "@/common/utils";
import {Button, Flex, Select, Text} from "@radix-ui/themes";

type PaginationProps = {
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    pagesCount: number
    pageSize: number
    changePageSize: (pageSize: string) => void
    justify?: 'center' | 'start' | 'end'
}

export const Pagination = memo((props: PaginationProps) => {
    const {
        currentPage,
        pagesCount,
        pageSize,
        changePageSize,
        setCurrentPage,
        justify = 'center'
    } = props

    if (pagesCount <= 1) return null

    const pages = getPaginationPages(currentPage, pagesCount)


    return <Flex gap={"6"} justify={justify}>
        <Flex gap={'3'} align={'center'}>
        {pages.map((p, idx) =>
            p === '...' ? (
                <span key={`ellipsis-${idx}`}>
                    ...
                </span>
            ) : (
                <Button
                    key={p}
                    onClick={() => p !== currentPage && setCurrentPage(Number(p))}
                    disabled={p === currentPage}
                    type={'button'}
                >
                    {p}
                </Button>
            )
        )}
        </Flex>
        <Flex align={'center'} gap={'2'}>
            <Text as="label" size={'2'}>Show</Text>
            <Select.Root value={String(pageSize)} onValueChange={changePageSize}>
                <Select.Trigger/>
                <Select.Content>
                    <Select.Group>
                        {['2', '4', '8', '16', '32'].map((size) => (
                            <Select.Item
                                value={String(size)}
                                key={size}
                                disabled={size === String(pageSize)}
                            >
                                {size}
                            </Select.Item>
                        ))}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
            <Text as="label" size={'2'}>per page</Text>
        </Flex>
    </Flex>
})