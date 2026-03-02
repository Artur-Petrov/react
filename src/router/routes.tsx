import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersJsonPlaceHolderPage from "../pages/UsersJsonPlaceHolderPage.tsx";
import UsersDummyJsonPage from "../pages/UsersDummyJsonPage.tsx";
import PostsJsonPlaceHolderPage from "../pages/PostsJsonPlaceHolderPage.tsx";
import PostsDummyJsonPage from "../pages/PostsDummyJsonPage.tsx";
import CommentsJsonPlaceHolderPage from "../pages/CommentsJsonPlaceHolderPage.tsx";
import CommentsDummyJsonPage from "../pages/CommentsDummyJsonPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users/', element: <UsersPage/>, children:[
                    {path: 'jsonplaceholder', element: <UsersJsonPlaceHolderPage/>},
                    {path: 'dummyjson', element: <UsersDummyJsonPage/>},
                ]},
            {path: 'posts/', element: <PostsPage/>, children:[
                    {path: 'jsonplaceholder', element: <PostsJsonPlaceHolderPage/>},
                    {path: 'dummyjson', element: <PostsDummyJsonPage/>},
                ]},
            {path: 'comments/', element: <CommentsPage/>, children:[
                    {path: 'jsonplaceholder', element: <CommentsJsonPlaceHolderPage/>},
                    {path: 'dummyjson', element: <CommentsDummyJsonPage/>},
                ]},
        ]},
])