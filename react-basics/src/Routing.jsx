import React from "react";
import { Header } from "./Header";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Firstfuncomp from "./functionalcomponents/Firstfuncomp";
import Propsdemoinfun from "./functionalcomponents/Propsdemoinfun";
import Eventdemoinfun from "./functionalcomponents/Eventdemoinfun";
import Stateinfundemo from "./functionalcomponents/Stateinfundemo";
import Firstclasscomp from "./classcomopnents/Firstclasscomp";
import { Home } from "./functionalcomponents/Home";
import { About } from "./classcomopnents/About";
import { PageNotFound } from "./functionalcomponents/PageNotFound";
import Register from "./functionalcomponents/Register";
import FormValidations from "./functionalcomponents/FormValidations";
import ReactBootstrap from "./functionalcomponents/ReactBootstrap";
import UsesCustomcomp from "./functionalcomponents/UsesCustomcomp";
import ListRendering from "./functionalcomponents/ListRendering";
import Products from "./functionalcomponents/Products";
import ReactHookFormDemo from "./functionalcomponents/ReactHookFormDemo";
import ParentCount from "./functionalcomponents/ParentCount";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
           <Route path='' element={<Home/>}/>
           <Route path='about' element={<About/>}/>
          <Route path="funfirst" element={<Firstfuncomp />}></Route>
          <Route path="funprops" element={<Propsdemoinfun />}></Route>
          <Route path="funevent" element={<Eventdemoinfun />}></Route>
          <Route path="funstate" element={<Stateinfundemo />}></Route>
          <Route path="funform" element={<Register />}></Route>
          <Route path="funformvalidation" element={<FormValidations />}></Route>
          <Route path="funreactbs" element={<ReactBootstrap />}></Route>
          <Route path="funcustomcomp" element={<UsesCustomcomp />}></Route>
          <Route path="funlistrendering" element={<ListRendering />}></Route>
          <Route path="funproducts" element={<Products />}></Route>
          <Route path="funrhf" element={<ReactHookFormDemo />}></Route>
          <Route path="funltsu" element={<ParentCount />}></Route>


          <Route path="classfirst" element={<Firstclasscomp />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
};

export default Routing;
