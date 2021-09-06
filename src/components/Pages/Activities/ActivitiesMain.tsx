import React, { useEffect, FunctionComponent, ReactChildren } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Element, scroller } from 'react-scroll';
import { getArticles } from '../../../redux/actions/article-actions';
import { config } from '../../../config';
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';
import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';
import './activities.scss';
import { RootState } from '../../../redux/reducers/rootReducer';
import { IArticle } from '../../../models/article';

interface ActivitiesMainProps {
    children?: React.ReactElement | React.ReactElement[]
}

const ActivitiesMain: FunctionComponent<ActivitiesMainProps> = props => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { articles, lang } = useSelector((state: RootState) => ({
        articles: state.news.articles,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getArticles(1, 5));
    }, [dispatch]);

    useEffect(() => {
        scroller.scrollTo('articles', {
            duration: 1500,
            delay: 100,
            smooth: true,
            block: "center"
        });
    }, []);

    moment.locale(lang);
    
    return (
        <Element name='articles' className='articles-body'>
            <div className='container flex-row space-between align-top'>
                <div className='articles-body__left'>
                    {props.children}
                </div>
                <div className='articles-body__right'>
                    <div className='search-block'>
                        <input type='text' placeholder={t('Search')} />
                        <SearchIcon className='search-icon' />
                    </div>
                    <div className='popular-block'>
                        <h4>{t("Most read")}</h4>
                        {articles && articles.slice(0, 5).map((article: IArticle) =>
                        <div className='post'>
                            <div><img loading='lazy' src={`${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture}`} alt={article._id} /></div>
                            <div className='post__date'>
                                <span className='blue-round'/> {moment(article.createdAt).format('dddd, DD MMMM')}
                                <h5><Link to={`/activities/${article.path[lang]}`}>{article.name[lang]}</Link></h5>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default ActivitiesMain;
