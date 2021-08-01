import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import PaintBadge from '../../../utils/paint-badge';
import { ReactComponent as ClockIcon } from '../../../assets/images/clock.svg';
import { ReactComponent as LocationIcon } from '../../../assets/images/location-pin.svg';
import { getArticles } from '../../../redux/actions/article-actions';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

const MainActivity = ({ data }) => {
    const dispatch = useDispatch();
    const { articles, lang } = useSelector(state => ({
        articles: state.articles.articles,
        lang: state.settings.language
    }));

    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getArticles(1, 4));
    }, [dispatch]);

    moment.locale(lang);

    return (
        <div className='main-activity centered-text'>
            <h1 className='main-blue-text nowrap-text title'>{data && data.title[lang]}</h1>
            <div className='main-activity__background'>
                <div className='opacity'/>
                <div className='container'>
                    <div className='container-inner'>
                        <div className='flex-col flex-center small-margin-top'>
                            {/* <PaintBadge title={'Activity'} /> */}
                            <div className='main-activity__central-block'>
                                <h3 className='white-text'>{data && data.subtitle[lang]}</h3>
                            </div>
                            <div className='main-activity__activities'>
                                <Carousel controls={false}>
                                    <Carousel.Item>
                                        <div className='flex-row flex-center container-inner'>
                                        {articles.map((article, i) =>
                                            i < 2 && (
                                                <NewsBlock article={article} lang={lang} key={article._id} t={t} />
                                            )
                                        )}
                                        </div>
                                    </Carousel.Item>
                                    {articles.length > 2 && <Carousel.Item>
                                        <div className='flex-row flex-center container-inner'>
                                        {articles.map((article, i) =>
                                            i >= 2 && (
                                                <NewsBlock article={article} lang={lang} key={article._id} t={t} />
                                            )
                                        )}
                                        </div>
                                    </Carousel.Item>}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NewsBlock = ({article, lang, t}) => {
    return (
        <div className='activity-block noncentered-text'>
            <h2 className='main-blue-text'>{article.name[lang]}</h2>
            <div className='time-and-location'>
                <ClockIcon />
                <span>{moment(article.createdAt).format('hh:mm, DD MMMM YYYY')}</span>
                {/* <LocationIcon />
                <span>Baku city</span> */}
            </div>
            {/* <div className='activity-block__description'>
                {article.shortDescription[lang]}
            </div> */}
            <div className='activity-block__join'>
                <Link to={`/activities/${article.path[lang]}`}>{t('Read more')}</Link>
            </div>
        </div>
    )
}

export default MainActivity;
