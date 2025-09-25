import {Routing} from "@/app/routing";
import {Header} from "@/widgets/header";
import {ToastContainer} from "react-toastify";
import {Container} from "@radix-ui/themes";
import { Background } from "./background/background";

export const App = () => {
    return (
        <>
            <Background/>
            <Header/>
            <Container size="4" >
                <Routing/>
            </Container>
            <ToastContainer/>
        </>
    )
}