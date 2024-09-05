import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./features/Products";
import Cart from "./features/Cart";
import CartContext from "./CartContext";
import Register from "./features/Register";
import Login from "./features/Login";

const router = createBrowserRouter([
    {path:'/', element:<CartContext><App/></CartContext>,
        children:[
            {path:'' , element:<Home/>},
            {path:'about' , element:<About/>},
            {path:'products' , element:<Products/>},
            {path:'cart' , element:<Cart/>},
            {path:'register',element:<Register/>},
            {path:'login',element:<Login/>}

        ]
    }
])
export default router