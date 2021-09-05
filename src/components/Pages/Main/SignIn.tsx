import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ImArrowRight2 } from 'react-icons/im';
import { ReactComponent as Listochki } from '../../../assets/images/lists.svg';
import { THomePageBlock } from '../../../models/homepage';
import { RootState } from '../../../redux/reducers/rootReducer';

type MainSignInProps = {
    data: THomePageBlock
}

const MainSignIn: FunctionComponent<MainSignInProps> = ({ data }) => {
    const { lang } = useSelector((state: RootState) => ({
        lang: state.settings.language
    }));
    const { t } = useTranslation();
    return (
        <div className='main-sign-in'>
            <Listochki className='start' />
            <div className='main-sign-in__container'>
                <h1>{data && data.title[lang]}</h1>
                {data && data.subtitle && <h3>{data.subtitle[lang]}</h3>}
                <button className='bhrc-btn blue-btn'>{t("Sign in")} <ImArrowRight2/></button>
            </div>
            <Listochki className='end' />
        </div>
    )
}

export default MainSignIn;
