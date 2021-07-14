import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../../redux/actions/article-actions';
import { config } from '../../../config';
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';
import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';
import './activities.scss';

const ActivitiesMain = props => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { articles, lang } = useSelector(state => ({
        articles: state.articles.articles,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getArticles(1, 5));
    }, [dispatch]);

    moment.locale(lang);
    
    return (
        <div className='articles-body'>
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
                        {articles && articles.slice(0, 5).map(article =>
                        <div className='post'>
                            <img src={`${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture}`} alt={article._id} />
                            <div className='post__date'>
                                <span className='blue-round'/> {moment(article.createdAt).format('dddd, DD MMMM')}
                                <h5>{article.name[lang]}</h5>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivitiesMain;
