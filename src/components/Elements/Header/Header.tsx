import React, { useEffect, useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';
import { RootState } from '../../../redux/reducers';
import './header.scss';
import 'react-bootstrap';

const Header: FunctionComponent = () => {
    const { t } = useTranslation();
    const [showWhite, setShowWhite] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    const handleScroll = (e: Event) => {
        if (window.scrollY > 200 && !showWhite) {
            setShowWhite(true);
        } else {
            setShowWhite(false);
        }
    }

    return (
        <div className='header'>
            <div className={'header__follow desktop'}>
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
    );
}

const mapStateToProps = (state: RootState) => ({
    lang: state.settings.language,
    searchActive: state.settings.searchActive
});

export default connect(mapStateToProps)(Header);