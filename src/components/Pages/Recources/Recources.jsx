import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { ReactComponent as FolderIcon } from '../../../assets/images/folder.svg';
import './recources.scss';

const Recources = () => {
    const { lang } = useSelector(state => ({
        lang: state.settings.language
    }));

    const topics = [
        {
            id: 1,
            category: 1,
            title: {
                az: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            date: '28.05.21',
            videos: [{}],
            presentations: [{}],
            reports: [{}]
        },
        {
            id: 2,
            category: 1,
            title: {
                az: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            date: '28.05.21',
            videos: [],
            presentations: [],
            reports: []
        },
        {
            id: 3,
            category: 1,
            title: {
                az: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            date: '28.05.21',
            videos: [],
            presentations: [],
            reports: []
        },
        {
            id: 4,
            category: 1,
            title: {
                az: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            date: '28.05.21',
            videos: [],
            presentations: [],
            reports: []
        },
        {
            id: 5,
            category: 1,
            title: {
                az: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            date: '28.05.21',
            videos: [],
            presentations: [],
            reports: []
        },
        {
            id: 6,
            category: 1,
            title: {
                az: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                ru: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            date: '28.05.21',
            videos: [],
            presentations: [],
            reports: []
        }
    ]

    return (
        <>
            <div className='recources-head'>
                <div className='recources-head__background'>
                    <div className='opacity'/>
                    <div className='container'>
                        <div className='container-inner'>
                            <div className='recources-head__categories'>
                                <Carousel controls={false} indicators={false}>
                                    <Carousel.Item>
                                        <div className='flex-row flex-center container-inner'>
                                            <div className='category-block'>
                                                <h2>Human Rights</h2>
                                                <p className='category-block__description'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Nulla imperdiet turpis quis nunc vestibulum auctor.
                                                </p>
                                            </div>
                                            <div className='category-block'>
                                                <h2>Business</h2>
                                                <p className='category-block__description'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Nulla imperdiet turpis quis nunc vestibulum auctor.
                                                </p>
                                            </div>
                                            <div className='category-block'>
                                                <h2>Main Help</h2>
                                                <p className='category-block__description'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Nulla imperdiet turpis quis nunc vestibulum auctor.
                                                </p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='recources-body'>
                <div className='container'>
                    <div className='container-inner'>
                        <div className='recources-body__topics'>
                            <h2>Main Topics</h2>
                            {topics.map(topic => (
                                <div className='topic' key={topic.id}>
                                    <div className='topic__icon'><FolderIcon/></div>
                                    <div className='flex-col space-between'>
                                        <div className='topic__title'>{topic.title[lang]}</div>
                                        <div className='topic__recources'>
                                            <button>Videos</button>
                                            <button>Presentations</button>
                                            <button>Reports</button>
                                        </div>
                                    </div>
                                    <div className='topic__date'>
                                        {topic.date}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recources;