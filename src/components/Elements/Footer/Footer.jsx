import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as FooterLogoAz } from '../../../images/BHRC_logo_vertical_az.svg';
import { ReactComponent as FooterLogoRu } from '../../../images/BHRC_logo_vertical_ru.svg';
import { ReactComponent as FooterLogoEn } from '../../../images/BHRC_logo_vertical_en.svg';
import './footer.scss'

const Footer = (props) => {
    const { t } = useTranslation();

    const logoRender = (lang) => {
        console.log('language', lang);
        if (lang === 'az') return <FooterLogoAz className='footer__logo' />
        else if (lang === 'ru') return <FooterLogoRu className='footer__logo' />
        else if (lang === 'en') return <FooterLogoEn className='footer__logo' />
    }

    return (
        <div className='footer'>
            <div className='container flex-center'>
                <div className='container-inner flex-row space-between'>
                    <div className='footer__left'>
                        {logoRender(props.lang)}
                    </div>
                    <div className='footer__right'>
                        <p>aaa</p>
                        <p>bbb</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.settings.language
})

export default connect(mapStateToProps)(Footer);