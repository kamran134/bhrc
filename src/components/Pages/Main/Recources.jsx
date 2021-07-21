import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PaintBadge from '../../../utils/paint-badge';
import back1 from '../../../assets/images/Screenshot_108.png';
import back2 from '../../../assets/images/Screenshot_109.png';
import back3 from '../../../assets/images/Screenshot_110.png';
import { ImArrowRight2 } from 'react-icons/im';
import { getResourcesCategories } from '../../../redux/actions/resource-action';

const MainRecources = ({ data }) => {

    const dispatch = useDispatch()

    const { resources, lang } = useSelector(state => ({
        category: state.resources.category,
        lang: state.settings.language,
        resources: state.resources,
    }));

    useEffect(() => {
        dispatch(getResourcesCategories())
    }, [dispatch]);

    const recourceItems = [
        {
            _id: 1,
            imageUrl: back1,
            hashtag: '#Business',
            title: 'Donate for all people',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            statistics: 'Read by 60 people within 10 days'
        },
        {
            _id: 2,
            imageUrl: back2,
            hashtag: '#Helpness',
            title: 'Help for all people',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            statistics: 'Read by 60 people within 10 days'
        },
        {
            _id: 3,
            imageUrl: back3,
            hashtag: '#Education',
            title: 'Education for all children',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            statistics: 'Read by 60 people within 10 days'
        },
    ];

    return (
        <div className='main-recources'>
            <div className='container'>
                <div className='container-inner'>
                    <div className='flex-col flex-center small-margin-top'>
                        <PaintBadge title={'Recources'} />
                        <div className='main-activity__central-block'>
                            <h1 className='main-blue-text'>{data && data.title[lang]}</h1>
                            <h3 className='main-grey-text'>{data && data.subtitle[lang]}</h3>
                        </div>
                        <div className='main-recources__blocks'>
                            {resources && <RecourceBlock content={recourceItems} categories={resources.categories} lang={lang} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const RecourceBlock = ({content, categories, lang}) => {
    return(
        <>
            {categories && categories.map((category, i) => (
                <div key={category._id} className='recource-block' style={{backgroundImage: `url(${content[i].imageUrl})`}}>
                    <div className='recource-block__content'>
                        <div className='hashtag-text white-text'>{content[i].hashtag}</div>
                        <div className='block-title-text white-text'>{category.name[lang]}</div>
                        <div className='text'>{content[i].text}</div>
                        <div className='indicator'>
                            <div className='indicator__progress' />
                        </div>
                        <div className='statistics'>{content[i].statistics}</div>
                        <button className='bhrc-btn white-btn'>Read more<ImArrowRight2/></button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MainRecources;