import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import FontanImg from '../../../assets/images/bhrc_3.jpg';
import HAImg from '../../../assets/images/bhrc_7.jpg';
import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../redux/reducers/rootReducer';
import { IHomePageBlock } from '../../../models/homepage';

interface AboutProps {
    data: IHomePageBlock
}

const MainAbout: FunctionComponent<AboutProps> = ({data}) => {
    const { t } = useTranslation();
    const history = useHistory();
    const { lang } = useSelector((state: RootState) => ({
        lang: state.settings.language
    }));
    return (
        <div className='main-about'>
            <div className='container'>
                <div className='container-inner'>
                    {/* <PaintBadge title={'About'} /> */}
                    <div className='flex-row space-between'>
                        <div className='main-about__left'>
                            {data && data.title && <h2 className='main-blue-text'>{data.title[lang]}</h2>}
                            {data && data.subtitle && <h3 className='main-orange-text'>{data.subtitle[lang]}</h3>}
                            {data && data.text && <div className='block-text'>{data.text[lang]}</div>}
                            <div className='main-about__footer'>
                                <button className='bhrc-btn orange-btn' onClick={() => history.push('/about')}>
                                    {t("More info")} <ImArrowRight2/>
                                </button>
                                <button className='bhrc-btn blue-btn'>{t("Support us")} <ImArrowRight2/></button>
                            </div>
                        </div>
                        <div className='main-about__right'>
                            <div className='about-circle-images'>
                                <img className='small-circle' src={FontanImg} alt={'woman'} />
                                <img className='big-circle' src={HAImg} alt={'man'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAbout;
