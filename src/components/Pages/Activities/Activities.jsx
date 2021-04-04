import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../../../redux/actions/article-actions';
import { config } from '../../../config';
import './activities.scss';

const Activities = () => {
    const dispatch = useDispatch();

    const { articles, lang } = useSelector(state => ({
        articles: state.articles.articles,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getArticles(1, 10));
    }, [dispatch]);

    return (
        <div className='articles'>
            <div className='container'>
                <div className='container-inner flex-row space-between'>
                    {articles && articles.map(article => 
                    <div key={article._id} className='article'>
                        <div><img src={`${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture}`} alt={''}/></div>
                        <div className='article__title'>{article[lang].name}</div>
                        <div>{article[lang].shortDescription}</div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Activities;
