import {Routing} from "@/app/routing";
import {Header} from "@/widgets/header";
import s from './app.module.scss'
import {ToastContainer} from "react-toastify";

export const App = () => {
    return (
        <>
            <Header/>
            <div className={s.layout}>
                <Routing/>
            </div>
            <ToastContainer/>
        </>
    )
}