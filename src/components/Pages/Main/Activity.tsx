import React, { useEffect, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as ClockIcon } from '../../../assets/images/clock.svg';
import { getArticles } from '../../../redux/actions/article.actions';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { RootState } from '../../../redux/reducers';
import { IHomePageBlock, IArticle } from '../../../models';
import moment from 'moment';

interface ActivityProps {
    data: IHomePageBlock
}

const MainActivity: FunctionComponent<ActivityProps> = ({ data }) => {
    const dispatch = useDispatch();
    const { articles, lang } = useSelector((state: RootState) => ({
        articles: state.news.articles,
        lang: state.settings.language as string
    }));

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
                            {data && data.subtitle && <div className='main-activity__central-block'>
                                <h3 className='white-text'>{data.subtitle[lang]}</h3>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <Activities articles={articles} lang={lang} className='desktop' />
            <Activities articles={articles} lang={lang} className='mobile' />
        </div>
    );
}

interface ActivitiesProps {
    articles: IArticle[];
    lang: string;
    className: string;
}

const Activities: FunctionComponent<ActivitiesProps> = (props) => {
    const { t } = useTranslation();
    const { articles, lang, className } = props;
    return (
        <Carousel controls={false} className={`main-activity__activities ${className || ''}`}>
            <Carousel.Item>
                <div className='flex-row flex-center container-inner main-activity-flex'>
                {articles.map((article, i) =>
                    i < 2 && (
                        <NewsBlock article={article} lang={lang} key={article._id} t={t} />
                    )
                )}
                </div>
            </Carousel.Item>
            {articles.length > 2 && <Carousel.Item>
                <div className='flex-row flex-center container-inner main-activity-flex'>
                {articles.map((article, i) =>
                    i >= 2 && (
                        <NewsBlock article={article} lang={lang} key={article._id} t={t} />
                    )
                )}
                </div>
            </Carousel.Item>}
        </Carousel>
    );
}

interface NewsBlockProps {
    article: IArticle,
    lang: string,
    t: TFunction
}

const NewsBlock: FunctionComponent<NewsBlockProps> = ({article, lang, t}) => {
    return (
        <div className='activity-block noncentered-text'>
            <h2 className='main-blue-text'>{article.name[lang].length <= 56 ? article.name[lang] : article.name[lang].substring(0, 56) + ' ...'}</h2>
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
