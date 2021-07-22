import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//import { ReactComponent as PaintBrushes } from '../../../assets/images/paint_brushes.svg';
import { ReactComponent as BHRCfigure } from '../../../assets/images/new-figure.svg';
import { ReactComponent as UrbanicaButton } from '../../../assets/images/urbanica-button.svg';
import { ImArrowRight2 } from 'react-icons/im';
import { useSelector } from 'react-redux';
//import { activeSearch } from '../../../redux/actions/settings';

const Cover = ({data, searchActive}) => {
    const { t } = useTranslation();
    const { lang } = useSelector(state => ({
        lang: state.settings.language
    }));

    return (
        <div className='cover'>
            <div className='opacity'/>
            <div className='container'>
                <div className='container-inner flex-row flex-center'>
                    <div className='cover__search'>
                        <input type='text' className={searchActive ? 'active' : ''} placeholder={t('Search')} />
                    </div>
                    <div className='cover__slogan'>
                        <BHRCfigure />
                        <div className='slogan'>
                            <p>{data && data.title[lang]}</p>
                        </div>
                    </div>
                    <div className='cover__urbanica'>
                        <Link to='/urbanica'><UrbanicaButton /></Link>
                    </div>
                    {/* <div className="cover__donate">
                        <button className='bhrc-btn orange-btn'>{t("Support us")} <ImArrowRight2/></button>
                    </div> */}
                    {/* <div className='cover__follow'>
                        <span>{t('Follow us')}</span>
                        <span className='icon'><Twitter/></span>
                        <span className='icon'><Facebook/></span>
                        <span className='icon'><Instagram/></span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Cover;
