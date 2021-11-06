import React, { useEffect, FunctionComponent } from 'react';
import { ReactComponent as UrbanicaLeft } from '../../../assets/images/urbanica/urbanica-head-left.svg';
import { ReactComponent as UrbanicaRight } from '../../../assets/images/urbanica/urbanica-head-right.svg';
import { ReactComponent as UrbanicaLogo } from '../../../assets/images/urbanica/urbanica-logo.svg';
import { ReactComponent as UrbanicaLeftTopLeaves } from '../../../assets/images/urbanica/urbanica-left-top-leaves.svg';
import { ReactComponent as UrbanicaLeftBottomLeaves } from '../../../assets/images/urbanica/urbanica-left-bottom-leaves.svg';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, openModal } from '../../../redux/actions';
import { useHistory } from 'react-router-dom';
import AuthModal from '../Auth/AuthModal';
import './urbanicaHeader.scss';

const UrbanicaHeader: FunctionComponent<{}> = (props) => {
    const { t } = useTranslation();
    let history = useHistory();
    const dispatch = useDispatch();

    const {auth, lang} = useSelector((state: RootState) => ({
        auth: state.auth,
        lang: state.settings.language
    }));

    useEffect(() => {
        if (auth.isAuthenticated) {
            dispatch(openModal(false));
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProfile(auth.token || ''));
    }, [dispatch]);

    return (
        <>
            <div className='urbanica-header'>
                <div className='urbanica-header__left'>
                    <UrbanicaLeft />
                    <div className='urbanica-header__left__leaves'>
                        <UrbanicaLeftTopLeaves className='top' />
                        <UrbanicaLeftBottomLeaves className='bottom' />
                    </div>
                    <div className='urbanica-header__sign-up'>
                        {!auth.isAuthenticated ? <button 
                            className='urbanica-btn sign-up'
                            onClick={() => dispatch(openModal(true))}
                        >
                            {t("Sign in")}
                        </button> : <button className='urbanica-btn sign-up' onClick={() => history.push('/profile')}>
                            {(auth.user?.profile?.fullName || {})[lang] || (auth.user?.emails || [])[0]?.address}
                        </button>}
                    </div>
                </div>
                <div className='urbanica-header__right'>
                    <UrbanicaRight />
                </div>
                <div className='urbanica-header__logo'>
                    <UrbanicaLogo />
                </div>
            </div>
            <AuthModal />
        </>
    );
}

export default UrbanicaHeader;