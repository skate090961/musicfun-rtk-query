import {memo} from "react";
import {Container, Heading} from "@radix-ui/themes";

const MainPage = () => {
    return <Container>
        <Heading as={'h1'}>Main page</Heading>
    </Container>
}

export default memo(MainPage)