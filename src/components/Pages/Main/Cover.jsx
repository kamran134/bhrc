import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as PaintBrushes } from '../../../assets/images/paint_brushes.svg';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';
import { ImArrowRight2 } from 'react-icons/im';
import { connect } from 'react-redux';
import { activeSearch } from '../../../redux/actions/settings';

const Cover = props => {
    const { t } = useTranslation();
    return (
        <div className='cover'>
            <div className='opacity'/>
            <div className='container'>
                <div className='container-inner flex-row flex-center'>
                    <div className='cover__search'>
                        <input type='text' className={props.searchActive ? 'active' : ''} placeholder={t('Search')} />
                    </div>
                    <div className='cover__slogan'>
                        <PaintBrushes />
                        <div className='slogan'>
                            <p>{t("We defend your rights!")}</p>
                        </div>
                    </div>
                    <div className="cover__donate">
                        <button className='bhrc-btn orange-btn'>{t("Support our project")} <ImArrowRight2/></button>
                    </div>
                    <div className='cover__follow'>
                        <span>{t('Follow us')}</span>
                        <span className='icon'><Twitter/></span>
                        <span className='icon'><Facebook/></span>
                        <span className='icon'><Instagram/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.settings.language,
    searchActive: state.settings.searchActive
});

const mapDispatchToProps = {
    activeSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Cover);
