import React, { useEffect, FunctionComponent } from 'react';
import ActivitiesMain from './ActivitiesMain';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleByName } from '../../../redux/actions/article-actions';
import { config } from '../../../config';
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';
import { RootState } from '../../../redux/reducers/rootReducer';

type QuizParams = {
    id: string;
};

const Activity: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { id } = useParams<QuizParams>();

    const { article, lang } = useSelector((state: RootState) => ({
        article: state.news.articleByName,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getArticleByName(id));
    }, [dispatch, id]);

    moment.locale(lang);

    return (
        <ActivitiesMain>
            {article && <>
                <div className='news__image'>
                    <img src={`${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture})`} alt={'mock'} />
                </div>
                <div className='news__content'>
                    <div className='news__date'>{t("Posted On")}: {moment(article.createdAt).format('dddd, DD MMMM')}</div>
                    <div className='news__title'>{article.name[lang]}</div>
                    <div dangerouslySetInnerHTML={{__html: article.description[lang]}} />
                </div>
            </>}
        </ActivitiesMain>
    )
}

export default Activity;