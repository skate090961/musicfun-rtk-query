import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {App} from "@/app/ui/app";
import '@/app/styles/index.scss'
import { StoreProvider } from './app/providers/store';

createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
            <StoreProvider>
                <App/>
            </StoreProvider>
        </BrowserRouter>
)
