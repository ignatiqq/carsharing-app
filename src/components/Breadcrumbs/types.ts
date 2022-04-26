export interface IBreadcrumbs {
    orderId: string | null,
    routes: Array<IRoute>
    currentRoutePathname: string,
    stepsPassed: number,
    className?: string
}

export interface IRoute {
    index: number,
    pathname: string,
    name: string
}