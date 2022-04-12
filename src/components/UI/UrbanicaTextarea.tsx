import React, { FunctionComponent } from 'react';
import { WrappedFieldProps } from 'redux-form';
import './ui.scss';

interface UrbanicaTextareaProps extends WrappedFieldProps {
    name: string;
    placeholder?: string;
}

const UrbanicaTextarea: FunctionComponent<UrbanicaTextareaProps> = (props) => {
    const {
        placeholder,
        input: { onChange },
        meta: { touched, valid, error },
        name,
    } = props;
    return (
        <textarea className={touched && error ? 'urbanica-textarea error' : 'urbanica-textarea'}
            placeholder={touched && error ? error : placeholder}
            onChange={onChange}
            name={name}
        />
    );
}

export default UrbanicaTextarea;