import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Menu from './Menu';
import { ReactComponent as PaintBrushes } from '../../../assets/images/paint_brushes.svg';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';
import './header.scss';

const Header = (props) => {
    const { t } = useTranslation();
    const [showWhite, setShowWhite] = React.useState(false);
    
    React.useEffect(() => {
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    const handleScroll = (e) => {
        if (window.scrollY > 200 && !showWhite) {
            setShowWhite(true);
        } else {
            setShowWhite(false);
        }
    }
    
    return (
        <div className='header'>
            <div className={showWhite ? 'white-header header__navbar relative' : 'header__navbar relative'}>
                <Menu showWhite={showWhite} />
            </div>
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
                                {/* <p>{t('It\'s time to be happy again.')}</p> */}
                            </div>
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
        </div>
    )
}



const mapStateToProps = state => ({
    lang: state.settings.language,
    searchActive: state.settings.searchActive
})

export default connect(mapStateToProps)(Header);