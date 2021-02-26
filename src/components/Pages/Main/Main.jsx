import React from 'react';
import MainAbout from './About';
import MainActivity from './Activity';
import './main.scss';
import Statistics from './Statistics';
import MainRecources from './Recources';
import MainSignIn from './SignIn';
import MainTeam from './Team';

const Main = () => {
    return (
        <>
            <MainAbout />
            <MainActivity />
            <Statistics />
            <MainRecources />
            <MainSignIn />
            <MainTeam />
        </>
    )
}

export default Main;