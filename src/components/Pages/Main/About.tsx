import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import FontanImg from '../../../assets/images/about/bhrc_3.jpg';
import HAImg from '../../../assets/images/about/bhrc_7.jpg';
import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../../redux/reducers';
import { IHomePageBlock } from '../../../models';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

interface AboutProps {
    data: IHomePageBlock
}

const MainAbout: FunctionComponent<AboutProps> = ({data}) => {
    const { t } = useTranslation();
    const history = useNavigate();
    const { lang } = useSelector((state: RootState) => ({
        lang: state.settings.language
    }));

    return (
        <div className='main-about'>
            <div className='container'>
                <div className='container-inner'>
                    <div className='flex-row space-between main-about-flex'>
                        <div className='main-about__left'>
                            {data && data.title && 
                            <AnimationOnScroll animateIn='animate__rubberBand' animateOnce>
                                <h2 className='main-blue-text'>{data.title[lang]}</h2>
                            </AnimationOnScroll>}
                            {data && data.subtitle && 
                            <AnimationOnScroll animateIn='animate__fadeIn' animateOnce>
                                <h3 className='main-orange-text'>{data.subtitle[lang]}</h3>
                            </AnimationOnScroll>}
                            {data && data.text && 
                            <AnimationOnScroll animateIn='animate__fadeIn' animateOnce>
                                <div className='block-text'>{data.text[lang]}</div>
                            </AnimationOnScroll>}
                            <div className='main-about__footer'>
                                <button className='bhrc-btn orange-btn' onClick={() => history('/about')}>
                                    {t("More info")} <ImArrowRight2/>
                                </button>
                                <button className='bhrc-btn blue-btn'>{t("Support us")} <ImArrowRight2/></button>
                            </div>
                        </div>
                        <div className='main-about__right desktop'>
                            <div className='about-circle-images'>
                                <AnimationOnScroll animateIn='animate__rotateIn' className='small-circle__animate' animateOnce>
                                    <img className='small-circle' src={FontanImg} alt={'woman'} />
                                </AnimationOnScroll>
                                <AnimationOnScroll animateIn='animate__rotateInDownLeft' animateOnce>
                                    <img className='big-circle' src={HAImg} alt={'man'} />
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainAbout;
