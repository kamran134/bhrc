import React, { useEffect, FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Element, scroller } from 'react-scroll';
import { getArticles, searchArticles } from '../../../redux/actions';
import { config } from '../../../config';
import { ReactComponent as SearchIcon } from '../../../assets/images/search-icon.svg';
import { RootState } from '../../../redux/reducers';
import { IArticle } from '../../../models';
import Pagination from '../../UI/Pagination';
import Autocomplete from 'react-autocomplete';
//import 'react-dropdown/style.css';
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

    const { articles, lang, foundArticles } = useSelector((state: RootState) => ({
        articles: state.news.articles,
        lang: state.settings.language,
        foundArticles: state.news.foundArticles
    }));

    useEffect(() => {
        dispatch(getArticles(1, 5));
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
        console.log('selected', value);
        setSearchString(value);
    }

    const onFocusHandler = () => {
        if (searchString.length < 3) dispatch(searchArticles('', true));
    }

    return (
        <Element name='articles' className='articles-body'>
            <div className='container flex-row space-between align-top'>
                <div className='articles-body__left'>
                    {props.children}
                </div>
                <div className='articles-body__right'>
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
                                <div className='search-block__item'>
                                    <Link to={`/activities/${item.path[lang]}`}>
                                        <img loading='lazy'
                                            className='search-block__item-image'
                                            src={`${config.url.IMAGE_URL}article_images/${item.picture}/original/${item.picture}`}
                                            alt={item._id} />
                                        {item.name[lang]}
                                    </Link>
                                </div>
                            )} />
                        
                        <SearchIcon className='search-icon' />
                    </div>
                    <div className='popular-block'>
                        <h4>{t("Most read")}</h4>
                        {articles && articles.slice(0, 5).map((article: IArticle) =>
                        <div className='post' key={article._id}>
                            <div><img loading='lazy' src={`${config.url.IMAGE_URL}article_images/${article.picture}/original/${article.picture}`} alt={article._id} /></div>
                            <div className='post__date'>
                                <span className='blue-round'/> {moment(article.createdAt).format('dddd, DD MMMM')}
                                <h5><Link to={`/activities/${article.path[lang]}`}>
                                    {article.name[lang].length <= 56 ? article.name[lang] : article.name[lang].substring(0, 56) + ' ...'}
                                    </Link>
                                </h5>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            {props.allNews && <Pagination page={props.page || 1} url={'/activities'} count={props.count!} />}
        </Element>
    )
}

export default ActivitiesMain;
