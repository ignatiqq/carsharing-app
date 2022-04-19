export interface IBreadcrumbs {
    routes: Array<IRoute>
    currentRoutePathname: string,
    stepsPassed: number,
    className?: string,
    orderId: string | null
}

export interface IRoute {
    index: number,
    pathname: string,
    name: string
}