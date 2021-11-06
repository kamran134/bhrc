import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../redux/reducers';
import { IAlert } from '../../redux/states';

const AlertMessage: FunctionComponent = () => {
    const { t } = useTranslation();
    const { alertMessages } = useSelector((state: RootState) => ({
        alertMessages: state.alert
    }));

    return (
        <div className='alerts-box'>
            {alertMessages.map((al: IAlert) => (
                <div className={`alerts-box__message ${al.type}`} key={al.id}>
                    <div className='alerts-box__inner'>
                        {t(al.message)}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AlertMessage;