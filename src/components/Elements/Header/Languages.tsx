import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../../redux/actions/settings.actions';
import { ReactComponent as FlagAz } from '../../../assets/images/flag-az.svg';
import { ReactComponent as FlagRu } from '../../../assets/images/flag-ru.svg';
import { ReactComponent as FlagEn } from '../../../assets/images/flag-en.svg';
import { RootState } from '../../../redux/reducers';

const Languages: FunctionComponent<{}> = props => {
    const { lang } = useSelector((state: RootState) => ({
        lang: state.settings.language
    }));
    const dispatch = useDispatch();

    const langSelectHandle = (language: string) => {
        dispatch(setLanguage(language));
    }
    return (
        <div className='languages'>
            <div className={lang === 'az' ? 'lang checked': 'lang'}>
                <FlagAz onClick={() => langSelectHandle('az')} />
            </div>
            <div className={lang === 'ru' ? 'lang checked': 'lang'}>
                <FlagRu onClick={() => langSelectHandle('ru')} />
            </div>
            <div className={lang === 'en' ? 'lang checked': 'lang'}>
                <FlagEn onClick={() => langSelectHandle('en')} />
            </div>
        </div>
    );
}

export default Languages;