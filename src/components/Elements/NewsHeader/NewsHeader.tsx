import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../Header/Header';
import './newsHeader.scss';

const NewsHeader: FunctionComponent = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className='articles-head'>
                <div className='articles-head__background'>
                    <div className='opacity'/>
                    <div className='container'>
                        <div className='container-inner flex-row flex-center'>
                            <div className='articles-head__text'>
                                <h1>{t("News").toUpperCase()}</h1>
                                <p>
                                    Event makes suspendice adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsHeader;