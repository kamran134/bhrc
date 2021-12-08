import React, { FunctionComponent } from 'react';
import { WrappedFieldProps } from 'redux-form';

interface ModalTextareaProps extends WrappedFieldProps {
    name: string;
    placeholder?: string;
    type?: string;
}

const ModalTextarea: FunctionComponent<ModalTextareaProps> = (props) => {
    const {
        placeholder,
        input: { onChange },
        //meta: { touched, valid, error },
        name,
    } = props;
    return (
        <textarea className='modal-textarea'
            placeholder={placeholder}
            onChange={onChange}
            name={name}
        />
    );
}

export default ModalTextarea;