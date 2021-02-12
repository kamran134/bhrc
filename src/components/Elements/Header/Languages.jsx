import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../../redux/actions/language';

const Languages = (props) => {
    const langSelectHandle = e => {
        const { value } = e.target;
        // console.log([name], ': ', value);
        props.setLanguage(value);
    }
    console.log('language', props.lang);
    return (
        <div className='languages'>
            <div className='lang'>
                <input name='lang' value='az' type='radio' onChange={langSelectHandle} />
                <label>Az</label>
            </div>
            <div className='lang'>
                <input name='lang' value='ru' type='radio' onChange={langSelectHandle} />
                <label>Ru</label>
            </div>
            <div className='lang'>
                <input name='lang' value='en' type='radio' onChange={langSelectHandle} />
                <label>En</label>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.language
});

const mapDispatchToProps = {
    setLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Languages);