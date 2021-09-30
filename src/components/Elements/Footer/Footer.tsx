import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as FooterLogoAz } from '../../../assets/images/BHRC_logo_horizontal_az.svg';
import { ReactComponent as FooterLogoRu } from '../../../assets/images/BHRC_logo_horizontal_ru.svg';
import { ReactComponent as FooterLogoEn } from '../../../assets/images/BHRC_logo_horizontal_en.svg';
import { MdLocationOn, MdCall, MdEmail } from 'react-icons/md';
import './footer.scss'
import { RootState } from '../../../redux/reducers/rootReducer';

interface FooterProps {
    lang: string
}

const Footer: FunctionComponent<FooterProps> = props => {
    const { t } = useTranslation();

    return (
        <div className='footer'>
            <div className='container flex-center'>
                <div className='container-inner'>
                    <div className='footer__information'>
                        <div className='footer-col'>
                            <h2>{t("Contact info")}</h2>
                            <span className='contact-info'><MdLocationOn />{t("Location")}</span>
                            <span className='info-item'>{t("address")}</span>
                            <span className='contact-info'><MdCall />{t("WhatsApp")}</span>
                            <span className='info-item'>+994 51 706 74 47</span>
                            <span className='contact-info'><MdEmail />{t("Email us")}</span>
                            <span className='info-item'>humanrightsclub.az@gmail.com</span>
                        </div>
                        <div className='footer-col'>
                            <h2>{t("Support us")}</h2>
                            <span className='info-item'>{t("Donate now")}</span>
                            {/* <span className='info-item'>Careers</span> */}
                            <span className='info-item'>{t("Be volunteer")}</span>
                            <span className='info-item'>{t("Vacancies")}</span>
                        </div>
                        <div className='footer-col'>
                            <h2>{t("Reporting")}</h2>
                            <Link to='/about'><span className='info-item'>{t("Who are we?")}</span></Link>
                            <span className='info-item'>{t("Financial reports")}</span>
                            <span className='info-item'>{t("Privacy policy")}</span>
                        </div>
                    </div>
                    <div className='footer__copyright'>
                        <div className='footer__logo'>
                            <MultilangLogo language={props.lang} />
                        </div>
                        <div className='text'>2021 BHRC. {t("All Rights Reserved")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MultilangLogo: FunctionComponent<{language: string}> = ({language}) => {
    if (language === 'az') return <FooterLogoAz className='footer__logo' />
    else if (language === 'ru') return <FooterLogoRu className='footer__logo' />
    return <FooterLogoEn className='footer__logo' />
}

const mapStateToProps = (state: RootState) => ({
    lang: state.settings.language
})

export default connect(mapStateToProps)(Footer);