import React, { FunctionComponent, useState, useEffect } from 'react';
import { ImArrowRight2 } from 'react-icons/im';
import UrbanicaGeneralForm from '../../../forms/UrbanicaGeneralForm';
import { RootState } from '../../../redux/reducers/rootReducer';
import { submit, FormAction } from "redux-form";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IBudget, IContest, IProject, IProjectBudjet } from '../../../models/urbanica';
import { getCompetition, sendProject } from '../../../redux/actions/urbanica-actions';
import { getProfile } from '../../../redux/actions/auth-actions';
import { IAuthenticate } from '../../../redux/states/auth-state';
import UrbanicaBudgetForm from '../../../forms/UrbanicaBudgetForm';
import { BsCheckCircle } from 'react-icons/bs';
import './urbanica.scss';

interface CompetitionProps {
    submit: (form: string) => FormAction;
    lang: string;
    competition?: IContest;
    response: string;
    auth?: IAuthenticate;
    getCompetition: () => void;
    getProfile: (token: string) => void;
    sendProject: (project: IProject) => void;
}

const UrbanicaCompetition: FunctionComponent<CompetitionProps> = (props: CompetitionProps) => {
    const { submit, competition, auth, getCompetition, sendProject, getProfile, response } = props;
    const [project, setProject] = useState<IProject>({});
    const [stage, setStage] = useState<number>(0);

    useEffect(() => {
        getCompetition();
        getProfile(auth?.token || '');
    }, [])

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

        setProject({...project, budget: bud});
        sendProject(project);
    }

    return (
        <div className='urbanica-competition'>
            {response ? <div className='container success'>
                <h1 className='main-blue-text'>
                    <span className='success-icon'><BsCheckCircle /></span>
                    Layihə uğurla göndərildi!
                </h1>
                <Link to={`/`}>Ana səhifə</Link>
                <Link to={`/urbanica`}>Urbanica</Link>
            </div> : stage === 0 ? <div className='container'>
                <UrbanicaGeneralForm onSubmit={submitHandler} />
                <div className='urbanica-competition__footer'>
                    <button className='urbanica-btn sign-up' onClick={() => submit("UrbanicaGeneralForm")}>
                        İrəli <ImArrowRight2/>
                    </button>
                </div>
            </div> : <div className='container'>
                <UrbanicaBudgetForm onSubmit={submitBudget} />
                <div className='urbanica-competition__footer'>
                    <button className='urbanica-btn sign-up' onClick={() => submit("UrbanicaBudgetForm")}>
                        Göndər <ImArrowRight2/>
                    </button>
                </div>
            </div>}
        </div>
        
    )
}

const mapStateToProps = (state: RootState) => ({
    competition: state.urbanica.competition,
    auth: state.auth,
    response: state.urbanica.response
});

const mapDispatchToProps = {
    submit,
    getCompetition,
    getProfile,
    sendProject
}

export default connect(mapStateToProps, mapDispatchToProps)(UrbanicaCompetition);
