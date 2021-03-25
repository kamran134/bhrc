import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PaintBadge from '../../../utils/paint-badge';
import { ReactComponent as ClockIcon } from '../../../assets/images/clock.svg';
import { ReactComponent as LocationIcon } from '../../../assets/images/location-pin.svg';

const MainActivity = () => {
    return (
        <div className='main-activity'>
            <div className='main-activity__background'>
                <div className='opacity'/>
                <div className='container'>
                    <div className='container-inner'>
                        <div className='flex-col flex-center small-margin-top'>
                            <PaintBadge title={'Activity'} />
                            <div className='main-activity__central-block'>
                                <h1 className='white-text'>Be Ready For Our Events</h1>
                                <h3 className='white-text'>Event makes suspendice adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</h3>
                            </div>
                            <div className='main-activity__activities'>
                                <Carousel controls={false}>
                                    <Carousel.Item>
                                        <div className='flex-row space-around container-inner'>
                                            <div className='activity-block'>
                                                <h2>Azerbaijany Con Donation</h2>
                                                <div className='time-and-location'>
                                                    <ClockIcon />
                                                    <span>08.00 - 10.00</span>
                                                    <LocationIcon />
                                                    <span>Baku city</span>
                                                </div>
                                                <div className='activity-block__description'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis quis nunc vestibulum auctor.
                                                </div>
                                                <div className='activity-block__join'>
                                                    Join now +
                                                </div>
                                            </div>
                                            <div className='activity-block'>
                                                <h2>Azerbaijany Con Donation</h2>
                                                <div className='time-and-location'>
                                                    <ClockIcon />
                                                    <span>08.00 - 10.00</span>
                                                    <LocationIcon />
                                                    <span>Baku city</span>
                                                </div>
                                                <div className='activity-block__description'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis quis nunc vestibulum auctor.
                                                </div>
                                                <div className='activity-block__join'>
                                                    Join now +
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className='flex-row space-around container-inner'>
                                            <div className='activity-block'>
                                                <h2>Azerbaijany Con Donation</h2>
                                                <div className='time-and-location'>
                                                    <ClockIcon />
                                                    <span>08.00 - 10.00</span>
                                                    <LocationIcon />
                                                    <span>Baku city</span>
                                                </div>
                                                <div className='activity-block__description'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis quis nunc vestibulum auctor.
                                                </div>
                                                <div className='activity-block__join'>
                                                    Join now +
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainActivity;
