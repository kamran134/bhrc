import React, { FunctionComponent } from 'react';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import { IAuthForm, IProjectDetails, IProjectGeneralInfo } from '../models';
import UrbanicaInput from '../components/UI/UrbanicaInput';
import UrbanicaTextarea from '../components/UI/UrbanicaTextarea';
import { ReactComponent as Humans } from '../assets/images/urbanica/humans.svg';
import { ReactComponent as BHRCLogo } from '../assets/images/urbanica/bhrc-logo-balls.svg';

const UrbanicaGeneralForm: FunctionComponent<InjectedFormProps<IAuthForm>> = (props) => {
    return (
        <div>
            <div className='container-inner urbanica-container flex-col align-center'>
                <div className='urbanica-container__title'>
                    <h1 className='main-blue-text'>Müsabiqə</h1>
                </div>
                <div className='urbanica-container__subtitle'>
                    <h1 className='lined-title main-blue-text'><span className='upper-case'>Ümumi xülasə</span></h1>
                </div>
                <div className='urbanica-container__project-name'>
                    <label className='main-blue-text candara'>Layihənin adı və həyata keçiriləcəyi yer</label>
                    <Field placeholder={"Layihənin adını və yerini daxil edin"} component={UrbanicaInput} name={'projectName'} />
                </div>
                <div className='urbanica-container__general-info'>
                    <h2 className='candara regular-font centered-text main-orange-text'>
                        Bu bölmədə aşağıdakı suallara cavab verilməklə layihənin aydın və yığcam təsviri öz
                        əksini tapmalıdır
                    </h2>
                    <p className='centered-text candara'>
                        Layihənin həll edəcəyi mövcud problem
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
                                Hədəf qrupları
                            </p>
                            <Humans />
                        </div>
                        <Field component={UrbanicaTextarea} name={'groups'} />
                    </div>                
                </div>
            </div>

            <div className='container-inner urbanica-container flex-col align-center'>
                <div className='urbanica-container__subtitle'>
                    <h1 className='lined-title main-blue-text'><span className='upper-case'>Layihənin detalları</span></h1>
                </div>
                <div className='urbanica-container__general-info'>
                    <h2 className='candara regular-font centered-text main-orange-text'>
                        Bu bölmədə aşağıdakı suallara cavab verilməklə layihənin detalları öz əksini tapmalıdır
                    </h2>
                    <p className='centered-text candara'>
                        Layihənin məqsədi
                    </p>
                    <Field component={UrbanicaTextarea} name={'goal'} />
                    <p className='centered-text candara'>
                        Layihə çərçivəsində həyata keçiriləcək fəaliyyət(lər)
                    </p>
                    <Field component={UrbanicaTextarea} name={'suggestions'} />
                    <p className='centered-text candara'>
                        Gözlənilən nəticə
                    </p>
                    <Field component={UrbanicaTextarea} name={'expectedResult'} />                
                </div>
                <BHRCLogo className='urbanica-container__bhrc-logo' />
            </div>
        </div>
    );
}

const validate = (values: IProjectGeneralInfo & IProjectDetails): FormErrors<IProjectGeneralInfo & IProjectDetails> => {
    const errors: FormErrors<IProjectGeneralInfo & IProjectDetails> = {};
    if (!values.projectName || values.projectName.trim() === '') {
        errors.projectName = 'Layihənin adı boş ola bilməz!';
    }
    if (!values.howSolve || values.howSolve.trim() == '') {
        errors.howSolve = 'Bu sahə boş ola bilməz!';
    }
    if (!values.neccessary || values.neccessary.trim() == '') {
        errors.neccessary = 'Bu sahə də boş ola bilməz!';
    }
    if (!values.groups || values.groups.trim() == '' ) {
        errors.groups = 'Bu sahə də boş ola bilməz!';
    }
    if (!values.goal || values.goal.trim()) {
        errors.goal = 'Bu sahə də boş ola bilməz!';
    }
    if (!values.suggestions || values.suggestions.trim()) {
        errors.suggestions = 'Bu sahə də boş ola bilməz!';
    }
    if (!values.expectedResult || values.expectedResult.trim()) {
        errors.expectedResult = 'Bu sahə də boş ola bilməz!';
    }
    return errors;
}

export default reduxForm<IProjectGeneralInfo & IProjectDetails, any>({
    form: 'UrbanicaGeneralForm',
    validate,
    enableReinitialize: true
})(UrbanicaGeneralForm);