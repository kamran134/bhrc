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
        input: { onChange, value },
        meta: { touched, error },
        name,
    } = props;
    return (
        <div className='modal-row'>
            <input className={(touched && error) ? 'modal-input error' : 'modal-input'}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                name={name}
                value={value}
            />
            {touched && error && <span className='modal-input__error'>
                {error}
            </span>}
        </div>
    );
}

export default ModalInput;