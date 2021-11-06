import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import ModalInput from '../components/UI/ModalInput';
import { IAuthForm } from '../models';

const LoginForm: FunctionComponent<InjectedFormProps<IAuthForm>> = (props) => {
    const { t } = useTranslation();
    return (
        <>
            <Field placeholder={t("Username of email")} component={ModalInput} name={'identifier'} />
            <Field placeholder={t("Password")} component={ModalInput} type={'password'} name={'password'} />
        </>
    );
}

export default reduxForm<IAuthForm, any>({
    form: 'LoginForm'
})(LoginForm);