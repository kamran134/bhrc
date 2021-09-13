import React, { FunctionComponent, useState, useEffect } from 'react';
import { ImArrowRight2 } from 'react-icons/im';
import UrbanicaGeneralForm from '../../../forms/UrbanicaGeneralForm';
import { RootState } from '../../../redux/reducers/rootReducer';
import { submit, FormAction } from "redux-form";
import './urbanica.scss';
import { connect, useDispatch } from 'react-redux';
import { IContest, IProject } from '../../../models/urbanica';
import { IUserInfo } from '../../../models/user';
import { getCompetition } from '../../../redux/actions/urbanica-actions';
import { getProfile } from '../../../redux/actions/auth-actions';
import { IAuthenticate } from '../../../redux/states/auth-state';
import UrbanicaBudgetForm from '../../../forms/UrbanicaBudgetForm';

interface CompetitionProps {
    submit: (form: string) => FormAction;
    lang: string;
    competition?: IContest;
    auth?: IAuthenticate;
    getCompetition: () => void;
    getProfile: (token: string) => void;
}

const UrbanicaCompetition: FunctionComponent<CompetitionProps> = (props: CompetitionProps) => {
    const { submit, competition, auth, getCompetition } = props;
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

    console.log('pro', project);

    return (
        <div className='urbanica-competition'>
            {stage === 0 ? <div className='container'>
                <UrbanicaGeneralForm onSubmit={submitHandler} />
                <div className='urbanica-competition__footer'>
                    <button className='urbanica-btn sign-up' onClick={() => submit("UrbanicaGeneralForm")}>
                        İrəli <ImArrowRight2/>
                    </button>
                </div>
            </div> : <div className='container'>
                <UrbanicaBudgetForm />
            </div>}
        </div>
        
    )
}

const mapStateToProps = (state: RootState) => ({
    competition: state.urbanica.competition,
    auth: state.auth
});

const mapDispatchToProps = {
    submit,
    getCompetition
}

export default connect(mapStateToProps, mapDispatchToProps)(UrbanicaCompetition);
