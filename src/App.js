import React from "react";
import Home from "/home/manitra/shiny-agency/src/pages/home/Home.js";
import Survey from "./pages/Survey/Survey";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Error from "./components/error/Error";

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/survey/:questionNumber" element={<Survey />} />
               <Route path="*" element={<Error />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
