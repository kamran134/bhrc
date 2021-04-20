import React, { useState } from 'react';
import { ReactComponent as UrbanicaLeft } from '../../../assets/images/urbanica-left.svg';
import { ReactComponent as UrbanicaRight } from '../../../assets/images/urbanica-right.svg';
import { ReactComponent as UrbanicaLogo } from '../../../assets/images/urbanica-logo.svg';
import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import Modal from 'react-bootstrap/Modal';
import './urbanicaHeader.scss';

const UrbanicaHeader = () => {
    const { t } = useTranslation();
    const [singUpModal, setSignUpModal] = useState(false);
    return (
        <>
            <div className='urbanica-header'>
                <div className='urbanica-header__left'>
                    <UrbanicaLeft />
                    <div className='urbanica-header__sign-up'>
                        <button 
                            className='urbanica-btn sign-up'
                            onClick={() => setSignUpModal(true)}
                        >
                            {t("Sign up")}
                        </button>
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
                centered 
                show={singUpModal}
                onHide={() => setSignUpModal(false)}
            >
                <div className='modal-content__fields'>
                    <h1 className='white-text'>{t("Sign up")}</h1>
                    <input placeholder={t("Email")} />
                    <input type='password' placeholder={t("Password")} />
                    <input type='password' placeholder={t("Repeat password")} />
                    <div className='modal-content__footer'>
                        <button className='bhrc-btn orange-btn'><ImArrowRight2/></button>
                    </div>                
                </div>
            </Modal>
        </>
    )
}

export default UrbanicaHeader;