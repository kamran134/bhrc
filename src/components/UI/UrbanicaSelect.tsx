import React, { FunctionComponent } from 'react';
import { WrappedFieldProps } from 'redux-form';
import Select from 'react-select';
import './ui.scss';

interface UrbanicaSelectProps extends WrappedFieldProps {
    name: string;
    placeholder?: string;
    type?: string;
    options?: any;
}

const UrbanicaSelect: FunctionComponent<UrbanicaSelectProps> = (props) => {
    const {
        placeholder,
        input: { onChange },
        meta: { touched, valid, error },
        name,
        options,
    } = props;
    return (
        <Select className='urbanica-select'
            placeholder={''}
            onChange={onChange}
            name={name}
            options={options}
        />
    );
}

export default UrbanicaSelect;