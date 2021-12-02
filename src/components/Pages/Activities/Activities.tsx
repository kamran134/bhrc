import React, { useEffect, FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles, countArticles } from '../../../redux/actions';
import { IArticle } from '../../../models';
import { config } from '../../../config';
import ActivitiesMain from './ActivitiesMain';
import { RootState } from '../../../redux/reducers';
import queryString from 'query-string';
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';
import './activities.scss';

const Activities: FunctionComponent = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const params = queryString.parse(location.search);

    const { articles, lang, count } = useSelector((state: RootState) => ({
        articles: state.news.articles,
        count: state.news.count,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(countArticles());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getArticles(Number(params.page), 6));
    }, [dispatch, params.page]);

    moment.locale(lang);

    return (        
        <ActivitiesMain allNews={true} count={count} page={Number(params.page)}>
            {articles && articles.map((article: IArticle) =>
                <Link key={article._id} to={`/activities/${article.path[lang]}`}>
                    <div 
                        className='article'
                        style={{backgroundImage: `url(${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture})`}} 
                    >
                        <div className='article__info'>
                            <div className='article__info__date'>
                                <span className='blue-round'/> {moment(article.createdAt).format('dddd, DD MMMM')}
                            </div>
                            <h4>{article.name[lang]}</h4>
                        </div>
                    </div>
                </Link>)
            }
        </ActivitiesMain>
    )
}

export default Activities;
