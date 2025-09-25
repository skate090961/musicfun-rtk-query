import {Theme} from "@radix-ui/themes";
import type {PropsWithChildren} from "react";

export const ThemeProvider = ({children}: PropsWithChildren) => {
    return (
        <Theme accentColor="violet" appearance="dark">
            {children}
        </Theme>
    )
}