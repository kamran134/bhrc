import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Elements/Header/Header";

const Default: FunctionComponent = () => {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    );
}

export default Default;