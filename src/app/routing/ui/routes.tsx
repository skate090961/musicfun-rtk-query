import {Route, type RouteProps, Routes} from "react-router";
import {routeConfig} from "../config/route-config";
import {memo, Suspense, useCallback} from "react";


export const Routing = memo(() => {
    const renderRoute = useCallback((el: RouteProps) => {
        return (
            <Route
                key={el.path}
                path={el.path}
                element={(
                    <Suspense fallback={<div>...loading</div>}>
                        {el.element}
                    </Suspense>
                )}
            />
        )
    }, [])

    return (
        <Routes>
            {routeConfig.map(renderRoute)}
        </Routes>
    )
});