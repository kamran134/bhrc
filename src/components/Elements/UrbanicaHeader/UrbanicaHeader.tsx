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
import { signUp, signIn, getProfile, setProcessStage } from '../../../redux/actions/auth-actions';
import { IAuthForm } from '../../../models/auth';
import LoginForm from '../../../forms/LoginForm';
import { IAuthenticate } from '../../../redux/states/auth-state';
import { useHistory } from 'react-router-dom';
import { IUser } from '../../../models/user';
import { setAlert } from '../../../redux/actions/alert-actions';
import { openModal } from '../../../redux/actions/settings';
//import history from '../../../history';

interface UrbanicaHeaderProps {
    submit: (form: string) => FormAction;
    signUp: (user: IUser) => void;
    signIn: (identifier: string, password: string) => void;
    setProcessStage: (stage: number) => void;
    openModal: (open?: boolean) => void;
    auth: IAuthenticate;
    lang: string;
    modal: boolean;
}

const UrbanicaHeader: FunctionComponent<UrbanicaHeaderProps> = (props) => {
    const { t } = useTranslation();
    let history = useHistory();
    const dispatch = useDispatch();
    const [openRegister, setOpenRegister] = useState<boolean>(false);
    const { auth, lang, submit, signUp, signIn, setProcessStage, modal, openModal } = props;

    useEffect(() => {
        if (auth.isAuthenticated) {
            openModal(false);
        }
    }, [auth]);

    useEffect(() => {
        dispatch(getProfile(auth.token || ''));
    }, [dispatch]);

    const onSubmit = (data: IAuthForm) => {
        if (openRegister) {
            if (data.password !== data.passwordRepeat) {
                dispatch(setAlert("Password mismatch", "error"));
            } else {
                if (auth.processStage === 0) {
                    dispatch(setProcessStage(1));
                } else {
                    let user: IUser = {
                        login: data.email,
                        password: data.password,
                        userInfo: {
                            emails: [{address: data.email, verified: false}],
                            profile: {
                                fullName: {az: data.fullname, ru: data.fullname, en: data.fullname},
                                bio: {az: data.bio, ru: data.bio, en: data.bio}
                            }
                        }
                    };
                    signUp(user);
                    dispatch(setProcessStage(0));
                    modalHideHandler();
                }
            }
        } else {
            signIn(data.identifier, data.password);
        }
    }

    const modalHideHandler = () => {
        openModal(false);
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
                            onClick={() => openModal(true)}
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
            <Modal
                className='urbanica-modal'
                centered 
                show={modal}
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
    lang: state.settings.language,
    modal: state.settings.modal
});

const mapDispatchToProps = {
    submit,
    signUp,
    signIn,
    setProcessStage,
    openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(UrbanicaHeader);