import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im';
import { ReactComponent as Listochki } from '../../../assets/images/lists.svg';

const MainSignIn = ({ data }) => {
    const { lang } = useSelector(state => ({
        lang: state.settings.language
    }));
    const { t } = useTranslation();
    return (
        <div className='main-sign-in'>
            <Listochki className='start' />
            <div className='main-sign-in__container'>
                <h1>{data && data.title[lang]}</h1>
                <h3>{data && data.subtitle[lang]}</h3>
                <button className='bhrc-btn blue-btn'>{t("Sign in")} <ImArrowRight2/></button>
            </div>
            <Listochki className='end' />
        </div>
    )
}

export default MainSignIn;
