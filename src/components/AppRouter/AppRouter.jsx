import React from 'react';
import {Route,Routes} from "react-router-dom";
import {publicRoutes} from "../../router/router";
import Error from "../../pages/Error/Error";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    key={route.path}
                />
            )}
            <Route path='/*' element={<Error/>} />
        </Routes>
    );
};

export default AppRouter;