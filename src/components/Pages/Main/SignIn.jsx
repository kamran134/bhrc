import React from 'react';
import { ImArrowRight2 } from 'react-icons/im';

const MainSignIn = () => {
    return (
        <div className='main-sign-in'>
            <div className='main-sign-in__container'>
                <h1>Be with us</h1>
                <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis 
                    quis nunc vestibulum auctor. Fusce semper vel enim sit amet ultricies.
                </h3>
                <button className='bhrc-btn orange-btn'>Sign in <ImArrowRight2/></button>
            </div>
        </div>
    )
}

export default MainSignIn;
