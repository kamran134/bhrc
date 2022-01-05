import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import UrbanicaHeader from "../../Elements/UrbanicaHeader/UrbanicaHeader";

const Urbanica: FunctionComponent = () => {
    return (
        <div>
            <UrbanicaHeader/>
            <Outlet />
        </div>
    );
}

export default Urbanica;