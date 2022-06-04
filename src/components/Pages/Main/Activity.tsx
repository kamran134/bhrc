import React, { useEffect, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as ClockIcon } from '../../../assets/images/clock.svg';
import { ReactComponent as LocationIcon } from '../../../assets/images/location-pin.svg';
import { getArticles } from '../../../redux/actions/article.actions';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { RootState } from '../../../redux/reducers';
import { IHomePageBlock, IArticle } from '../../../models';
import moment from 'moment';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

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
            <AnimationOnScroll animateIn='animate__backInLeft' animateOnce>
                <h1 className='main-blue-text nowrap-text title'>Be Ready For Our Events</h1>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeIn' animateOnce>
                <div className='main-activity__background'>
                    <div className='opacity'/>
                    <div className='container'>
                        <div className='container-inner'>
                            <div className='flex-col flex-center small-margin-top'>
                                {data && data.subtitle && <div className='main-activity__central-block'>
                                    <h3 className='block-description white-text'>
                                        Event makes suspendice adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.
                                    </h3>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
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
                    <NewsBlock lang={lang} key={1} t={t} title={'Azerbaijani Con Donation'} activityUrl={'/'} />
                    <NewsBlock lang={lang} key={2} t={t} title={'Azerbaijani Con Donation'} activityUrl={'/'} />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='flex-row flex-center container-inner main-activity-flex'>
                    <NewsBlock lang={lang} key={1} t={t} title={'Azerbaijani Con Donation'} activityUrl={'/'} />
                    <NewsBlock lang={lang} key={2} t={t} title={'Azerbaijani Con Donation'} activityUrl={'/'} />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

interface NewsBlockProps {
    article?: IArticle;
    lang: string;
    t: TFunction;
    title?: string;
    activityUrl?: string;
}

const NewsBlock: FunctionComponent<NewsBlockProps> = ({article, lang, t, title, activityUrl}) => {
    return (
        <div className='activity-block noncentered-text'>
            <h2 className='main-blue-text'>
                {title}
            </h2>
            <div className='time-and-location'>
                <ClockIcon />
                <span>08:00 - 10:00</span>
                <LocationIcon />
                <span>Baku city</span>
            </div>
            <div className='activity-block__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis quis nunc vestibulum auctor.
            </div>
            <div className='activity-block__join'>
                <Link to={`/activities/${activityUrl}`}>Join now +</Link>
            </div>
        </div>
    )
}

export default MainActivity;
