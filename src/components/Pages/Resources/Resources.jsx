import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as FolderIcon } from '../../../assets/images/folder.svg';
import { ReactComponent as WordIcon } from '../../../assets/images/word-icon.svg';
import { ReactComponent as PowerPointIcon } from '../../../assets/images/powerpoint-icon.svg';
import { ReactComponent as PDFIcon } from '../../../assets/images/pdf-icon.svg';
import './resources.scss';
import { getCategoryResources, getResourcesCategories } from '../../../redux/actions/resource-action';
import moment from 'moment';
import { transliterate } from '../../../translit';

const Resources = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const history = useHistory();
    const location = useLocation();
    const [categoryId, setCategoryId] = useState(undefined);
    const [topicId, setTopicId] = useState(undefined);
    const [docType, setDocType] = useState(undefined);
    const { lang, resources, category } = useSelector(state => ({
        lang: state.settings.language,
        resources: state.resources,
        category: state.resources.category
    }));

    useEffect(() => {
        dispatch(getResourcesCategories())
    }, [dispatch]);

    useEffect(() => {
        if (categoryId) {
            dispatch(getCategoryResources(categoryId));
        }
    }, [categoryId, dispatch]);
    
    const selectCategoryHandler = (id, name) => {
        setCategoryId(id);
        const tName = transliterate().transform(name, '-');
        history.push(`/resources/${tName}`);
    }

    useEffect(() => {
        if (resources.categories) {
            for (let category of resources.categories) {
                const tName = transliterate().transform(category.name[lang], '-');
                console.log('/resources/' + tName, ' == ', location.pathname);
                if ('/resources/' + tName === location.pathname) {
                    console.log('yes');
                    selectCategoryHandler(category._id, tName);
                    break;
                }
            }
        }
    }, [location.pathname, lang, resources.categories])

    const selectDocType = (id, type) => {
        setTopicId(id);
        setDocType(type);
    }

    console.log('location', location);

    return (
        <>
            <div className='resources-head'>
                <div className='resources-head__background'>
                    {/* <div className='opacity'/> */}
                    <div className='container'>
                        <div className='container-inner'>
                            <div className='resources-head__categories'>
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <div className='flex-row flex-center container-inner'>
                                            {resources.categories && resources.categories.map(category => (
                                                <div className={category._id === categoryId ? 'category-block active' : 'category-block'} 
                                                    key={category._id}
                                                    onClick={() => selectCategoryHandler(category._id, category.name[lang])}
                                                >
                                                    <h2>{category.name[lang]}</h2>
                                                    <p className='category-block__description'>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
            </div>
            <div className='resources-body'>
                <div className='container'>
                    <div className='container-inner'>
                        <div className='resources-body__topics'>
                            <h2>{t("Category topics")}</h2>
                            {category && category.topics && category.topics.map(topic => (
                                <>
                                    <div className='topic' key={topic._id}>
                                        <div className='topic__icon'><FolderIcon/></div>
                                        <div className='flex-col space-between'>
                                            <div className='topic__title'>{topic.name[lang]}</div>
                                            <div className='topic__resources'>
                                                <button
                                                    onClick={() => selectDocType(topic._id, 'videos')}
                                                    disabled={topic.videos.length === 0}>
                                                    {t("Videos")}
                                                </button>
                                                <button
                                                    onClick={() => selectDocType(topic._id, 'presentations')}
                                                    disabled={topic.presentations.length === 0}>
                                                    {t("Presentations")}
                                                </button>
                                                <button
                                                    onClick={() => selectDocType(topic._id, 'reports')}
                                                    disabled={topic.reports.length === 0}>
                                                    {t("Reports")}
                                                </button>
                                                <button
                                                    onClick={() => selectDocType(topic._id, 'attachments')}
                                                    disabled={topic.attachments.length === 0}>
                                                    {t("Documents")}
                                                </button>
                                                <button
                                                    onClick={() => selectDocType(topic._id, 'informations')}
                                                    disabled={topic.informations.length === 0}>
                                                    {t("Info")}
                                                </button>
                                            </div>
                                        </div>
                                        <div className='topic__date'>
                                            {moment(topic.createdAt).format("DD.MM.YYYY")}
                                        </div>
                                    </div>
                                    {topic._id === topicId && <Materials materialsArray={topic[docType]} lang={lang} />}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Materials = ({materialsArray, lang}) => {
    return (
        <div className='topic__materials'>
            {materialsArray.length > 0 && materialsArray.map(material =>
                material.fileLink && material.fileLink[lang] ? <Material material={material} lang={lang} key={material._id} />
                : <div className='material-doc info' dangerouslySetInnerHTML={{__html: material.description[lang]}}/>
            )}
        </div>
    )
}

const Material = ({material, lang}) => {
    const extention = material.fileLink[lang].split('.').pop();
    switch(extention) {
        case 'docx':
        case 'doc':
            return (
                <a href={material.fileLink[lang]} target='_blanck'>
                    <div className='material-doc'>
                        <div><WordIcon /></div>
                        <div>{material.name[lang]}</div>
                    </div>
                </a>
                
            );
        case 'pdf':
            return (
                <a href={material.fileLink[lang]} target='_blanck'>
                    <div className='material-doc'>
                        <div><PDFIcon /></div>
                        <div>{material.name[lang]}</div>
                    </div>
                </a>
            );
        case 'pptx':
            return (
                <a href={material.fileLink[lang]} target='_blanck'>
                    <div className='material-doc'>
                        <div><PowerPointIcon /></div>
                        <div>{material.name[lang]}</div>
                    </div>
                </a>
            );
        default:
            return (
                <div className='material'>
                    <iframe src={`${material.fileLink[lang]}&embedded=true`} width='100%' title={material.name[lang]} />
                    {material.name[lang]}
                </div>
            );
    }
}

export default Resources;