import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as FooterLogoAz } from '../../../assets/images/BHRC_logo_horizontal_az.svg';
import { ReactComponent as FooterLogoRu } from '../../../assets/images/BHRC_logo_horizontal_ru.svg';
import { ReactComponent as FooterLogoEn } from '../../../assets/images/BHRC_logo_horizontal_en.svg';
import { MdLocationOn, MdCall, MdEmail } from 'react-icons/md';
import './footer.scss'

const Footer = (props) => {
    const { t } = useTranslation();

    return (
        <div className='footer'>
            <div className='container flex-center'>
                <div className='container-inner'>
                    <div className='footer__information'>
                        <div className='footer-col'>
                            <h2>Contact info</h2>
                            <span className='contact-info'><MdLocationOn /> Location</span>
                            <span className='info-item'>
                                48 Suleyman Rustam,
                                Absheron Island,Baku
                            </span>
                            <span className='contact-info'><MdCall /> Call us</span>
                            <span className='info-item'>+994 50 3337 56 47</span>
                            <span className='contact-info'><MdEmail /> Email us</span>
                            <span className='info-item'>support@gmail.com</span>
                        </div>
                        <div className='footer-col'>
                            <h2>Our support</h2>
                            <span className='info-item'>Private Policies</span>
                            <span className='info-item'>Donate Now</span>
                            <span className='info-item'>Careers</span>
                            <span className='info-item'>Contact us</span>
                            <span className='info-item'>Partnership</span>
                        </div>
                        <div className='footer-col'>
                            <h2>Our service</h2>
                            <span className='info-item'>Donate</span>
                            <span className='info-item'>Sponsor</span>
                            <span className='info-item'>Fundraise</span>
                            <span className='info-item'>Jobs</span>
                        </div>
                    </div>
                    <div className='footer__copyright'>
                        <div className='footer__logo'>
                            <MultilangLogo language={props.lang} />
                        </div>
                        <div className='text'>2021 BHRC. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MultilangLogo = ({language}) => {
    if (language === 'az') return <FooterLogoAz className='footer__logo' />
    else if (language === 'ru') return <FooterLogoRu className='footer__logo' />
    return <FooterLogoEn className='footer__logo' />
}

const mapStateToProps = state => ({
    lang: state.settings.language
})

export default connect(mapStateToProps)(Footer);