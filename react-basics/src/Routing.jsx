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
import Hookseffectcallbackref from "./functionalcomponents/Hookseffectcallbackref";
import UseMemoHook from "./functionalcomponents/UseMemoHook";
import PropsEventandstate from "./classcomopnents/PropsEventandstate";
import RefinClass from "./classcomopnents/RefinClass";
import LifeCycleMethodsDemo from "./classcomopnents/LifeCycleMethodsDemo";
import ErrorBoundray from "./classcomopnents/ErrorBoundray";
import PureComponentDemoClass from "./classcomopnents/PureComponentDemoClass";
import MainHOCComp from "./classcomopnents/MainHOCComp";
import Theme from "./Theme";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Theme><App /></Theme>}>
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
          <Route path="funecrhooks" element={<Hookseffectcallbackref />}></Route>
          <Route path="funusememo" element={<UseMemoHook />}></Route>



          <Route path="classfirst" element={<Firstclasscomp />}></Route>
          <Route path="classpes" element={<PropsEventandstate username="Harsh" isActive={true}/>}></Route>
          <Route path="classref" element={<RefinClass />}></Route>
          <Route path="classlifecycle" element={
            <ErrorBoundray fallback="bad request">
               <LifeCycleMethodsDemo location="india"/>
            </ErrorBoundray>
          }></Route>
      <Route path="classpure" element={<PureComponentDemoClass />}></Route>
      <Route path="classhoc" element={<MainHOCComp />}></Route>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
};

export default Routing;
