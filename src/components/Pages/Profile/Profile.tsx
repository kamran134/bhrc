import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import ProfileHeader from "../../Elements/ProfileHeader/ProfileHeader";

const Profile: FunctionComponent = () => {
    return (
        <>
            <ProfileHeader />
            <Outlet />
        </>
    );
}

export default Profile;