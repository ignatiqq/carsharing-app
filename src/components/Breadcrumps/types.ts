export interface IUseBreadcumps {
    routes: Array<IRoute>
    currentRoutePathname: string,
    stepsPassed: number
}

export interface IRoute {
    index: number,
    pathname: string,
    name: string
}