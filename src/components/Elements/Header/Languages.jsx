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
            <div className={lang === 'az' ? 'lang checked': 'lang'}>
                <input name='lang' id='az' value='az' type='radio' checked={lang === 'az'} onChange={langSelectHandle} />
                <label for='az'>Az</label>
            </div>
            <div className={lang === 'ru' ? 'lang checked': 'lang'}>
                <input name='lang' id='ru' value='ru' type='radio' checked={lang === 'ru'} onChange={langSelectHandle} />
                <label for='ru'>Ru</label>
            </div>
            <div className={lang === 'en' ? 'lang checked': 'lang'}>
                <input name='lang' id='en' value='en' type='radio' checked={lang === 'en'} onChange={langSelectHandle} />
                <label for='en'>En</label>
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