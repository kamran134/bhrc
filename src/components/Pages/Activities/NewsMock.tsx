import React, { FunctionComponent } from 'react';
import ActivitiesMain from './ActivitiesMain';
import newsImage from '../../../assets/images/bhrc_5.JPG';
import carouselImage from '../../../assets/images/bhrc_6.JPG';
import Carousel from 'react-bootstrap/Carousel';

import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';

const NewsMock: FunctionComponent = () => {
    return (
        <ActivitiesMain>
            <>
                <div className='news__image'>
                    <img src={newsImage} alt={'mock'} />
                </div>
                <div className='news__content'>
                    <div className='news__date main-orange-text'>
                        Posted On: June 02,2012-Posted By: Alina Asgarova
                    </div>
                    <div className='news__title main-blue-text'>Aliquam erat volutpat. Aenean consequat tempus iaculis.</div>
                    <div dangerouslySetInnerHTML={{
                        __html: 'In aliquet vehicula lacus, sed porttitor ipsum. In at interdum felis, nec lobortis neque. Vestibulum scelerisque lectus et viverra pellentesque. Suspendisse fringilla iaculis arcu, nec suscipit nulla pellentesque rutrum. Suspendisse eget nibh in metus rhoncus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eget fermentum nisi. Sed vitae commodo risus. Vivamus eu semper libero. Sed eu diam metus. Suspendisse convallis ultricies dolor non ultricies. Nulla sed vestibulum felis. Cras purus sem, semper ut mauris et, facilisis lacinia urna.'}} />
                </div>

                <div className='news__content bottom-block gallery'>
                    <div>
                        <div className='news__title main-blue-text centered-text'>
                            Aliquam erat volutpat. Aenean consequat tempus iaculis.
                        </div>
                        <Carousel>
                            <Carousel.Item>
                                <img className='news__gallery' src={carouselImage} alt={'Mock'} />
                                <img className='news__gallery' src={carouselImage} alt={'Mock'} />
                                <img className='news__gallery' src={carouselImage} alt={'Mock'} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className='news__gallery' src={carouselImage} alt={'Mock'} />
                                <img className='news__gallery' src={carouselImage} alt={'Mock'} />
                                <img className='news__gallery' src={carouselImage} alt={'Mock'} />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className='news__content bottom-block'>
                    <div className='news__content__title-text'>
                        <div className='news__title main-blue-text'>
                            Aliquam erat volutpat. Aenean consequat tempus iaculis.
                        </div>
                        <div>
                            In aliquet vehicula lacus, sed porttitor ipsum. In at interdum felis, nec lobortis neque. Vestibulum
                            scelerisque lectus et viverra pellentesque. Suspendisse fringilla iaculis arcu, nec suscipit nulla
                            pellentesque rutrum. Suspendisse eget nibh in metus rhoncus feugiat. Pellentesque habitant morbi tristique
                            senectus et netus et malesuada fames ac turpis egestas. Nulla eget fermentum nisi. Sed vitae commodo risus.
                            Vivamus eu semper libero. Sed eu diam metus. Suspendisse convallis ultricies dolor non ultricies. Nulla
                            sed vestibulum felis. Cras purus sem, semper ut mauris et, facilisis lacinia urna. 
                        </div>
                    </div>
                    <div className='news__content__title-text'>
                        <div className='news__title main-blue-text'>
                            Aliquam erat volutpat. Aenean consequat tempus iaculis.
                        </div>
                        <div>
                            In aliquet vehicula lacus, sed porttitor ipsum. In at interdum felis, nec lobortis neque. Vestibulum
                            scelerisque lectus et viverra pellentesque. Suspendisse fringilla iaculis arcu, nec suscipit nulla
                            pellentesque rutrum. Suspendisse eget nibh in metus rhoncus feugiat. Pellentesque habitant morbi tristique
                            senectus et netus et malesuada fames ac turpis egestas. Nulla eget fermentum nisi. Sed vitae commodo risus.
                            Vivamus eu semper libero. Sed eu diam metus. Suspendisse convallis ultricies dolor non ultricies. Nulla
                            sed vestibulum felis. Cras purus sem, semper ut mauris et, facilisis lacinia urna. 
                        </div>
                    </div>
                    <div className='news__content__footer'>
                        Share: <span className='social-network'>
                            <a href={'/'} target="_blank" rel="noreferrer" className='icon'><Twitter /></a>
                            <a href={'/'} target="_blank" rel="noreferrer" className='icon'><Facebook /></a>
                            <a href={'/'} target="_blank" rel="noreferrer" className='icon'><Instagram /></a>
                        </span>
                    </div>
                </div>
            </>
        </ActivitiesMain>
    );
}

export default NewsMock;