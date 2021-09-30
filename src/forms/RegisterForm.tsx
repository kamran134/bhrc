import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import ModalInput from '../components/UI/ModalInput';
import { IAuthForm } from '../models/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/rootReducer';
import ModalTextarea from '../components/UI/ModalTextarea';

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
                <Field placeholder={t("Full name")} component={ModalInput} name={'fullname'} />
                <Field placeholder={t("Biography")} component={ModalTextarea} name={'bio'} />
            </>
            }
        </>
    )
}

export default reduxForm<IAuthForm, any>({
    form: 'RegisterForm'
})(RegisterForm);