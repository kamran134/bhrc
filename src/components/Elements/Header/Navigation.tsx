import React, { FunctionComponent } from 'react';
import Languages from './Languages';
import { AiOutlineSearch } from 'react-icons/ai';
import { activeSearch } from '../../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/reducers';

const Navigation: FunctionComponent<{}> = (props) => {
    const { searchActive } = useSelector((state: RootState) => ({
        searchActive: state.settings.searchActive
    }));

    const dispatch = useDispatch();

    const searchHandler = () => {
        dispatch(activeSearch(!searchActive));
    }

    return (
        <div className='navigation'>
            <div className='navigation__search'>
                <span onClick={searchHandler}><AiOutlineSearch /></span>
            </div>
            <Languages />
        </div>
    );
}

export default Navigation;