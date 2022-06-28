import React, { FunctionComponent } from 'react';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import { IProjectDetails, IProjectGeneralInfo } from '../models';
import UrbanicaInput from '../components/UI/UrbanicaInput';
import UrbanicaTextarea from '../components/UI/UrbanicaTextarea';
import { ReactComponent as Humans } from '../assets/images/urbanica/humans.svg';
import { ReactComponent as BHRCLogo } from '../assets/images/urbanica/bhrc-logo-balls.svg';
import { ReactComponent as BHRCNewLogo } from '../assets/images/BHRC_logo_3.svg';

const UrbanicaGeneralForm: FunctionComponent<InjectedFormProps<IProjectGeneralInfo & IProjectDetails>> = () => {
    return (
        <div>
            <div className='container-inner urbanica-container flex-col align-center'>
                <div className='urbanica-container__title'>
                    <h1 className='main-blue-text'>Competition</h1>
                </div>
                <div className='urbanica-container__subtitle'>
                    <h1 className='lined-title main-blue-text'><span className='upper-case'>General summary</span></h1>
                </div>
                <div className='urbanica-container__project-name'>
                    <label className='main-blue-text'>Name of the project and place of implementation</label>
                    <Field placeholder={"Enter the name and location of the project"} component={UrbanicaInput} name={'projectName'} />
                </div>
                <div className='urbanica-container__general-info'>
                    <h2 className='regular-font centered-text main-orange-text'>
                        This section should provide a clear and concise description of the project by answering the following
                        questions
                    </h2>
                    <p className='centered-text'>
                        The existing problem that the project will solve
                    </p>
                    <Field component={UrbanicaTextarea} name={'neccessary'} />
                    <p className='centered-text'>
                        How will the project solve these problems? (Brief presentation of planned action steps - what product(s)
                        will be developed?)
                    </p>
                    <Field component={UrbanicaTextarea} name={'howSolve'} />
                    <div className='flex-row'>
                        <div>
                            <p>Target groups</p>
                            <Humans />
                        </div>
                        <Field component={UrbanicaTextarea} name={'groups'} />
                    </div>                
                </div>
            </div>

            <div className='container-inner urbanica-container flex-col align-center'>
                <div className='urbanica-container__subtitle'>
                    <h1 className='lined-title main-blue-text'><span className='upper-case'>Details of the project</span></h1>
                </div>
                <div className='urbanica-container__general-info'>
                    <h2 className='regular-font centered-text main-orange-text'>
                        This section should reflect the details of the project by answering the following questions
                    </h2>
                    <p className='centered-text'>
                        The purpose of the project
                    </p>
                    <Field component={UrbanicaTextarea} name={'goal'} />
                    <p className='centered-text'>
                        Project activities
                    </p>
                    <Field component={UrbanicaTextarea} name={'suggestions'} />
                    <p className='centered-text'>
                        Expected result
                    </p>
                    <Field component={UrbanicaTextarea} name={'expectedResult'} />                
                </div>
                <div className='urbanica-container__bhrc-logo'>
                    <BHRCNewLogo />
                    <div className='urbanica-container__purple-circle'></div>
                </div>
            </div>
        </div>
    );
}

const validate = (values: IProjectGeneralInfo & IProjectDetails): FormErrors<IProjectGeneralInfo & IProjectDetails> => {
    const errors: FormErrors<IProjectGeneralInfo & IProjectDetails> = {};
    if (!values.projectName || values.projectName.trim() === '') {
        errors.projectName = 'The name of the project can not be empty!';
    }
    if (!values.howSolve || values.howSolve.trim() == '') {
        errors.howSolve = 'This field cannot be empty!';
    }
    if (!values.neccessary || values.neccessary.trim() == '') {
        errors.neccessary = 'This field also cannot be empty!';
    }
    if (!values.groups || values.groups.trim() == '' ) {
        errors.groups = 'This field also cannot be empty!';
    }
    if (!values.goal || values.goal.trim() == '') {
        errors.goal = 'This field also cannot be empty!';
    }
    if (!values.suggestions || values.suggestions.trim() == '') {
        errors.suggestions = 'This field also cannot be empty!';
    }
    if (!values.expectedResult || values.expectedResult.trim() == '') {
        errors.expectedResult = 'This field also cannot be empty!';
    }
    return errors;
}

export default reduxForm<IProjectGeneralInfo & IProjectDetails, any>({
    form: 'UrbanicaGeneralForm',
    validate,
    enableReinitialize: true
})(UrbanicaGeneralForm);