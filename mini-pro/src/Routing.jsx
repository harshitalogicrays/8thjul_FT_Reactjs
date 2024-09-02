import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./features/Products";
import Cart from "./features/Cart";
import CartContext from "./CartContext";

const router = createBrowserRouter([
    {path:'/', element:<CartContext><App/></CartContext>,
        children:[
            {path:'' , element:<Home/>},
            {path:'about' , element:<About/>},
            {path:'products' , element:<Products/>},
            {path:'cart' , element:<Cart/>},
        ]
    }
])
export default router