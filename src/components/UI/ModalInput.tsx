import React, { FunctionComponent } from 'react';
import { WrappedFieldProps } from 'redux-form';

interface ModalInputProps extends WrappedFieldProps {
    name: string;
    placeholder?: string;
    type?: string;
}

const ModalInput: FunctionComponent<ModalInputProps> = (props) => {
    const {
        placeholder,
        type,
        input: { onChange },
        meta: { touched, valid, error },
        name,
    } = props;
    return (
        <input className='modal-input'
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            name={name}
        />
    )
}

export default ModalInput;