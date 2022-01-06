import React, { useEffect, FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Element, scroller } from 'react-scroll';
import { getPopularArticles, searchArticles } from '../../../redux/actions';
import { config } from '../../../config';
import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';
import { RootState } from '../../../redux/reducers';
import { IArticle } from '../../../models';
import Pagination from '../../UI/Pagination';
import Autocomplete from 'react-autocomplete';
import moment from 'moment';
import 'moment/locale/az';
import 'moment/locale/ru';
import './activities.scss';

interface ActivitiesMainProps {
    page?: number;
    count?: number;
    allNews?: boolean;
}

const ActivitiesMain: FunctionComponent<ActivitiesMainProps> = props => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [searchString, setSearchString] = useState<string>('');

    const { lang, foundArticles, popularArticles } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        foundArticles: state.news.foundArticles,
        popularArticles: state.news.popularArticles
    }));

    useEffect(() => {
        dispatch(getPopularArticles());
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

    const searchNewsHandler = (searchString: string) => {
        setSearchString(searchString);
        if(searchString.length > 2) dispatch(searchArticles(searchString));
    }

    const selectNewsHandler = (value: string) => {
        setSearchString(value);
    }

    const onFocusHandler = () => {
        if (searchString.length < 3) dispatch(searchArticles('', true));
    }

    return (
        <Element name='articles' className='articles-body'>
            <div className='container flex-row mobile'>
                <div className='search-block'>
                    <Autocomplete 
                        items={foundArticles}
                        getItemValue={(item: IArticle) => item.name[lang]}
                        value={searchString}
                        onChange={(e) => searchNewsHandler(e.target.value)}
                        onSelect={(val) => selectNewsHandler(val)}
                        renderInput={(props) => (
                            <input type='text' {...props} placeholder={t('Search')} onFocus={onFocusHandler} />
                        )}
                        renderItem={(item, isHighlighted) => (
                            <div className={isHighlighted ? 'search-block__item highlighted' : 'search-block__item'}>
                                <Link to={`/activities/${item.path[lang]}`}>
                                    <img loading='lazy'
                                        className='search-block__item-image'
                                        src={`${config.url.IMAGE_URL}article_images/${item.picture}/mobile/${item.picture}`}
                                        alt={item._id} />
                                    {item.name[lang]}
                                </Link>
                            </div>
                        )}
                        menuStyle={{
                            left: 0,
                            top: 60,
                            width: 250,
                            position: 'absolute',
                            backgroundColor: 'rgba(248,248,248, 1)',
                            zIndex: 30
                        }} />
                    <SearchIcon className='search-icon' />
                </div>
            </div>
            <div className='container flex-row space-between align-top'>
                <div className='articles-body__left'>
                    {props.children}
                </div>
                <div className='articles-body__right desktop'>
                    <div className='search-block'>
                        <Autocomplete 
                            items={foundArticles}
                            getItemValue={(item: IArticle) => item.name[lang]}
                            value={searchString}
                            onChange={(e) => searchNewsHandler(e.target.value)}
                            onSelect={(val) => selectNewsHandler(val)}
                            renderInput={(props) => (
                                <input type='text' {...props} placeholder={t('Search')} onFocus={onFocusHandler} />
                            )}
                            renderItem={(item, isHighlighted) => (
                                <div className={isHighlighted ? 'search-block__item highlighted' : 'search-block__item'}>
                                    <Link to={`/activities/${item.path[lang]}`}>
                                        <img loading='lazy'
                                            className='search-block__item-image'
                                            src={`${config.url.IMAGE_URL}article_images/${item.picture}/mobile/${item.picture}`}
                                            alt={item._id} />
                                        {item.name[lang]}
                                    </Link>
                                </div>
                            )}
                            menuStyle={{
                                left: 0,
                                top: 60,
                                width: 250,
                                position: 'absolute',
                                backgroundColor: 'rgba(248,248,248, 1)'
                            }} />
                        <SearchIcon className='search-icon' />
                    </div>
                    <PopularBlock articles={popularArticles} lang={lang} />
                </div>
            </div>
            {props.allNews && <Pagination page={props.page || 1} url={'/activities'} count={props.count!} />}
            <PopularBlock articles={popularArticles} lang={lang} _className='mobile' />
        </Element>
    );
}

interface PopularBlockProps {
    articles: IArticle[];
    lang: string;
    _className?: string;
}

const PopularBlock: FunctionComponent<PopularBlockProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className={`popular-block ${props._className || ''}`}>
            <h4>{t("Most read")}</h4>
            {props.articles && props.articles.slice(0, 5).map((article: IArticle) =>
            <div className='post' key={article._id}>
                <div><img loading='lazy' src={`${config.url.IMAGE_URL}article_images/${article.picture}/mobile/${article.picture}`} alt={article._id} /></div>
                <div className='post__date'>
                    <span className='blue-round'/> {moment(article.createdAt).format('dddd, DD MMMM')}
                    <h5><Link to={`/activities/${article.path[props.lang]}`}>
                        {article.name[props.lang].length <= 56 ? article.name[props.lang] : article.name[props.lang].substring(0, 56) + ' ...'}
                        </Link>
                    </h5>
                </div>
            </div>
            )}
        </div>
    );
}

export default ActivitiesMain;
