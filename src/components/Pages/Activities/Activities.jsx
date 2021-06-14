import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../../../redux/actions/article-actions';
import { config } from '../../../config';
import { useTranslation } from 'react-i18next';
import './activities.scss';
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';
import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';

const Activities = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { articles, lang } = useSelector(state => ({
        articles: state.articles.articles,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getArticles(1, 10));
    }, [dispatch]);

    moment.locale(lang);

    return (
        <>
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
            <div className='articles-body'>
                <div className='container flex-row space-between align-top'>
                    <div className='articles-body__left'>
                        {articles && articles.map(article =>
                        <div key={article._id} className='article' style={{backgroundImage: `url(${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture})`}}>
                            <div className='article__info'>
                                <div className='article__info__date'>
                                    <span className='blue-round'/> {moment(article.createdAt).format('dddd, DD MMMM')}
                                </div>
                                <h4>{article.name[lang]}</h4>
                            </div>
                        </div>)}
                    </div>
                    <div className='articles-body__right'>
                        <div className='search-block'>
                            <input type='text' placeholder={t('Search')} />
                            <SearchIcon className='search-icon' />
                        </div>
                        <div className='popular-block'>
                            <h4>{t('Popular Posts')}</h4>
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
        </>
    )
}

export default Activities;
