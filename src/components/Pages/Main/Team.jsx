import React from 'react';
import PaintBadge from '../../../utils/paint-badge';
import { ImArrowRight2 } from 'react-icons/im';
import avatar1 from '../../../assets/images/test_avatar1.png';
import avatar2 from '../../../assets/images/test_avatar2.png';
import avatar3 from '../../../assets/images/test_avatar3.png';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';

const MainTeam = () => {

    const members = [
        {
            name: 'Alex Maxwel',
            avatar: avatar1,
            profession: 'Founder'
        },
        {
            name: 'Julia Hamilton',
            avatar: avatar2,
            profession: 'Manager'
        },
        {
            name: 'Williams Hamilton',
            avatar: avatar3,
            profession: 'CEO'
        },
        {
            name: 'Alex Maxwel',
            avatar: avatar1,
            profession: 'Founder'
        },
        {
            name: 'Julia Hamilton',
            avatar: avatar2,
            profession: 'Manager'
        },
        {
            name: 'Williams Hamilton',
            avatar: avatar3,
            profession: 'CEO'
        }
    ]

    return (
        <div className='main-team'>
            <div className='container'>
                <div className='container-inner'>
                    <PaintBadge title={'Team'} />
                    <h1>Talented Team Behind BHRC</h1>
                    <div className='main-team__text-button'>
                        <div className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis
                            quis nunc vestibulum auctor. Fusce semper vel enim sit amet ultricies.
                        </div>
                        <button className='bhrc-btn orange-btn'>Meet us <ImArrowRight2/></button>
                    </div>
                    <Members members={members} />
                </div>
            </div>
        </div>
    )
}

const Members = ({members}) => {
    return (
        <div className='main-team__members'>
            {members.map(member => (
                <div className='member'>
                    <img src={member.avatar} alt={'avatar'} />
                    <div className='name'>{member.name}</div>
                    <div className='profession'>{member.profession}</div>
                    <div className='social-network'>
                        <span className='icon'><Twitter/></span>
                        <span className='icon'><Facebook/></span>
                        <span className='icon'><Instagram/></span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainTeam;
