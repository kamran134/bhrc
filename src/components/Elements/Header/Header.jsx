import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import { useTranslation } from 'react-i18next';
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
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.settings.language,
    searchActive: state.settings.searchActive
});

export default connect(mapStateToProps)(Header);