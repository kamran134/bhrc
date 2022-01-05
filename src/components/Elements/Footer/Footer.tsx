import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReactComponent as FooterLogoAz } from '../../../assets/images/BHRC_logo_horizontal_az.svg';
import { ReactComponent as FooterLogoRu } from '../../../assets/images/BHRC_logo_horizontal_ru.svg';
import { ReactComponent as FooterLogoEn } from '../../../assets/images/BHRC_logo_horizontal_en.svg';
import { MdLocationOn, MdCall, MdEmail } from 'react-icons/md';
import { RootState } from '../../../redux/reducers';
import { getStatics } from '../../../redux/actions';
import { Modal, Table } from 'react-bootstrap';
import 'react-bootstrap';
import './footer.scss'
import { TFunction } from 'i18next';

const Footer: FunctionComponent<{}> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [showDonation, setShowDonation] = useState<boolean>(false);

    const { lang, staticPages } = useSelector((state: RootState) => ({
        lang: state.settings.language,
        staticPages: state.homepage.staticPages
    }));

    useEffect(() => {
        dispatch(getStatics(10, 0));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            <span className='info-item' onClick={() => setShowDonation(!showDonation)}>{t("Donate now")}</span>
                            {/* <span className='info-item'>Careers</span> */}
                            <span className='info-item'>{t("Be volunteer")}</span>
                            <span className='info-item'>{t("Vacancies")}</span>
                        </div>
                        <div className='footer-col'>
                            <h2>{t("Reporting")}</h2>
                            {staticPages && staticPages.slice(0).reverse().map(staticPage => (
                                <Link to={`/${staticPage.path.az}`} key={staticPage._id}><span className='info-item'>{staticPage.name[lang]}</span></Link>
                            ))}
                            <Link to={`/statements`} key={'0'}><span className='info-item'>{t("Reports")}</span></Link>
                            <Link to={`/organization-documents`} key={'1'}><span className='info-item'>{t("Organization Documents")}</span></Link>
                        </div>
                    </div>
                    <div className='footer__copyright'>
                        <div className='footer__logo'>
                            <MultilangLogo language={lang} />
                        </div>
                        <div className='text'>2021 BHRC. {t("All Rights Reserved")}</div>
                    </div>
                </div>
            </div>
            <DonationModal showDonation={showDonation} setShowDonation={setShowDonation} t={t} />
        </div>
    );
}

interface DonationProps {
    showDonation: boolean;
    setShowDonation: (show: boolean) => void;
    t: TFunction;
}

const DonationModal: FunctionComponent<DonationProps> = (props) => {
    const { t, showDonation, setShowDonation } = props;
    return (
        <Modal show={showDonation} onHide={() => setShowDonation(false)} className='footer-modal'>
            <Modal.Header>
                <h1 className='main-blue-text'>{t("Donate now")}</h1>
                <p><h3 className='red-text bold-italic-text candara'>{t("ATTENTION! Only citizens of the Republic of Azerbaijan can donate!")}</h3></p>
            </Modal.Header>
            <Modal.Body>
                <Table responsive striped bordered hover>
                    <tr>
                        <td className='thead'>{t("Beneficiary Name")}</td>
                        <td>BAKI INSAN HUQUQLARI KLUBU ICTIMAI BIRLIYI</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Beneficiary Account")}</td>
                        <td>AZ14IBAZ40090019444621454202</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Beneficiary Bank")}</td>
                        <td>Azərbaycan Beynəlxalq Bankı Binəqədi filialı</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("SWIFT Code")}</td>
                        <td>IBAZAZ2X</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Correspondent Account")}</td>
                        <td>AZ03NABZ01350100000000002944</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Bank Code")}</td>
                        <td>805584</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Bank Tax ID")}</td>
                        <td>9900001881</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Bank address")}</td>
                        <td>AZ10005</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Bank telephone numbers")}</td>
                        <td>+994 12 562 99 41</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("FAX")}</td>
                        <td>+994 12 562 99 41</td>
                    </tr>
                    <tr>
                        <td className='thead'>{t("Beneficiary Tax ID")}</td>
                        <td>1306986731</td>
                    </tr>
                </Table>
            </Modal.Body>
        </Modal>
    )
}

const MultilangLogo: FunctionComponent<{language: string}> = ({language}) => {
    if (language === 'az') return <FooterLogoAz className='footer__logo' />
    else if (language === 'ru') return <FooterLogoRu className='footer__logo' />
    return <FooterLogoEn className='footer__logo' />
}

export default Footer;