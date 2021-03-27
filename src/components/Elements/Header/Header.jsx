import React from 'react';
import { connect } from 'react-redux';
import Menu from './Menu';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__navbar relative'>
                <Menu />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.settings.language,
    searchActive: state.settings.searchActive
})

export default connect(mapStateToProps)(Header);