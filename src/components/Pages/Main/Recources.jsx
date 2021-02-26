import React from 'react';
import PaintBadge from '../../../utils/paint-badge';
import back1 from '../../../assets/images/Screenshot_108.png';
import back2 from '../../../assets/images/Screenshot_109.png';
import back3 from '../../../assets/images/Screenshot_110.png';
import { ImArrowRight2 } from 'react-icons/im';

const MainRecources = () => {

    const recourceItems = [
        {
            imageUrl: back1,
            hashtag: '#Business',
            title: 'Donate for all people',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            statistics: 'Read by 60 people within 10 days'
        },
        {
            imageUrl: back2,
            hashtag: '#Helpness',
            title: 'Help for all people',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            statistics: 'Read by 60 people within 10 days'
        },
        {
            imageUrl: back3,
            hashtag: '#Education',
            title: 'Education for all children',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            statistics: 'Read by 60 people within 10 days'
        },
    ]

    return (
        <div className='main-recources'>
            <div className='container'>
                <div className='container-inner'>
                    <div className='flex-col flex-center relative small-margin-top'>
                        <PaintBadge title={'Recources'} />
                        <div className='main-activity__central-block'>
                            <h1 className='main-blue-text'>The News You Care About</h1>
                            <h3 className='main-grey-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis quis nunc vestibulum auctor.</h3>
                        </div>
                        <div className='main-recources__blocks'>
                            <RecourceBlock content={recourceItems} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const RecourceBlock = ({content}) => {
    return(
        <>
            {content.map(item => (
                <div className='recource-block' style={{backgroundImage: `url(${item.imageUrl})`}}>
                    <div className='recource-block__content'>
                        <div className='hashtag-text white-text'>{item.hashtag}</div>
                        <div className='block-title-text white-text'>{item.title}</div>
                        <div className='text'>{item.text}</div>
                        <div className='indicator'>
                            <div className='indicator__progress' />
                        </div>
                        <div className='statistics'>{item.statistics}</div>
                        <button className='bhrc-btn white-btn'>Read more<ImArrowRight2/></button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MainRecources;