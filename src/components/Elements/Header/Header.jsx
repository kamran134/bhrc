import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';
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
            <div className={'header__follow'}>
                <span>{t('Follow us')}</span>
                <span className='icon'><Twitter/></span>
                <a href='https://www.facebook.com/BakuHumanRightsClub' target={'__blanck'}>
                    <span className='icon'><Facebook/></span>
                </a>
                <span className='icon'><Instagram/></span>
            </div>
            <div className={showWhite ? 'white-header header__navbar relative' : 'header__navbar relative'}>
                <Menu showWhite={showWhite} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.settings.language,
    searchActive: state.settings.searchActive
});

export default connect(mapStateToProps)(Header);