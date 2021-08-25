import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as UrbanicaLeft } from '../../../assets/images/urbanica-head-left.svg';
import { ReactComponent as UrbanicaRight } from '../../../assets/images/urbanica-head-right.svg';
import { ReactComponent as UrbanicaLogo } from '../../../assets/images/urbanica-logo.svg';
import { ReactComponent as UrbanicaLeftTopLeaves } from '../../../assets/images/urbanica-left-top-leaves.svg';
import { ReactComponent as UrbanicaLeftBottomLeaves } from '../../../assets/images/urbanica-left-bottom-leaves.svg';
import { useTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal';
import './urbanicaHeader.scss';
import RegisterForm from '../../../forms/RegisterForm';

const UrbanicaHeader = () => {
    const { t } = useTranslation();
    const [singUpModal, setSignUpModal] = useState(false);
    const { auth } = useSelector(state => ({
        auth: state.auth
    }));

    useEffect(() => {
        if (auth.isAuthenticated) {
            setSignUpModal(false)
        }
    }, [auth])

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
                        {!auth.isAuthenticated && <button 
                            className='urbanica-btn sign-up'
                            onClick={() => setSignUpModal(true)}
                        >
                            {t("Sign up")}
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
                onHide={() => setSignUpModal(false)}
            >
                <div className='modal-content__fields'>
                    <h1 className='white-text'>{t("Sign up")}</h1>
                    <RegisterForm />
                </div>
            </Modal>
        </>
    )
}

export default UrbanicaHeader;