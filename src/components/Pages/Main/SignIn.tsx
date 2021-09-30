import React, { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im';
import { ReactComponent as Listochki } from '../../../assets/images/lists.svg';
import { IHomePageBlock } from '../../../models/homepage';
import { RootState } from '../../../redux/reducers/rootReducer';
import Modal from 'react-bootstrap/Modal';
import RegisterForm from '../../../forms/RegisterForm';
import LoginForm from '../../../forms/LoginForm';
import { IAuthForm } from '../../../models/auth';
import { setAlert } from '../../../redux/actions/alert-actions';
import { setProcessStage, signIn, signUp } from '../../../redux/actions/auth-actions';
import { IUser } from '../../../models/user';
import { openModal } from '../../../redux/actions/settings';
import { submit } from "redux-form";
import { useHistory } from 'react-router-dom';

interface MainSignInProps {
    data: IHomePageBlock
}

const MainSignIn: FunctionComponent<MainSignInProps> = ({ data }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { lang, modal, auth } = useSelector((state: RootState) => ({
        auth: state.auth,
        lang: state.settings.language,
        modal: state.settings.modal
    }));
    const [openRegister, setOpenRegister] = useState<boolean>(false);
    const { t } = useTranslation();
    
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
                    history.push('/urbanica');
                }
            }
        } else {
            dispatch(signIn(data.identifier, data.password));
            history.push('/urbanica');
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
                <button onClick={() => dispatch(submit("RegisterForm"))} className='bhrc-btn orange-btn'><ImArrowRight2/></button>
            </div>
        </>
    );

    const renderLogin = () => (
        <>
            <h1 className='white-text'>{t("Sign in")}</h1>
            <LoginForm onSubmit={(data: IAuthForm) => onSubmit(data)} />
            <div className='modal-content__footer'>
                <button onClick={() => dispatch(submit("LoginForm"))} className='bhrc-btn orange-btn'><ImArrowRight2/></button>
            </div>
        </>
    );

    return (
        <>
            <div className='main-sign-in'>
                <Listochki className='start' />
                <div className='main-sign-in__container'>
                    <h1>{data && data.title[lang]}</h1>
                    {data && data.subtitle && <h3>{data.subtitle[lang]}</h3>}
                    <button className='bhrc-btn blue-btn' onClick={() => dispatch(openModal(true))}>{t("Sign in")} <ImArrowRight2/></button>
                </div>
                <Listochki className='end' />
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

export default MainSignIn;
