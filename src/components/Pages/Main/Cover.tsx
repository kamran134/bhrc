import React, { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ReactComponent as BHRCfigure } from '../../../assets/images/new-figure.svg';
import { ReactComponent as UrbanicaButton } from '../../../assets/images/urbanica-button.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { IHomePageBlock } from '../../../models';
import Autocomplete from 'react-autocomplete';
import { globalSearch } from '../../../redux/actions';
import { ISearch } from '../../../models/search.model';
import { transliterate } from '../../../translit';
import { animateScroll } from 'react-scroll';

interface CoverProps {
    data: IHomePageBlock
}

const Cover: FunctionComponent<CoverProps> = ({ data }) => {
    const { t } = useTranslation();
    const [searchString, setSearchString] = useState<string>('');
    const dispatch = useDispatch();
    const { lang, searchActive, searchResults } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        searchActive: state.settings.searchActive,
        searchResults: state.homepage.searchResults
    }));

    const searchGlobalHandler = (searchString: string) => {
        setSearchString(searchString);
        if(searchString.length > 2) dispatch(globalSearch(searchString));
    }

    const selectGlobalHandler = (value: string) => {
        setSearchString(value);
    }

    const onFocusHandler = () => {
        if (searchString.length < 3) dispatch(globalSearch('', true));
    }

    const renderItem = (item: any, isHighlighted: boolean): ReactNode => {
        if (Array.isArray(item.result) && item.result.length > 0) {
            return (
                <div className='search-item'>
                    <div className={isHighlighted ? 'search-block__item highlighted' : 'search-block__item'}>
                        <p className='search-item__category'>{t(item.categoryName)}</p>
                        {item.result.map((itemElem: any) => renderCategoryItem(itemElem, item.categoryName))}
                    </div>
                </div>
            );
        } else {
            return (<></>)
        }
    };

    const renderCategoryItem = (item: any, categoryName: string) => {
        switch (categoryName) {
            case 'News':
                return (
                    <Link className={'search-item__item'} to={`/activities/${item.path[lang]}`}>{item.name[lang]}</Link>
                );
            default:
                return (
                    <Link className={'search-item__item'} to={`/resources/${transliterate().transform(item.categoryName.az, '-')}`}>{item.name[lang]}</Link>
                );
        }
    }

    const renderDesktop = () => (
        <div className='cover desktop'>
            <div className='opacity'/>
            <div className='container'>
                <div className='container-inner flex-row flex-center'>
                    <div className='cover__search'>
                        <Autocomplete
                            items={searchResults || []}
                            getItemValue={(item: ISearch) => item.categoryName}
                            value={searchString}
                            onChange={(e) => searchGlobalHandler(e.target.value)}
                            onSelect={(val) => selectGlobalHandler(val)}
                            renderInput={(props) => (
                                <input 
                                    type='text' {...props}
                                    className={searchActive ? 'active' : ''}
                                    placeholder={t('Search')}
                                    onFocus={onFocusHandler} />
                            )}
                            renderItem={renderItem}
                            menuStyle={{
                                left: '50%',
                                zIndex: 1000,
                                borderRadius: 7,
                                transform: 'translate(-50%, 0)',
                                top: 50,
                                width: 250,
                                position: 'absolute',
                                backgroundColor: 'rgba(248,248,248, 1)'
                            }}
                         />
                        
                    </div>
                    <div className='cover__slogan'>
                        <BHRCfigure />
                        <div className='slogan'>
                            <p>{data && data.title[lang]}</p>
                        </div>
                    </div>
                    <div className='cover__urbanica'>
                        <Link to='/urbanica'><UrbanicaButton /></Link>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderMobile = () => (
        <div className='cover mobile'>
            <div className='cover__urbanica'>
                <Link to='/urbanica'><UrbanicaButton /></Link>
            </div>
        </div>
    );

    return (
        <>
            {renderDesktop()}
            {renderMobile()}
        </>
    );
}

export default Cover;