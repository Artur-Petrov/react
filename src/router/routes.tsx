import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersJsonPlaceHolder from "../pages/UsersJsonPlaceHolder.tsx";
import UsersDummyJson from "../pages/UsersDummyJson.tsx";
import PostsJsonPlaceHolder from "../pages/PostsJsonPlaceHolder.tsx";
import PostsDummyJson from "../pages/PostsDummyJson.tsx";
import CommentsJsonPlaceHolder from "../pages/CommentsJsonPlaceHolder.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users/', element: <UsersPage/>, children:[
                    {path:'jsonplaceholder', element:<UsersJsonPlaceHolder/>},
                    {path: 'dummyjson', element: <UsersDummyJson/>}
                ]},
            {path: 'posts/', element: <PostsPage/>, children:[
                    {path:'jsonplaceholder', element:<PostsJsonPlaceHolder/>},
                    {path: 'dummyjson', element: <PostsDummyJson/>}
                ]},
            {path: 'comments/', element: <CommentsPage/>, children:[
                    {path: 'jsonplaceholder', element: <CommentsJsonPlaceHolder/>}
                ]},
        ]},
])