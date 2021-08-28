import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../../redux/actions/settings';
import { ReactComponent as FlagAz } from '../../../assets/images/flag-az.svg';
import { ReactComponent as FlagRu } from '../../../assets/images/flag-ru.svg';
import { ReactComponent as FlagEn } from '../../../assets/images/flag-en.svg';

const Languages = (props) => {
    const { lang } = props;
    const langSelectHandle = lang => {
        props.setLanguage(lang);
    }
    return (
        <div className='languages'>
            <div className={lang === 'az' ? 'lang checked': 'lang'}>
                {/* <input name='lang' id='az' value='az' type='radio' checked={lang === 'az'} onChange={langSelectHandle} />
                <label htmlFor='az'>Az</label> */}
                <FlagAz onClick={() => langSelectHandle('az')} />
            </div>
            <div className={lang === 'ru' ? 'lang checked': 'lang'}>
                <FlagRu onClick={() => langSelectHandle('ru')} />
            </div>
            <div className={lang === 'en' ? 'lang checked': 'lang'}>
                <FlagEn onClick={() => langSelectHandle('en')} />
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