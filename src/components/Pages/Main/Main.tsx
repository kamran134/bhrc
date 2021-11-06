import React, { useEffect, FunctionComponent } from 'react';
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

const Main: FunctionComponent = () => {
    const dispatch = useDispatch();

    const { homepage: { welcome, about, activity, resources, signin } } = useSelector((state: RootState) => ({
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
            {welcome && <Cover data={welcome} />}
            {about && <MainAbout data={about} />}
            {activity && <MainActivity data={activity} />}
            {/* <Statistics /> */}
            {resources && <MainResources data={resources} />}
            {signin && <MainSignIn data={signin} />}
            <MainTeam />
        </>
    );
}

export default Main;