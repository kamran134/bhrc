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

// Mock ----------------------------------------------
import bhrc1 from '../../../assets/images/bhrc.JPG';
import bhrc2 from '../../../assets/images/bhrc_5.JPG';
import bhrc3 from '../../../assets/images/bhrc_2.JPG';
import bhrc4 from '../../../assets/images/bhrc_4.JPG';
import bhrc5 from '../../../assets/images/bhrc_7.JPG';
import bhrc6 from '../../../assets/images/bhrc_3.JPG';
// ---------------------------------------------------

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

    const articlesMock: IArticle[] = [
        {
            _id: 'a',
            name: {
                az: 'Aliquam erat volutpat. Aenean consequat tempus iaculis.',
                ru: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. ',
                en: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. '
            },
            description: {
                az: '',
                ru: '',
                en: ''
            },
            path: {
                az: 'news1',
                ru: 'news1',
                en: 'news1'
            },
            pictureExtension: 'jpg',
            picture: bhrc1,
            shortDescription: '',
            createdAt: new Date()
        },
        {
            _id: 'b',
            name: {
                az: 'Aliquam erat volutpat. Aenean consequat tempus iaculis.',
                ru: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. ',
                en: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. '
            },
            description: {
                az: '',
                ru: '',
                en: ''
            },
            path: {
                az: 'news1',
                ru: 'news1',
                en: 'news1'
            },
            pictureExtension: 'jpg',
            picture: bhrc2,
            shortDescription: '',
            createdAt: new Date()
        },
        {
            _id: 'c',
            name: {
                az: 'Aliquam erat volutpat. Aenean consequat tempus iaculis.',
                ru: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. ',
                en: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. '
            },
            description: {
                az: '',
                ru: '',
                en: ''
            },
            path: {
                az: 'news1',
                ru: 'news1',
                en: 'news1'
            },
            pictureExtension: 'jpg',
            picture: bhrc3,
            shortDescription: '',
            createdAt: new Date()
        },
        {
            _id: 'd',
            name: {
                az: 'Aliquam erat volutpat. Aenean consequat tempus iaculis.',
                ru: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. ',
                en: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. '
            },
            description: {
                az: '',
                ru: '',
                en: ''
            },
            path: {
                az: 'news1',
                ru: 'news1',
                en: 'news1'
            },
            pictureExtension: 'jpg',
            picture: bhrc4,
            shortDescription: '',
            createdAt: new Date()
        },
        {
            _id: 'e',
            name: {
                az: 'Aliquam erat volutpat. Aenean consequat tempus iaculis.',
                ru: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. ',
                en: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. '
            },
            description: {
                az: '',
                ru: '',
                en: ''
            },
            path: {
                az: 'news1',
                ru: 'news1',
                en: 'news1'
            },
            pictureExtension: 'jpg',
            picture: bhrc5,
            shortDescription: '',
            createdAt: new Date()
        },
        {
            _id: 'f',
            name: {
                az: 'Aliquam erat volutpat. Aenean consequat tempus iaculis.',
                ru: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. ',
                en: 'Aliquam erat volutpat. Aenean consequat tempus iaculis. '
            },
            description: {
                az: '',
                ru: '',
                en: ''
            },
            path: {
                az: 'news1',
                ru: 'news1',
                en: 'news1'
            },
            pictureExtension: 'jpg',
            picture: bhrc6,
            shortDescription: '',
            createdAt: new Date()
        }
    ];

    return (        
        <ActivitiesMain allNews={true} count={count} page={Number(params.page)}>
            {articlesMock && articlesMock.map((article: IArticle) =>
                <Link key={article._id} to={`/activities/${article.path[lang]}`}>
                    <div 
                        className='article'
                        style={{backgroundImage: `url(${article.picture})`}} 
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
