import React, { useState, useEffect, FunctionComponent } from 'react';
import { ReactComponent as UrbanicaLeft } from '../../../assets/images/urbanica/urbanica-head-left.svg';
import { ReactComponent as UrbanicaRight } from '../../../assets/images/urbanica/urbanica-head-right.svg';
import { ReactComponent as UrbanicaLogo } from '../../../assets/images/urbanica/urbanica-logo.svg';
import { ReactComponent as UrbanicaLeftTopLeaves } from '../../../assets/images/urbanica/urbanica-left-top-leaves.svg';
import { ReactComponent as UrbanicaLeftBottomLeaves } from '../../../assets/images/urbanica/urbanica-left-bottom-leaves.svg';
import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal';
import './urbanicaHeader.scss';
import RegisterForm from '../../../forms/RegisterForm';
import { RootState } from '../../../redux/reducers/rootReducer';
import { submit, FormAction } from "redux-form";
import { connect, useDispatch } from 'react-redux';
import { signUp, signIn } from '../../../redux/actions/auth-actions';
import { IAuthForm } from '../../../models/auth';
import LoginForm from '../../../forms/LoginForm';
import { IAuthenticate } from '../../../redux/states/auth-state';
import history from '../../../history';

interface UrbanicaHeaderProps {
    submit: (form: string) => FormAction;
    signUp: (email: string, password: string) => void;
    signIn: (identifier: string, password: string) => void;
    auth: IAuthenticate;
    lang: string;
}

const UrbanicaHeader: FunctionComponent<UrbanicaHeaderProps> = (props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [singUpModal, setSignUpModal] = useState<boolean>(false);
    const [openRegister, setOpenRegister] = useState<boolean>(false);
    const { auth, lang, submit, signUp, signIn } = props;

    useEffect(() => {
        if (auth.isAuthenticated) {
            setSignUpModal(false)
        }
    }, [auth]);

    const onSubmit = (data: IAuthForm) => {
        if (openRegister) {
            if (data.password !== data.passwordRepeat) {
                console.error('Passwords did not match');
            } else {
                signUp(data.email, data.password);
            }
        } else {
            signIn(data.identifier, data.password);
        }
    }

    const modalHideHandler = () => {
        setSignUpModal(false);
        setOpenRegister(false);
    }

    const renderRegister = () => (
        <>
            <h1 className='white-text'>{t("Sign up")}</h1>
            <RegisterForm onSubmit={(data: IAuthForm) => onSubmit(data)} />
            <div className='modal-content__footer'>
                <button onClick={() => submit("RegisterForm")} className='bhrc-btn orange-btn'><ImArrowRight2/></button>
            </div>
        </>
    );

    const renderLogin = () => (
        <>
            <h1 className='white-text'>{t("Sign in")}</h1>
            <LoginForm onSubmit={(data: IAuthForm) => onSubmit(data)} />
            <div className='modal-content__footer'>
                <button onClick={() => submit("LoginForm")} className='bhrc-btn orange-btn'><ImArrowRight2/></button>
            </div>
        </>
    );

    console.log('user', auth.user);

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
                            onClick={() => setSignUpModal(true)}
                        >
                            {t("Sign in")}
                        </button> : <button className='urbanica-btn sign-up' onClick={() => history.push('/profile')}>
                            {(auth.user?.profile.fullName || {})[lang] || auth.user?.emails[0]?.address}
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
            <Modal
                className='urbanica-modal'
                centered 
                show={singUpModal}
                onHide={modalHideHandler}
            >
                <div className='modal-content__fields'>
                    {openRegister ? renderRegister() : renderLogin()}
                </div>
                {!openRegister && <button onClick={() => setOpenRegister(true)} className='bhrc-btn blue-btn register-btn'>{t("Sign up")}</button>}
            </Modal>
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
    lang: state.settings.language
});

const mapDispatchToProps = {
    submit,
    signUp,
    signIn
}

export default connect(mapStateToProps, mapDispatchToProps)(UrbanicaHeader);