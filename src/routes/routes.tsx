import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import routes from './types'
const Login = lazy(() => import('pages/auth/Login'))
const Home = lazy(() => import('pages/Home'))

export const ROUTES: routes = [
    {
        path: '/',
        element: <Navigate to='/login'/>,
        children: []
    },
    {
        path: '/login',
        element: <Login/>,
        children: []
    },
    {
        path: '/app',
        element: <Home/>,
        children: []
    }
]