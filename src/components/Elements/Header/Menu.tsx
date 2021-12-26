import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoEn } from '../../../assets/images/BHRC_logo_horizontal_en.svg';
import { ReactComponent as BHRCNavBarIcon } from '../../../assets/images/bhrc-navbar-icon.svg';
import Navigation from './Navigation';
import { IoMdClose } from 'react-icons/io';
import Languages from './Languages';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';

interface MenuProps {
    showWhite: boolean
}

const Menu: FunctionComponent<MenuProps> = ({showWhite}) => {
    const { t } = useTranslation();
    const [mobileNavMenu, setMobileNavMenu] = useState<boolean>(false);
    const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

    const renderDesktop = () => (
        <div className={showWhite ? 'white-menu menu desktop' : 'menu desktop'}>
            <div className='menu__logo'>
                <Link to='/'><LogoEn /></Link>
            </div>
            <MenuElement url='/' label={t("Home")} />
            <MenuElement url='/about' label={t("About us")} />
            <MenuElement url='/activities' label={t("News")} />
            {/* <MenuElement url='/urbanica' label={t("Urbanica")} _className='urbanica-menu' /> */}
            <MenuElement url='/resources' label={t("Resources")} />
            <Navigation />
        </div>
    );

    const renderMobile = () => (
        <div className='menu mobile'>
            <div className='menu__logo'>
                <Link to='/'><LogoEn /></Link>
            </div>
            <div className='menu__navbar'>
                <BHRCNavBarIcon onClick={() => setMobileNavMenu(!mobileNavMenu)} />
                {renderMobileNav()}
            </div>
        </div>
    );

    const renderMobileNav = () => (        
        <div className={mobileNavMenu ? 'mobile-nav opened' : 'mobile-nav'} ref={ref}>
            <div className='mobile-nav__header'>
                <IoMdClose onClick={(e) => setMobileNavMenu(!mobileNavMenu)} />
            </div>
            <div className='mobile-nav__lang'>
                <Languages />
            </div>
            <ul>
                <li>
                    <a href='/'>{t("Home")}</a>
                </li>
                <li>
                    <a href='/about'>{t("About us")}</a>
                </li>
                <li>
                    <a href='/activities'>{t("News")}</a>
                </li>
                <li>
                    <a href='/resources'>{t("Resources")}</a>
                </li>
            </ul>
            <div className='mobile-nav__footer'>
                <LogoEn />
                <div className='mobile-nav__footer__social'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                </div>
            </div>
        </div>
    );

    const useOnClickOutside = (ref: React.MutableRefObject<HTMLDivElement>, handler: any) => {
        useEffect(
          () => {
            const listener = (event: any) => {
              if (!ref.current || ref.current.contains(event.target)) {
                return;
              }
              handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
              document.removeEventListener("mousedown", listener);
              document.removeEventListener("touchstart", listener);
            };
          },
          [ref, handler]
        );
    }

    useOnClickOutside(ref, () => setMobileNavMenu(false));

    return (
        <>
            {renderDesktop()}
            {renderMobile()}
        </>
    );
}

interface MenuElementProps {
    url: string,
    label: string,
    _className?: string
}

const MenuElement: FunctionComponent<MenuElementProps> = ({url, label, _className}) => {
    return (
        <div className={'menu__element ' + _className}>
            <Link to={url}>{label} </Link>
        </div>
    );
}

export default Menu;