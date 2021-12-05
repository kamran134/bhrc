import React, { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getStaticPage } from '../../../redux/actions';
import { RootState } from '../../../redux/reducers';
import './staticPage.scss';

interface QuizParams {
    page: string;
}

const StaticPage: FunctionComponent = () => {
    const { t } = useTranslation();
    const { page } = useParams<QuizParams>();
    const dispatch = useDispatch();

    const { staticPage, lang } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        staticPage: state.staticPage
    }));

    useEffect(() => {
        dispatch(getStaticPage(page));
    }, [page]);

    return (
        <div className='static-page'>
            <div className='container'>
                <div className='container-inner'>
                    {staticPage && <>
                        <h1 className='main-blue-text'>{staticPage.name[lang]}</h1>
                        <div dangerouslySetInnerHTML={{__html: staticPage.description[lang]}} />
                    </>}
                </div>
            </div>
        </div>
        
    )
}

export default StaticPage;