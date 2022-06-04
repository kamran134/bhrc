import React, { FunctionComponent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const { lang, redirectUrl, isAuthenticated } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        redirectUrl: state.settings.redirect,
        isAuthenticated: state.auth.isAuthenticated
    }));
    const { t } = useTranslation();

    useEffect(() => {
        if (redirectUrl && redirectUrl !== '' && isAuthenticated) navigate(redirectUrl);
    }, [isAuthenticated, redirectUrl, navigate]);

    return (
        <AnimationOnScroll animateIn='animate__fadeIn' animateOnce>
            <div className='main-sign-in'>
                <div className='main-sign-in__left'>
                    <Listochki className='start' />
                </div>
                <div className='main-sign-in__container'>
                    <h1>Be with us</h1>
                    <h3 className='block-description white-text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis quis nunc vestibulum auctor. Fusce semper vel enim sit amet ultricies.
                    </h3>
                    <button 
                        className='bhrc-btn blue-btn'
                        onClick={() => {
                            dispatch(openModal(true));
                            dispatch(redirect('/urbanica'));
                        }}>
                        <span className='candara'>Sign in <ImArrowRight2/></span>
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
