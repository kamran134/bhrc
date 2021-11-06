import React, { FunctionComponent, useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { IAuthForm } from '../models';
import UrbanicaInput from '../components/UI/UrbanicaInput';
import UrbanicaSelect from '../components/UI/UrbanicaSelect';

const UrbanicaBudgetForm: FunctionComponent<InjectedFormProps<IAuthForm>> = (props) => {
    const { t } = useTranslation();
    const options: {value: string, label: string}[] = [
        {value: 'day', label: 'gün'},
        {value: 'month', label: 'ay'},
        {value: 'year', label: 'il'}
    ];

    const [teams, setTeams] = useState<number>(1);
    const [activities, setActivities] = useState<number>(1);
    const [gadjets, setGadjets] = useState<number>(1);
    const [others, setOthers] = useState<number>(1);

    const renderForms = (order: number, selector: number, setSelector: (selector: number) => void, label: string) => {
        return (
            <div>
                <p className='candara'>
                    <span className='urbanica-badge centered-text'>{order}</span>
                    <span className='with-badge'>{t(label)}</span>
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
                    {renderFields(selector, order)}
                    <div className='budget-table__row'>
                        <div className='budget-table__th-1'>
                            <label className='main-blue-text candara'>{t('Cəmi')}:</label>
                        </div>
                        <div className='budget-table__th-2' />
                        <div className='budget-table__th-3' />
                        <div className='budget-table__th-4'>
                            <button className='urbanica-btn blue-btn' onClick={() => setSelector(selector+1)}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderFields = (selector: number, order: number) => {
        let budgetArray: any = [];
        for(let i = 0; i < selector; i++) {
            budgetArray.push(
                <div className='budget-table__row' key={i}>
                    <div className='budget-table__th-1'>
                        <Field component={UrbanicaInput} name={`${order}_type_${i}`} />
                    </div>
                    <div className='budget-table__th-2'>
                        <Field component={UrbanicaSelect} name={`${order}_unit_${i}`} options={options} />
                    </div>
                    <div className='budget-table__th-3'>
                        <Field component={UrbanicaInput} name={`${order}_quantity_${i}`} />
                    </div>
                    <div className='budget-table__th-4'>
                        <Field component={UrbanicaInput} name={`${order}_price_${i}`} />
                    </div>
                    <div className='budget-table__th-5'><label className='main-blue-text candara'>{t("Cəmi")}: </label></div>
                </div>
            );
        }
        return budgetArray;
    }

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
                    {renderForms(1, teams, setTeams, t("Heyət xərcləri"))}
                    {renderForms(2, activities, setActivities, t("Fəaliyyətlər"))}
                    {renderForms(3, gadjets, setGadjets, t("Avadanlıq"))}
                    {renderForms(4, others, setOthers, t("Digər xərclər"))}
                </div>
            </div>
        </div>
    );
}

export default reduxForm<IAuthForm, any>({
    form: 'UrbanicaBudgetForm'
})(UrbanicaBudgetForm);