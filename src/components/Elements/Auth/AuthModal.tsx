import React, { FunctionComponent, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { submit } from 'redux-form';
import LoginForm from '../../../forms/LoginForm';
import RegisterForm from '../../../forms/RegisterForm';
import { IUser, IAuthForm } from '../../../models';
import { openModal, setAlert, setProcessStage, signIn, signUp } from '../../../redux/actions';
import { RootState } from '../../../redux/reducers';

const AuthModal: FunctionComponent = () => {
    
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { auth, modal, redirect } = useSelector((state: RootState) => ({
        auth: state.auth,
        modal: state.settings.modal,
        redirect: state.settings.redirect
    }));
    const [openRegister, setOpenRegister] = useState<boolean>(false);

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
                    dispatch(signUp(user));
                    dispatch(setProcessStage(0));
                    modalHideHandler();
                }
            }
        } else {
            dispatch(signIn(data.identifier, data.password, redirect));
        }
    }

    const modalHideHandler = () => {
        dispatch(openModal(false));
        setOpenRegister(false);
    }

    const renderRegister = () => (
        <>
            <h1 className='white-text'>{t("Sign up")}</h1>
            <RegisterForm onSubmit={(data: IAuthForm) => onSubmit(data)} />
            <div className='modal-content__footer'>
                <button onClick={() => dispatch(submit("RegisterForm"))} className='bhrc-btn orange-btn'>
                    <ImArrowRight2/>
                </button>
            </div>
        </>
    );

    const renderLogin = () => (
        <>
            <h1 className='white-text'>{t("Sign in")}</h1>
            <LoginForm onSubmit={(data: IAuthForm) => onSubmit(data)} />
            <div className='modal-content__footer'>
                <button onClick={() => dispatch(submit("LoginForm"))} className='bhrc-btn orange-btn'>
                    <ImArrowRight2/>
                </button>
            </div>
        </>
    );

    return (
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
    );
}

export default AuthModal;
