import React, { useState, useEffect, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as FolderIcon } from '../../../assets/images/folder.svg';
import { ReactComponent as WordIcon } from '../../../assets/images/word-icon.svg';
import { ReactComponent as PowerPointIcon } from '../../../assets/images/powerpoint-icon.svg';
import { ReactComponent as PDFIcon } from '../../../assets/images/pdf-icon.svg';
import { getCategoryResources, getResourcesCategories } from '../../../redux/actions';
import { Element, scroller } from 'react-scroll';
import { transliterate } from '../../../translit';
import { RootState } from '../../../redux/reducers';
import { IAttachment, ICategory, IPresentation, IReport, IResource, ITopic, IVideo, IMultilang } from '../../../models';
import './resources.scss';

const Resources: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [categoryId, setCategoryId] = useState<string | undefined>(undefined);
    const [topicId, setTopicId] = useState<string | undefined>(undefined);
    const [docType, setDocType] = useState<string | undefined>(undefined);
    const { lang, resources, topics } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        resources: state.resources,
        topics: state.resources.topics
    }));

    useEffect(() => {
        dispatch(getResourcesCategories())
    }, [dispatch]);

    useEffect(() => {
        if (categoryId) {
            dispatch(getCategoryResources(categoryId));
        }
    }, [categoryId, dispatch]);

    useEffect(() => {
        scroller.scrollTo('resources', {
            duration: 1500,
            delay: 100,
            smooth: true,
            block: "center"
        });
    }, []);
    
    const selectCategoryHandler = (id: string, name: string) => {
        setCategoryId(id);
        const tName = transliterate().transform(name, '-');
        navigate(`/resources/${tName}`);
    }

    useEffect(() => {
        if (resources.categories) {
            for (let category of resources.categories) {
                const tName = transliterate().transform(category.name.az, '-');
                if ('/resources/' + tName === location.pathname) {
                    selectCategoryHandler(category._id, tName);
                    break;
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname, lang, resources.categories])

    const selectDocType = (id: string, type: string) => {
        setTopicId(id);
        setDocType(type);
    }

    return (
        <>
            <Element name='resources' className='resources-head'>
                <div className='resources-head__background'>
                    <div className='container'>
                        <div className='container-inner'>
                            <div style={{justifyContent: 'initial', paddingTop: 30}} className='articles-head__text'>
                                <h1>{t("Resources")}</h1>
                                <p style={{textAlign: 'center'}}>
                                    Event makes suspendice adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.
                                </p>
                            </div>
                            <div className='resources-head__categories'>
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <div className='flex-row flex-center container-inner'>
                                            {resources.categories && (resources.categories as ICategory[]).map((category: ICategory) => (
                                                <div className={category._id === categoryId ? 'category-block active' : 'category-block'} 
                                                    key={category._id}
                                                    onClick={() => selectCategoryHandler(category._id, category.name[lang])}
                                                >
                                                    <h2>{category.name[lang]}</h2>
                                                    <p className='category-block__description'>
                                                        {category.description && category.description[lang]}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
            <div className='resources-body'>
                <div className='container'>
                    <div className='container-inner'>
                        <div className='resources-body__topics'>
                            <h2>{topics ? t("Category topics") : t("Select one of the categories above")}</h2>
                            {topics && topics.map((topic: ITopic) => (
                                <React.Fragment key={topic._id}>
                                    <div className='topic'>
                                        <div className='topic__icon'><FolderIcon/></div>
                                        <div className='flex-col space-between'>
                                            <div className='topic__title'>{topic.name[lang]}</div>
                                            <div className='topic__resources'>
                                                {topic.videos && topic.videos.length !== 0 && <button onClick={() => selectDocType(topic._id, 'videos')}>
                                                    {t("Videos")}
                                                </button>}
                                                {topic.presentations && topic.presentations.length !== 0 && <button onClick={() => selectDocType(topic._id, 'presentations')}>
                                                    {t("Presentations")}
                                                </button>}
                                                {topic.reports && topic.reports.length !== 0 && <button onClick={() => selectDocType(topic._id, 'reports')}>
                                                    {t("Reports")}
                                                </button>}
                                                {topic.attachments && topic.attachments.length !== 0 && <button onClick={() => selectDocType(topic._id, 'attachments')}>
                                                    {t("Documents")}
                                                </button>}
                                                {topic.informations && topic.informations.length !== 0 && <button onClick={() => selectDocType(topic._id, 'informations')}>
                                                    {t("Info")}
                                                </button>}
                                            </div>
                                        </div>
                                        {/* <div className='topic__date'>
                                            {moment(topic.createdAt).format("DD.MM.YYYY")}
                                        </div> */}
                                    </div>
                                    {(topic._id === topicId) && docType && <Materials materialsArray={topic[docType]} lang={lang} />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

interface MaterialsProps {
    materialsArray: string | IAttachment[] | IPresentation[] | IReport[] | IVideo[] | IResource[] | Date | IMultilang | undefined,
    lang: string
}

const Materials: FunctionComponent<MaterialsProps> = ({materialsArray, lang}) => {
    return (
        <div className='topic__materials'>
            {(materialsArray as (IAttachment | IPresentation | IReport | IVideo | IResource)[]).map(material => {
                if(material.fileLink && material.fileLink.az) return <Material material={material} lang={lang} key={material._id} />
                else return(
                    <div className='material-doc info'>
                        <h3>{material.name.az}</h3>
                        <p dangerouslySetInnerHTML={{__html: material.description.az}} />
                    </div>
                );
            })}
        </div>
    );
}

interface MaterialProps {
    lang: string,
    material: IAttachment | IResource | IPresentation | IReport | IVideo
}

const Material: FunctionComponent<MaterialProps> = ({material, lang}) => {
    const extention = material.fileLink.az.split('.').pop();
    switch(extention) {
        case 'docx':
        case 'doc':
            return (
                <a href={material.fileLink.az} target='_blanck'>
                    <div className='material-doc'>
                        <div><WordIcon /></div>
                        <div>{material.name.az}</div>
                    </div>
                </a>
                
            );
        case 'pdf':
            return (
                <a href={material.fileLink.az} target='_blanck'>
                    <div className='material-doc'>
                        <div><PDFIcon /></div>
                        <div>{material.name.az}</div>
                    </div>
                </a>
            );
        case 'pptx':
            return (
                <a href={material.fileLink.az} target='_blanck'>
                    <div className='material-doc'>
                        <div><PowerPointIcon /></div>
                        <div>{material.name.az}</div>
                    </div>
                </a>
            );
        default:
            return (
                <div className='material'>
                    <iframe src={`${material.fileLink.az}&embedded=true`} width='100%' title={material.name.az} />
                    {material.name.az}
                </div>
            );
    }
}

export default Resources;