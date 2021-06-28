import React from 'react';
import PaintBadge from '../../../utils/paint-badge';
import ManImg from '../../../assets/images/man.jpg';
import WomanImg from '../../../assets/images/woman.jpg';
import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
// import history from '../../../history';

const MainAbout = () => {
    const { t } = useTranslation();
    const history = useHistory();
    return (
        <div className='main-about'>
            <div className='container'>
                <div className='container-inner'>
                    <PaintBadge title={'About'} />
                    <div className='flex-row space-between'>
                        <div className='main-about__left'>
                            <h2 className='main-blue-text'>{t("Who we are?")}</h2>
                            <h3 className='main-orange-text'>{t("about_subtitle")}</h3>
                            <div className='block-text'>{t("about_short_info")}</div>
                            <div className='main-about__footer'>
                                <button className='bhrc-btn orange-btn' onClick={() => history.push('/about')}>
                                    {t("More info")} <ImArrowRight2/>
                                </button>
                                <button className='bhrc-btn blue-btn'>{t("More about Urbanica")} <ImArrowRight2/></button>
                            </div>
                        </div>
                        <div className='main-about__right'>
                            <div className='about-circle-images'>
                                <img className='small-circle' src={WomanImg} alt={'woman'} />
                                <img className='big-circle' src={ManImg} alt={'man'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAbout;
