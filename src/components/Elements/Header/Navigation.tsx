import React, { FunctionComponent } from 'react';
import Languages from './Languages';
import { AiOutlineSearch } from 'react-icons/ai';
import { activeSearch } from '../../../redux/actions/settings';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';

type NavigationProps = {
    searchActive: boolean,
    activeSearch: (searchActive: boolean) => void
}

const Navigation: FunctionComponent<NavigationProps> = ({searchActive, activeSearch}) => {
    
    const searchHandler = () => {
        activeSearch(!searchActive);
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

const mapStateToProps = (state: RootState) => ({
    searchActive: state.settings.searchActive
});

const mapDispatchToProps = {
    activeSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);