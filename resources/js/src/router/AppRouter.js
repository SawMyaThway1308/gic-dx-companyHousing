import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import NavBar from "../pages/NavBar";
import Footer from "../pages/Footer";
import {Employee, EmployeeCreate} from "../pages/Employee";
import {Setting, SettingCreate} from "../pages/Setting";
import Main from "../main";
import DormitoryEquipmentRegistration from "../pages/DormitoryEquipment/DormitoryEquipmentRegistration";
import DormitoryEquipmentEditing from "../pages/DormitoryEquipment/DormitoryEquipmentEditing";
import DormitoryEquipmentDetails from "../pages/DormitoryEquipment/DormitoryEquipmentDetails/DormitoryEquipmentDetails";
import DormitoryEquipment from "../pages/DormitoryEquipment/DormitoryEquipment";

function AppRouter() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
            <Route path="/equipment-details" element={<DormitoryEquipmentDetails />} />
            <Route path="/equipment-list" element={<DormitoryEquipment />} />
            </Route>
            <Route path="/equipment-registration" element={<DormitoryEquipmentRegistration />} />
            <Route path="/equipment-edition" element={<DormitoryEquipmentEditing />} />
            <Route path="/equipment-details" element={<DormitoryEquipmentDetails />} />
          </Routes>
        </Router>
    )
}

export default AppRouter;
