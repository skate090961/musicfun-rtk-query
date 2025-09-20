import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {App} from "@/app/ui/app";
import '@/app/styles/index.scss'

createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
)
