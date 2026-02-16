import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import APage from "./pages/APage.tsx";
import BPage from "./pages/BPage.tsx";
import HomePage from "./pages/HomePage.tsx";

// const router = createBrowserRouter([
//     {
//         path:'/',element:<MainLayout/>,
//         children:[
//             {path: 'a', element:<APage/>},
//             {path: 'b', element:<BPage/>},
//             {path: '', element:<HomePage/>, children:[
//                     // /b/1
//                     {path: '1', element:<div></div>},
//                     // /b/2
//                     {path: '2', element:<div></div>},
//                     // /b/3
//                     {path: '3', element:<div></div>}
//                 ]
//             },
//         ]
//     }
// ]);

createRoot(document.getElementById('root')!)
    .render(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={''} element={<HomePage/>}/>
                    <Route path={'a'} element={<APage/>}/>
                    <Route path={'b'} element={<BPage/>}>
                        <Route path={'1'} element={<div>content 1</div>}/>
                        <Route path={'2'} element={<div>content 2</div>}/>
                        <Route path={'3'} element={<div>content 3</div>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
