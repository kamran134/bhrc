import React from 'react';
import { useTranslation } from 'react-i18next';

const Statistics = () => {
    const { t } = useTranslation();
    return (
        <div className='main-statistics'>
            <div className='main-statistics__inner'><label>{t("Projects")}</label>5+</div>
            <div className='main-statistics__inner'><label>{t("Members")}</label>10+</div>
            <div className='main-statistics__inner'><label>{t("Events")}</label>5+</div>
        </div>
    )
}

export default Statistics;