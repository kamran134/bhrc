import React, { useState } from 'react';
import Languages from './Languages';
import { AiOutlineSearch } from 'react-icons/ai';
import { activeSearch } from '../../../redux/actions/settings';
import { connect } from 'react-redux';

const Navigation = (props) => {
    
    const searchHandler = () => {
        props.activeSearch(!props.searchActive);
    }

    return (
        <div className='navigation'>
            <div className='navigation__search'>
                <span onClick={searchHandler}><AiOutlineSearch /></span>
            </div>
            <Languages />
        </div>
    )
}

const mapStateToProps = state => ({
    searchActive: state.settings.searchActive
});

const mapDispatchToProps = {
    activeSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
