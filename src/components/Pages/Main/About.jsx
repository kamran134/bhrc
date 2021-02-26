import React from 'react';
import PaintBadge from '../../../utils/paint-badge';
import ManImg from '../../../assets/images/man.jpg';
import WomanImg from '../../../assets/images/woman.jpg';
import { ImArrowRight2 } from 'react-icons/im';

const MainAbout = () => {
    return (
        <div className='main-about'>
            <div className='container'>
                <div className='container-inner'>
                    <PaintBadge title={'About'} />
                    <div className='flex-row space-between'>
                        <div className='main-about__left'>
                            <h2 className='main-blue-text'>An International Independent Charity Organization</h2>
                            <h3 className='main-orange-text'>Your support will help us to make life better living for poor vulnerable children 
                                consectetur adipisicing elit.</h3>
                            <div className='block-text'>
                                Konin wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className='main-about__footer'>
                                <button className='bhrc-btn orange-btn'>Donate now <ImArrowRight2/></button>
                                <button className='bhrc-btn blue-btn'>More about Urbanica <ImArrowRight2/></button>
                            </div>
                        </div>
                        <div className='main-about__right'>
                            <div className='about-circle-images'>
                                <img className='small-circle' src={WomanImg} />
                                <img className='big-circle' src={ManImg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAbout;
