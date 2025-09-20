import {Provider} from "react-redux";
import { store } from "../config/store";
import type {PropsWithChildren} from "react";

export const StoreProvider = ({children}: PropsWithChildren ) => (
    <Provider store={store}>
        {children}
    </Provider>
)