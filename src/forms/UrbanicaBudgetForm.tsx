import React, { FunctionComponent, useState } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { IAuthForm, IProjectBudjet } from '../models';
import UrbanicaInput from '../components/UI/UrbanicaInput';
import UrbanicaSelect from '../components/UI/UrbanicaSelect';

const UrbanicaBudgetForm: FunctionComponent<InjectedFormProps<IProjectBudjet>> = () => {
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
                    <RenderForms order={1} selector={teams} setSelector={setTeams} label={"Heyət xərcləri"} key={1} />
                    <RenderForms order={2} selector={activities} setSelector={setActivities} label={"Fəaliyyətlər"} key={2} />
                    <RenderForms order={3} selector={gadjets} setSelector={setGadjets} label={"Avadanlıq"} key={3} hasCount={true} />
                    <RenderForms order={4} selector={others} setSelector={setOthers} label={"Digər xərclər"} key={4} hasCount={true} />
                </div>
            </div>
        </div>
    );
}

interface RenderFormsProps {
    order: number;
    selector: number;
    setSelector: (selector: number) => void;
    label: string;
    hasCount?: boolean;
}

const RenderForms: FunctionComponent<RenderFormsProps> = (props) => {
    const { t } = useTranslation();
    let budgetArray: any = [];

    for(let i = 0; i < props.selector; i++) {
        budgetArray.push(<BudgetTableRow order={props.order} index={i} hasCount={props.hasCount} />);
    }

    return (
        <div>
            <p className='candara'>
                <span className='urbanica-badge centered-text'>{props.order}</span>
                <span className='with-badge'>{t(props.label)}</span>
            </p>
            <div className='budget-table'>
                <div className='budget-table__row'>
                    <div className='budget-table__th-1'>
                        <label className='main-blue-text candara'>Xərclərin növü</label>
                    </div>
                    <div className='budget-table__th-2'>
                        <label className='main-blue-text candara'>Kəmiyyət</label>
                    </div>
                    <div className='budget-table__th-3'>
                        <label className='main-blue-text candara'>Vahid</label>
                    </div>
                    <div className='budget-table__th-4'>
                        <label className='main-blue-text candara'>Vahidin qiyməti</label>
                    </div>
                    {props.hasCount && <div className='budget-table__th-2'>
                        <label className='main-blue-text candara'>Ədəd</label>
                    </div>}
                </div>
                {budgetArray}
                <div className='budget-table__row'>
                    <div className='budget-table__th-1'>
                        <label className='main-blue-text candara'>Cəmi:</label>
                    </div>
                    <div className='budget-table__th-2' />
                    <div className='budget-table__th-3' />
                    <div className='budget-table__th-4'>
                        <button className='urbanica-btn blue-btn' onClick={() => props.setSelector(props.selector + 1)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface BudgetTableRowProps {
    order: number;
    index: number;
    hasCount?: boolean;
}

const BudgetTableRow: FunctionComponent<BudgetTableRowProps> = (props) => {
    const { t } = useTranslation();
    const options: {value: string, label: string}[] = [
        {value: 'day', label: 'gün'},
        {value: 'month', label: 'ay'},
        {value: 'year', label: 'il'}
    ];
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1);
    const [count, setCount] = useState<number>(1);

    const quantityChangeHandler = (e: any) => {
        setQuantity(e.target.value)
    }

    const priceChangeHandler = (e: any) => {
        setPrice(e.target.value)
    }

    const countChangeHandler = (e: any) => {
        setCount(e.target.value);
    }

    return (
        <div className='budget-table__row'>
            <div className='budget-table__th-1'>
                <Field component={UrbanicaInput} name={`${props.order}_type_${props.index}`} />
            </div>
            <div className='budget-table__th-2'>
                <Field component={UrbanicaInput} name={`${props.order}_quantity_${props.index}`} onChange={quantityChangeHandler} />
            </div>
            <div className='budget-table__th-3'>
                <Field component={UrbanicaSelect} name={`${props.order}_unit_${props.index}`} options={options} />
            </div>
            <div className='budget-table__th-4'>
                <Field component={UrbanicaInput} name={`${props.order}_price_${props.index}`} onChange={priceChangeHandler} />
            </div>
            {props.hasCount && <div className='budget-table__th-2'>
                <Field component={UrbanicaInput} name={`${props.order}_count_${props.index}`} onChange={countChangeHandler} />
            </div>}
            <div className='budget-table__th-5'><label className='main-blue-text candara'>{t("Cəmi")}: {price * quantity * count}</label></div>
        </div>
    );
}

export default reduxForm<IProjectBudjet, any>({
    form: 'UrbanicaBudgetForm'
})(UrbanicaBudgetForm);