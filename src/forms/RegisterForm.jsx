import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from '../redux/actions/auth-actions';

let RegisterForm = props => {
    const { t } = useTranslation();
    const { auth } = useSelector(state => ({
        auth: state.auth
    }));
    const dispatch = useDispatch();
    const [fields, setFields] = useState({email: '', password: '', passwordRepeat: ''});

    const changeFieldHandler = e => {
        setFields({...fields, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        if (fields.password !== fields.passwordRepeat) {
            console.error('Passwords did not match');
        } else {
            console.log(fields);
            dispatch(signUp(fields.email, fields.password));
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <Field placeholder={t("Email")} component='input' name='email' onChange={changeFieldHandler} />
            <Field placeholder={t("Password")} component='input' type='password' name='password' onChange={changeFieldHandler} />
            <Field placeholder={t("Repeat password")} component='input' type='password' name='passwordRepeat' onChange={changeFieldHandler} />
            <div className='modal-content__footer'>
                <button type='submit' className='bhrc-btn orange-btn'><ImArrowRight2/></button>
            </div>
        </form>
    )
}

RegisterForm = reduxForm({
    form: 'Register'
})(RegisterForm);

export default RegisterForm;