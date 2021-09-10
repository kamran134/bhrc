import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import ModalInput from '../components/UI/ModalInput';
import { IAuthForm } from '../models/auth';

const RegisterForm: FunctionComponent<InjectedFormProps<IAuthForm>> = (props) => {
    const { t } = useTranslation();
    return (
        <>
            <Field placeholder={t("Email")} component={ModalInput} name={'email'} />
            <Field placeholder={t("Password")} component={ModalInput} type={'password'} name={'password'} />
            <Field placeholder={t("Repeat password")} component={ModalInput} type='password' name={'passwordRepeat'} />
        </>
    )
}

export default reduxForm<IAuthForm, any>({
    form: 'RegisterForm'
})(RegisterForm);