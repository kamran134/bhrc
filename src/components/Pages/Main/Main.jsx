import React, { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Cover from './Cover';
import MainAbout from './About';
import MainActivity from './Activity';
// import Statistics from './Statistics';
import MainRecources from './Recources';
import MainSignIn from './SignIn';
import MainTeam from './Team';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePage } from '../../../redux/actions/home-actions';
import './main.scss';

const Main = () => {
    const dispatch = useDispatch();

    const { homepage: { welcome, about, activity, resources, signin } } = useSelector(state => ({
        homepage: state.homepage
    }));

    useEffect(() => {
        dispatch(getHomePage());
    }, [dispatch]);

    useEffect(() => {
        scroll.scrollToTop({
            duration: 1500,
            delay: 100,
            smooth: true
        });
    }, []);

    return (
        <>
            <Cover data={welcome} />
            <MainAbout data={about} />
            <MainActivity data={activity} />
            {/* <Statistics /> */}
            <MainRecources data={resources} />
            <MainSignIn data={signin} />
            <MainTeam />
        </>
    )
}

export default Main;