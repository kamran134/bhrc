import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../../redux/actions/settings';

const Languages = (props) => {
    const { lang } = props;
    const langSelectHandle = e => {
        const { value } = e.target;
        props.setLanguage(value);
    }
    return (
        <div className='languages'>
            <div className='lang'>
                <input name='lang' value='az' type='radio' checked={lang === 'az'} onChange={langSelectHandle} />
                <label>Az</label>
            </div>
            <div className='lang'>
                <input name='lang' value='ru' type='radio' checked={lang === 'ru'} onChange={langSelectHandle} />
                <label>Ru</label>
            </div>
            <div className='lang'>
                <input name='lang' value='en' type='radio' checked={lang === 'en'} onChange={langSelectHandle} />
                <label>En</label>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    lang: state.settings.language
});

const mapDispatchToProps = {
    setLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(Languages);