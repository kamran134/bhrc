import React, { FunctionComponent } from 'react';
import { WrappedFieldProps } from 'redux-form';
import './ui.scss';

interface UrbanicaInputProps extends WrappedFieldProps {
    name: string;
    placeholder?: string;
    type?: string;
}

const UrbanicaInput: FunctionComponent<UrbanicaInputProps> = (props) => {
    const {
        placeholder,
        type,
        input: { onChange },
        //meta: { touched, valid, error },
        name,
    } = props;
    return (
        <input className='urbanica-input'
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            name={name}
        />
    );
}

export default UrbanicaInput;