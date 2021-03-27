import React from 'react';
import Cover from './Cover';
import MainAbout from './About';
import MainActivity from './Activity';
import Statistics from './Statistics';
import MainRecources from './Recources';
import MainSignIn from './SignIn';
import MainTeam from './Team';
import './main.scss';

const Main = () => {
    return (
        <>
            <Cover />
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