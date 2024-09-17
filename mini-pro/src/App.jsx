import { Outlet, useLoaderData } from "react-router-dom"
import Header from "./features/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const data = useLoaderData()
  // console.log(data)
  return (
  <>
   <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        />
    <Header products={data.products}/>
    <Outlet/>
  </>
  )
}

export default App
