import React, { useEffect, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../../../redux/actions/article-actions';
import { config } from '../../../config';
// import { useTranslation } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';
// import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';
import ActivitiesMain from './ActivitiesMain';
import './activities.scss';
import { RootState } from '../../../redux/reducers/rootReducer';
import { IArticle } from '../../../models/article';

const Activities: FunctionComponent = () => {
    const dispatch = useDispatch();
    // const { t } = useTranslation();

    const { articles, lang } = useSelector((state: RootState) => ({
        articles: state.news.articles,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getArticles(1, 10));
    }, [dispatch]);

    moment.locale(lang);

    return (        
        <ActivitiesMain>
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
