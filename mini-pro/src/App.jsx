import { Outlet } from "react-router-dom"
import Header from "./features/Header"
import Products from "./features/Products"


function App() {
  return (
  <>
    <Header/>
    <Outlet/>
  </>
  )
}

export default App
