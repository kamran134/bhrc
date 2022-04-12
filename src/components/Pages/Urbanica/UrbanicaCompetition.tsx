import React, { FunctionComponent, useState, useEffect } from 'react';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import UrbanicaGeneralForm from '../../../forms/UrbanicaGeneralForm';
import { RootState } from '../../../redux/reducers';
import { submit } from "redux-form";
import { useSelector, useDispatch } from 'react-redux';
import { IBudget, IProject, IProjectBudjet } from '../../../models';
import { getCompetition, sendProject, getProfile } from '../../../redux/actions';
import UrbanicaBudgetForm from '../../../forms/UrbanicaBudgetForm';
import { BsCheckCircle } from 'react-icons/bs';
import { Element, scroller, animateScroll as scroll } from 'react-scroll';
import './urbanica.scss';

const UrbanicaCompetition: FunctionComponent = () => {
    const [project, setProject] = useState<IProject>({});
    const [stage, setStage] = useState<number>(0);

    const { competition, auth, response } = useSelector((state: RootState) => ({
        competition: state.urbanica.competition,
        auth: state.auth,
        response: state.urbanica.response
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCompetition());
        dispatch(getProfile(auth?.token || ''));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const submitHandler = (data: any) => {
        let pro: IProject = {
            userId: auth?.user?._id,
            contestId: competition?._id,
            general: {
                projectName: data.projectName,
                neccessary: data.neccessary,
                howSolve: data.howSolve,
                groups: data.groups
            },
            details: {
                goal: data.goal,
                suggestions: data.suggestions,
                expectedResult: data.expectedResult
            }
        }
        setProject(pro);
        setStage(1);
    }

    const createArray = (numb: number, data: any) => {
        let i = 0;
        let arr: IBudget[] = [];
        while (data[`${numb}_type_${i}`]) {
            arr.push({
                name: data[`${numb}_type_${i}`],
                period: {
                    quantity: data[`${numb}_quantity_${i}`],
                    unit: data[`${numb}_unit_${i}`]?.value
                },
                price: data[`${numb}_price_${i}`]
            });
            i++;
        }
        return arr;
    }

    const submitBudget = (data: any) => {
        let participantsArr: IBudget[] = createArray(1, data);;
        let activitiesArr: IBudget[] = createArray(2, data);
        let gadjetsArr: IBudget[] = createArray(3, data);
        let othersArr: IBudget[] = createArray(4, data);

        let bud: IProjectBudjet = {
            period: {
                quantity: data.projectPeriod,
                unit: data.projectPeriodSelect.value,
            },
            participants: participantsArr,
            activities: activitiesArr,
            devices: gadjetsArr,
            others: othersArr            
        }

        dispatch(sendProject({...project, budget: bud}));
    }

    const nextButtonClickHandler = () => {
        scroll.scrollTo(450, {
            duration: 500,
            delay: 100,
            smooth: true,
            block: "center",
            isDynamic: true
        });
        dispatch(submit("UrbanicaGeneralForm"));
    }

    return (
        <Element name='competition'>
        <div className='urbanica-competition'>
            {response ? <div className='container success'>
                <h1 className='main-blue-text'>
                    <span className='success-icon'><BsCheckCircle /></span>
                    Layihə uğurla göndərildi!
                </h1>
                <a href={`/`}>Ana səhifə</a>
                <a href={`/urbanica`}>Urbanica</a>
            </div> : stage === 0 ? <div className='container relative'>
                <UrbanicaGeneralForm onSubmit={submitHandler} />
                <button className='competition-btn' onClick={nextButtonClickHandler}>
                    <ImArrowRight2/>
                </button>
            </div> : <div className='container'>
                <UrbanicaBudgetForm onSubmit={submitBudget} />
                <div className='urbanica-competition__footer'>
                    <button className='urbanica-btn big-blue' onClick={() => setStage(0)}>
                        <ImArrowLeft2/> Geri
                    </button>
                    <button className='urbanica-btn sign-up' onClick={() => dispatch(submit("UrbanicaBudgetForm"))}>
                        Göndər <ImArrowRight2/>
                    </button>
                </div>
            </div>}
        </div>
        </Element>
    );
}

export default UrbanicaCompetition;
