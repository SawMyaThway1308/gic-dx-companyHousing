import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";
import {Employee, EmployeeCreate} from "../pages/Employee";
import {Setting, SettingCreate} from "../pages/Setting";
import Main from "../main";

function AppRouter() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
            </Route>
          </Routes>
        </Router>
    )
}

export default AppRouter;
