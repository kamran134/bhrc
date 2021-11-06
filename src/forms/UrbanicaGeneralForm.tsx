import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { IAuthForm } from '../models';
import UrbanicaInput from '../components/UI/UrbanicaInput';
import UrbanicaTextarea from '../components/UI/UrbanicaTextarea';
import { ReactComponent as Humans } from '../assets/images/urbanica/humans.svg';
import { ReactComponent as BHRCLogo } from '../assets/images/urbanica/bhrc-logo-balls.svg';

const UrbanicaGeneralForm: FunctionComponent<InjectedFormProps<IAuthForm>> = (props) => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='container-inner urbanica-container flex-col align-center'>
                <div className='urbanica-container__title'>
                    <h1 className='main-blue-text'>{t("Müsabiqə")}</h1>
                </div>
                <div className='urbanica-container__subtitle'>
                    <h1 className='lined-title main-blue-text'><span className='upper-case'>{t("Ümumi xülasə")}</span></h1>
                </div>
                <div className='urbanica-container__project-name'>
                    <label className='main-blue-text candara'>{'Layihənin adı'}</label>
                    <Field placeholder={t("Layihənin adını daxil edin")} component={UrbanicaInput} name={'projectName'} />
                </div>
                <div className='urbanica-container__general-info'>
                    <h2 className='candara regular-font centered-text main-orange-text'>
                        Bu bölmədə aşağıdakı suallara cavab verilməklə layihənin aydın və yığcam təsviri öz
                        əksini tapmalıdır
                    </h2>
                    <p className='centered-text candara'>
                        Niyə bu təşəbüs zəruridir? (Kontekstin qısa təsviri/mövcud problemlər)
                    </p>
                    <Field component={UrbanicaTextarea} name={'neccessary'} />
                    <p className='centered-text candara'>
                        Layihə bu problemləri necə həll edəcək? (Planlaşdırılan fəaliyyət addımlarının qısa
                        təqdimatı – hansı məhsul(lar) hazırlanacaq?)
                    </p>
                    <Field component={UrbanicaTextarea} name={'howSolve'} />
                    <div className='flex-row'>
                        <div>
                            <p className='candara'>
                                Layihədən hansı qrup(lar)un bəhrələnəcəyi gözlənilir? (hədəf qrupları)
                            </p>
                            <Humans />
                        </div>
                        <Field component={UrbanicaTextarea} name={'groups'} />
                    </div>                
                </div>
            </div>

            <div className='container-inner urbanica-container flex-col align-center'>
                <div className='urbanica-container__subtitle'>
                    <h1 className='lined-title main-blue-text'><span className='upper-case'>{t("Layihənin detalları")}</span></h1>
                </div>
                <div className='urbanica-container__general-info'>
                    <h2 className='candara regular-font centered-text main-orange-text'>
                        Bu bölmədə aşağıdakı suallara cavab verilməklə layihənin detalları öz əksini tapmalıdır
                    </h2>
                    <p className='centered-text candara'>
                        Layihənin əsas məqsədi nədir? Siz nəyi dəyişməyi hədəfləyirsiz? Məqsədl(lər) spesifik,
                        konkret, praktiki və ölçülə bilən olmalıdır.
                    </p>
                    <Field component={UrbanicaTextarea} name={'goal'} />
                    <p className='centered-text candara'>
                        Layihə hansı fəaliyyətləri təklif edir? Hədəf qrupları bu fəaliyyət(lər)dən necə bəhrələnəcək?
                    </p>
                    <Field component={UrbanicaTextarea} name={'suggestions'} />
                    <p className='centered-text candara'>
                        Layihənin gözlənilən nəticələri hansılardır? Layihənin məqsədinə nail olmaq üçün hansı
                        dəyişikliyin baş verməsi planlaşdırılır?
                    </p>
                    <Field component={UrbanicaTextarea} name={'expectedResult'} />                
                </div>
                <BHRCLogo className='urbanica-container__bhrc-logo' />
            </div>
        </div>
    );
}

export default reduxForm<IAuthForm, any>({
    form: 'UrbanicaGeneralForm'
})(UrbanicaGeneralForm);