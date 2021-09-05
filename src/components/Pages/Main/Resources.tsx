import React, { useEffect, FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { useHistory } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import { getResourcesCategories } from '../../../redux/actions/resource-action';
import { config } from '../../../config';
import { transliterate } from '../../../translit';
import { THomePageBlock } from '../../../models/homepage';
import { RootState } from '../../../redux/reducers/rootReducer';
import { TCategory } from '../../../models/resource';

type MainResourcesProps = {
    data: THomePageBlock
}

const MainResources: FunctionComponent<MainResourcesProps> = ({ data }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const history = useHistory();

    const { resources, lang } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        resources: state.resources,
    }));

    useEffect(() => {
        dispatch(getResourcesCategories())
    }, [dispatch]);

    return (
        <div className='main-resources'>
            <div className='container'>
                <div className='container-inner'>
                    <div className='flex-col flex-center small-margin-top'>
                        {/* <PaintBadge title={'Resources'} /> */}
                        <div className='main-activity__central-block'>
                            <h1 className='main-blue-text'>{data && data.title[lang]}</h1>
                            {data && data.subtitle && <h3 className='main-grey-text'>{data && data.subtitle[lang]}</h3>}
                        </div>
                        <div className='main-resources__blocks'>
                            {resources && 
                                <ResourceBlock 
                                    categories={resources.categories}
                                    lang={lang}
                                    t={t}
                                    history={history} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

type ResourceBlockProps = {
    categories?: TCategory[],
    lang: string,
    t: TFunction,
    history: any
}

const ResourceBlock: FunctionComponent<ResourceBlockProps> = ({ categories, lang, t, history }) => {
    return(
        <>
            {categories && categories.map((category, i) => (
                <div key={category._id} className='resource-block' style={{backgroundImage: `url(${config.url.IMAGE_URL}category_images/${category.picture}/original/${category.picture})`}}>
                    <div className='resource-block__content'>
                        {/* <div className='hashtag-text white-text'>{content[i].hashtag}</div> */}
                        <div className='block-title-text white-text'>{category.name[lang]}</div>
                        <div className='text'>{category.description[lang]}</div>
                        <div className='indicator'>
                            <div className='indicator__progress' />
                        </div>
                        <div className='statistics'>{}</div>
                        <button className='bhrc-btn white-btn' onClick={() => history.push(`/resources/${transliterate().transform(category.name[lang], '-')}`)}>{t("Read more")}<ImArrowRight2/></button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MainResources;