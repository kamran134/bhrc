import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import './header.scss';
import Languages from './Languages';
import { ReactComponent as LogoAz } from '../../../images/BHRC_logo_horizontal_az.svg';
import { ReactComponent as LogoRu } from '../../../images/BHRC_logo_horizontal_ru.svg';
import { ReactComponent as LogoEn } from '../../../images/BHRC_logo_horizontal_en.svg';

const Header = (props) => {
    const { t } = useTranslation();
    const renderLogo = lang => {
        if (lang === 'az') return <LogoAz />
        else if (lang === 'ru') return <LogoRu />
        else if (lang === 'en') return <LogoEn />
    }
    return (
        <div className='header'>
            <Languages />
            <div className='container'>
                <div className='container-inner flex-row space-between'>
                    <div className='header__logo'>
                        {renderLogo(props.lang)}
                    </div>
                    <div>
                        Some other block
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.settings.language
})

export default connect(mapStateToProps)(Header);