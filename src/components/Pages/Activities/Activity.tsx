import React, { useEffect, FunctionComponent } from 'react';
import ActivitiesMain from './ActivitiesMain';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleByName, sendView } from '../../../redux/actions';
import { config } from '../../../config';
import { RootState } from '../../../redux/reducers';
import { FaEye } from 'react-icons/fa'
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';

interface QuizParams {
    id: string;
};

const Activity: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { id } = useParams<QuizParams>();

    const { article, lang, visitorId, seen } = useSelector((state: RootState) => ({
        article: state.news.articleByName,
        lang: state.settings.language,
        visitorId: state.visitors.visitorId,
        seen: state.visitors.seen
    }));

    useEffect(() => {
        dispatch(getArticleByName(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (article) dispatch(sendView(visitorId, article._id));
    }, [article]);

    moment.locale(lang);

    return (
        <ActivitiesMain>
            {article && <>
                <div className='news__image'>
                    <img src={`${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture})`} alt={'mock'} />
                </div>
                <div className='news__content'>
                    <div className='news__date'>
                        {t("Posted On")}: {moment(article.createdAt).format('dddd, DD MMMM')}
                        <span className='news__viewed'><FaEye /> {article.visitors?.length || 1}</span>
                    </div>
                    <div className='news__title'>{article.name[lang]}</div>
                    <div dangerouslySetInnerHTML={{__html: article.description[lang]}} />
                </div>
            </>}
        </ActivitiesMain>
    )
}

export default Activity;