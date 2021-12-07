import React, { FunctionComponent } from 'react';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import ModalInput from '../components/UI/ModalInput';
import { IAuthForm } from '../models';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import ModalTextarea from '../components/UI/ModalTextarea';
import { IAuth } from '../redux/states';

const RegisterForm: FunctionComponent<InjectedFormProps<IAuthForm>> = (props) => {
    const { t } = useTranslation();
    const {processStage } = useSelector((state: RootState) => ({
        processStage: state.auth.processStage
    }));

    return (
        <>
            {processStage === 0 ? <>
                <Field placeholder={t("Email")} component={ModalInput} name={'email'} />
                <Field placeholder={t("Password")} component={ModalInput} type={'password'} name={'password'} />
                <Field placeholder={t("Repeat password")} component={ModalInput} type='password' name={'passwordRepeat'} />
            </>
            : processStage === 1 && <>
                <Field placeholder={t("Full name")} component={ModalInput} autoComplete={'off'} value={''} name={'fullname'} />
                <Field placeholder={t("Biography")} component={ModalTextarea} name={'bio'} />
            </>
            }
        </>
    );
}

const validate = (values: IAuthForm): FormErrors<IAuthForm> => {
    const emailReg: RegExp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const errors: FormErrors<IAuthForm> = {};
    if (!values.email || !values.email.trim().toLowerCase().match(emailReg)) {
        errors.email = 'Bu, email deyil';
    }
    if (!values.password || values.password.trim() === '') {
        errors.password = 'Şifrə yazmamısınız!';
    }
    else if (values.password.trim().length < 6) {
        errors.password = 'Şifrə minimum 6 simvoldan ibarət olmalıdır';
    }
    if (values.password && values.passwordRepeat && (values.password.trim() !== values.passwordRepeat.trim())) {
        errors.password = 'Şifrələr uyğun gəlmir';
        errors.passwordRepeat = 'Şifrələr uyğun gəlmir';
    }
    if (!values.fullname || values.fullname === '') {
        errors.fullname = 'Ad və soyadınızı qeyd etməyiniz mütləqdir!';
    }
    return errors;
}

export default reduxForm<IAuthForm, any>({
    form: 'RegisterForm',
    validate,
    enableReinitialize: true
})(RegisterForm);