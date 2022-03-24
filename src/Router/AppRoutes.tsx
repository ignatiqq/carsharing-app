import { useRoutes } from 'react-router-dom';

import { MainPage } from "pages";

const AppRoutes = () => useRoutes([
    {path: "/", element: <MainPage />},
    {path: "*", element: <div>Page Not Found 404</div>},
    {path: "/order", element: <div>123</div>}
])

export default AppRoutes