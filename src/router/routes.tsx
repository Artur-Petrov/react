import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersJsonPlaceHolderPage from "../pages/UsersJsonPlaceHolderPage.tsx";
import UsersDummyJsonPage from "../pages/UsersDummyJsonPage.tsx";
import PostsJsonPlaceHolderPage from "../pages/PostsJsonPlaceHolderPage.tsx";
import PostsDummyJsonPage from "../pages/PostsDummyJsonPage.tsx";
import CommentsJsonPlaceHolderPage from "../pages/CommentsJsonPlaceHolderPage.tsx";
import CommentsDummyJson from "../pages/CommentsDummyJsonPage.tsx";

export const routes = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path: 'users/jsonplaceholder', element: <UsersJsonPlaceHolderPage/>},
            {path: 'users/dummyjson', element: <UsersDummyJsonPage/>},
            {path: 'posts/jsonplaceholder', element: <PostsJsonPlaceHolderPage/>},
            {path: 'posts/dummyjson', element: <PostsDummyJsonPage/>},
            {path: 'comments/jsonplaceholder', element: <CommentsJsonPlaceHolderPage/>},
            {path: 'comments/dummyjson', element: <CommentsDummyJson/>}
        ]},
])