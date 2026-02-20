import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersJsonPlaceHolder from "../pages/UsersJsonPlaceHolder.tsx";
import UsersDummyJson from "../pages/UsersDummyJson.tsx";
import PostsJsonPlaceHolder from "../pages/PostsJsonPlaceHolder.tsx";
import PostsDummyJson from "../pages/PostsDummyJson.tsx";
import CommentsJsonPlaceHolder from "../pages/CommentsJsonPlaceHolder.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users/jsonplaceholder', element: <UsersJsonPlaceHolder/>},
            {path: 'users/dummyjson', element: <UsersDummyJson/>},
            {path: 'posts/jsonplaceholder', element: <PostsJsonPlaceHolder/>},
            {path: 'posts/dummyjson', element: <PostsDummyJson/>},
            {path: 'comments/jsonplaceholder', element: <CommentsJsonPlaceHolder/>},
        ]},
])