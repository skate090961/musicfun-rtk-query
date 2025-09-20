import {Routing} from "@/app/routing";
import {Header} from "@/widgets/header";
import s from './app.module.scss'

export const App = () => {
    return (
        <>
            <Header/>
            <div className={s.layout}>
                <Routing/>
            </div>
        </>
    )
}