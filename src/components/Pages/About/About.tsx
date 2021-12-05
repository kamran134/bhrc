import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import './about.scss';

const About: FunctionComponent = () => {
    const { t } = useTranslation();
    return (
        <div className='about'>
            <div className='container'>
                <div className='container-inner'>
                    <h1 className='main-blue-text'>{t("About us")}</h1>
                    <p>{t("about_short_info")}</p>
                    <p>{t("about_second_paragraph")}</p>
                    <p>{t("about_third_paragraph")}</p>
                </div>
            </div>
        </div>
    );
}

export default About;