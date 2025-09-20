import {lazy} from "react";

export const TracksPageAsync = lazy(
    () => import('./tracks-page.tsx')
)