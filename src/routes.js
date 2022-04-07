import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./auth/login/login";
import Register from "./auth/register/Register";

function Router(){
   return(
       <BrowserRouter >
	<Routes>
           <Route component = { <Login /> }  path="/" exact />
           <Route component = { <Login /> }  path="/login" />
           <Route component = { <Register /> }  path="/register" />
	</Routes>
       </BrowserRouter>
   )
}

export default Router;
