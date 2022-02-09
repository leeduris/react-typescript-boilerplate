type routeItem = {
    path: string,
    element: any,
    children?: routeItem[]
}

type routes = routeItem[]

export default routes

