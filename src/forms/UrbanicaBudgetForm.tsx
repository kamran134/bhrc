import React, { FunctionComponent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { IAuthForm } from '../models/auth';
import UrbanicaInput from '../components/UI/UrbanicaInput';
import UrbanicaTextarea from '../components/UI/UrbanicaTextarea';
import { ReactComponent as Humans } from '../assets/images/urbanica/humans.svg';
import { ReactComponent as BHRCLogo } from '../assets/images/urbanica/bhrc-logo-balls.svg';
import UrbanicaSelect from '../components/UI/UrbanicaSelect';

const UrbanicaBudgetForm: FunctionComponent<InjectedFormProps<IAuthForm>> = (props) => {
    const { t } = useTranslation();
    const options: {value: string, label: string}[] = [
        {value: 'day', label: 'gün'},
        {value: 'month', label: 'ay'},
        {value: 'year', label: 'il'}
    ];
    return (
        <div>
            <div className='container-inner urbanica-container flex-col align-center'>
                <div className='urbanica-container__title'>
                    <h1 className='main-blue-text'>{t("Büdcə forması")}</h1>
                </div>
                <div className='urbanica-container__project-name'>
                    <label className='main-blue-text candara'>{'Layihənin müddəti'}</label>
                    <Field placeholder={t("Layihənin müddəti")} component={UrbanicaInput} name={'projectPeriod'} />
                    <Field placeholder={t("Layihənin müddəti")} component={UrbanicaSelect} name={'projectPeriodSelect'} options={options} />
                </div>
                <div className='urbanica-container__subtitle'>
                    <h1 className='lined-title main-blue-text'><span className='upper-case'>{t("Xərclər")}</span></h1>
                </div>
                
                <div className='urbanica-container__general-info'>
                    <div>
                        <p className='candara'>
                            <span className='urbanica-badge centered-text'>1</span>
                            <span className='with-badge'>Heyət xərcləri</span>
                        </p>
                        <div className='budget-table'>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <label className='main-blue-text candara'>{t('Xərclərin növü')}</label>
                                </div>
                                <div className='budget-table__th-2'>
                                    <label className='main-blue-text candara'>{t('Vahid')}</label>
                                </div>
                                <div className='budget-table__th-3'>
                                    <label className='main-blue-text candara'>{t('Kəmiyyət')}</label>
                                </div>
                                <div className='budget-table__th-4'>
                                    <label className='main-blue-text candara'>{t('Vahidin qiyməti')}</label>
                                </div>
                            </div>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-2'>
                                    <Field component={UrbanicaSelect} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-3'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-4'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <p className='candara'>
                            <span className='urbanica-badge centered-text'>2</span>
                            <span className='with-badge'>Fəaliyyətlər</span>
                        </p>
                        <div className='budget-table'>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <label className='main-blue-text candara'>{t('Xərclərin növü')}</label>
                                </div>
                                <div className='budget-table__th-2'>
                                    <label className='main-blue-text candara'>{t('Vahid')}</label>
                                </div>
                                <div className='budget-table__th-3'>
                                    <label className='main-blue-text candara'>{t('Kəmiyyət')}</label>
                                </div>
                                <div className='budget-table__th-4'>
                                    <label className='main-blue-text candara'>{t('Vahidin qiyməti')}</label>
                                </div>
                            </div>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-2'>
                                    <Field component={UrbanicaSelect} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-3'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-4'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='candara'>
                            <span className='urbanica-badge centered-text'>3</span>
                            <span className='with-badge'>Avadanlıq</span>
                        </p>
                        <div className='budget-table'>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <label className='main-blue-text candara'>{t('Xərclərin növü')}</label>
                                </div>
                                <div className='budget-table__th-2'>
                                    <label className='main-blue-text candara'>{t('Vahid')}</label>
                                </div>
                                <div className='budget-table__th-3'>
                                    <label className='main-blue-text candara'>{t('Kəmiyyət')}</label>
                                </div>
                                <div className='budget-table__th-4'>
                                    <label className='main-blue-text candara'>{t('Vahidin qiyməti')}</label>
                                </div>
                            </div>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-2'>
                                    <Field component={UrbanicaSelect} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-3'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-4'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='candara'>
                            <span className='urbanica-badge centered-text'>4</span>
                            <span className='with-badge'>Digər xərclər</span>
                        </p>
                        <div className='budget-table'>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <label className='main-blue-text candara'>{t('Xərclərin növü')}</label>
                                </div>
                                <div className='budget-table__th-2'>
                                    <label className='main-blue-text candara'>{t('Vahid')}</label>
                                </div>
                                <div className='budget-table__th-3'>
                                    <label className='main-blue-text candara'>{t('Kəmiyyət')}</label>
                                </div>
                                <div className='budget-table__th-4'>
                                    <label className='main-blue-text candara'>{t('Vahidin qiyməti')}</label>
                                </div>
                            </div>
                            <div className='budget-table__row'>
                                <div className='budget-table__th-1'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-2'>
                                    <Field component={UrbanicaSelect} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-3'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                                <div className='budget-table__th-4'>
                                    <Field component={UrbanicaInput} name={'neccessary'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default reduxForm<IAuthForm, any>({
    form: 'UrbanicaBudgetForm'
})(UrbanicaBudgetForm);