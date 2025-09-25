import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {App} from "@/app/ui/app";
import '@/app/styles/index.scss'
import {StoreProvider} from '@/app/providers/store';
import {ThemeProvider} from "@/app/providers/theme";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>
)
