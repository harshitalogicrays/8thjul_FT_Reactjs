import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./features/Products";
import Cart from "./features/Cart";
import CartContext from "./CartContext";
import Register from "./features/Register";
import Login from "./features/Login";
import { Protected } from "./features/hiddenlinks";
import { fetchData } from "./fetchData";
import PageNotFound from "./PageNotFound";
import Profile from "./features/Profile";
import { Suspense } from "react";
import Loader from "./features/Loader";
import React from 'react'
import ThemeContext from "./features/ThemeContext";
// const router = createBrowserRouter([
//     {path:'/', element:<CartContext><App/></CartContext>,
//         children:[
//             {path:'' , element:<Home/>,
//                 loader:fetchData,
//                 errorElement:<PageNotFound/>
//             },
//             {path:'about' , element:<About/>},
//             {path:'products' , element:<Products/>},
//             {path:'cart' , element:<Cart/>},
//             {path:'register',element:<Register/>},
//             {path:'login',element:<Login/>},
//             {path:'profile/:id',element:<Protected><Profile/></Protected>}

//         ]
//     },
//     {path:"*",element:<PageNotFound/>}
// ])

const Home1 =  React.lazy(()=>import('./pages/Home'))
const About1 =  React.lazy(()=>import('./pages/About'))

const router = createBrowserRouter([
    {path:'/', element:<ThemeContext><CartContext><App/></CartContext> </ThemeContext>, 
                loader:fetchData,
                errorElement:<PageNotFound/>,
        children:[
            {path:'' , element:<Suspense fallback={<Loader/>}><Home1/></Suspense> 
            },
            {path:'about' , element:<Suspense fallback={<h1>Loading....</h1>}><About1/></Suspense>},
            {path:'products' , element:<Products/>},
            {path:'cart' , element:<Cart/>},
            {path:'register',element:<Register/>},
            {path:'login',element:<Login/>},
            {path:'profile/:id',element:<Protected><Profile/></Protected>}

        ]
    },
    {path:"*",element:<PageNotFound/>}
])
export default router