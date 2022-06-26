import React, { useEffect, FunctionComponent, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Cover from './Cover';
import MainAbout from './About';
import MainActivity from './Activity';
import MainResources from './Resources';
import MainSignIn from './SignIn';
import MainTeam from './Team';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePage } from '../../../redux/actions';
import { RootState } from '../../../redux/reducers';
import './main.scss';
import ScrollPage from '../../UI/ScrollPage';
import ScrollPageContainer from '../../UI/ScrollPageContainer';

const Main: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { homepage: { welcome, about, activity, resources, signin, team } } = useSelector((state: RootState) => ({
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
            {welcome && <ScrollPage name='cover' pageNumber={0}><Cover data={welcome} /></ScrollPage>}
            {about && <div><MainAbout data={about} /></div>}
            {activity && <ScrollPage name='activity' pageNumber={2}><MainActivity data={activity} /></ScrollPage>}
            {/* <Statistics /> */}
            {resources && <ScrollPage name='resources' pageNumber={3}><MainResources data={resources} /></ScrollPage>}
            {signin && <ScrollPage name='signin' pageNumber={4}><MainSignIn data={signin} /></ScrollPage>}
            {team && <ScrollPage name='team' pageNumber={5}><MainTeam data={team} /></ScrollPage>}
        </>
    );
}

export default Main;