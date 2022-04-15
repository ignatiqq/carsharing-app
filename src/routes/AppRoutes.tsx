import { useRoutes } from 'react-router-dom';

import { MainPage, Order, Location, Model, Additionality } from "pages";

const AppRoutes = () => useRoutes([
    {path: "/", element: <MainPage />},
    {path: "*", element: <div>Page Not Found 404</div>},
    {
        path: "/order",
        element: <Order />,
        children: [
            {
                path: "/order/location",
                element: <Location />
            },
            {
                path: "/order/model",
                element: <Model />
            },
            {
                path: "/order/additionally",
                element: <Additionality />
            }
        ]
    }
])

export default AppRoutes