import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im';
import { ReactComponent as Listochki } from '../../../assets/images/lists.svg';
import { IHomePageBlock } from '../../../models';
import { RootState } from '../../../redux/reducers';
import AuthModal from '../../Elements/Auth/AuthModal';
import { openModal, redirect } from '../../../redux/actions';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

interface MainSignInProps {
    data: IHomePageBlock
}

const MainSignIn: FunctionComponent<MainSignInProps> = ({ data }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { lang, redirectUrl, isAuthenticated } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        redirectUrl: state.settings.redirect,
        isAuthenticated: state.auth.isAuthenticated
    }));
    const { t } = useTranslation();

    useEffect(() => {
        if (redirectUrl && redirectUrl !== '' && isAuthenticated) history.push(redirectUrl);
    }, [isAuthenticated, redirectUrl, history]);

    return (
        <AnimationOnScroll animateIn='animate__fadeIn' animateOnce>
            <div className='main-sign-in'>
                <div className='main-sign-in__left'>
                    <Listochki className='start' />
                </div>
                <div className='main-sign-in__container'>
                    <h1>{data && data.title[lang]}</h1>
                    {data && data.subtitle && <h3>{data.subtitle[lang]}</h3>}
                    <button 
                        className='bhrc-btn blue-btn'
                        onClick={() => {
                            dispatch(openModal(true));
                            dispatch(redirect('/urbanica'));
                        }}>
                        {t("Sign in")} <ImArrowRight2/>
                    </button>
                </div>
                <div className='main-sign-in__right'>
                    <Listochki className='end' />
                </div>
            </div>
            <AuthModal />
        </AnimationOnScroll>
    );
}

export default MainSignIn;
