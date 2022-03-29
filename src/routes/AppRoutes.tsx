import { useRoutes } from 'react-router-dom';

import { MainPage, Order, Location } from "pages";

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
            }
        ]
    }
])

export default AppRoutes