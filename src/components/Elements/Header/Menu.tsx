import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/images/BHRC_logo_3.svg';
import { ReactComponent as LogoOutLined } from '../../../assets/images/BHRC_logo_outlined.svg';
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
    const [path, setPath] = useState<string>('/');

    useEffect(() => {
        setPath(window.location.pathname);
    }, [window.location]);

    const renderDesktop = () => (
        <div className={showWhite ? 'white-menu menu desktop' : 'menu desktop'}>
            <div className='menu__logo'>
                <Link to='/'>{showWhite ? <LogoOutLined/> : <Logo />}</Link>
            </div>
            <MenuElement key={1} url='/' label={t("Home")} _className={path === '/' ? 'active' : ''} />
            <MenuElement key={2} url='/about' label={t("About us")} _className={path === '/about' ? 'active' : ''} />
            <MenuElement key={3} url='/activities' label={t("News")} _className={path === '/activities' ? 'active' : ''} />
            <MenuElement key={4} url='/resources' label={t("Resources")} _className={path === '/resources' ? 'active last' : 'last'} />
            <Navigation />
        </div>
    );

    const renderMobile = () => (
        <div className='menu mobile'>
            <div className='menu__logo'>
                <Link to='/'><Logo /></Link>
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
                <Logo />
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
            <a href={url}>{label} </a>
        </div>
    );
}

export default Menu;