import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ReactComponent as ContestGreen} from '../../../assets/images/green.svg';
import { ReactComponent as ContestGirl} from '../../../assets/images/girl.svg';
import { ReactComponent as TimeSeparator } from '../../../assets/images/time-separator.svg';
import { useTranslation } from 'react-i18next';
import './urbanica.scss';

const UrbanicaMain = () => {
    return (
        <div className='urbanica-main'>
            <div className='container'>
                <div className='container-inner flex-center flex-column'>
                    <div className='urbanica-main__what-is'>
                        URBANICA is a youth platform to support the modern generation in new achievements!
                    </div>
                    <div className='urbanica-main__motivation'>
                        BE WITH US
                    </div>
                    <Contest name={'SHOW YOURSELF'} description={'Participate in our competition and show what you are capable of'} />
                </div>
            </div>
        </div>
    )
}

const Contest = ({name, description, url, endTime}) => {
    const { t } = useTranslation();
    const date = new Date('03.28.2021 10:30');
    return (
        <div className='urbanica-contest'>
            <div className='urbanica-contest__name'>{name}</div>
            <div className='urbanica-contest__description'>{description}</div>
            <div className='urbanica-contest__join'>
                <button className='urbanica-btn orange-btn'>{t("Learn more").toLocaleUpperCase()}</button>
            </div>
            <div><CountDown date={date} /></div>
            <div className='urbanica-contest__green'><ContestGreen /></div>
            <div className='urbanica-contest__girl'><ContestGirl /></div>
        </div>
    )
}

const CountDown = ({date}) => {
    const calculateTimeLeft = () => {
        let difference = date - new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className='time-countdown'>
            {timeLeft.hours < 10 ? <>
                <span className='time-countdown__number'>0</span>
                <span className='time-countdown__number'>{timeLeft.hours}</span>
            </> : <>
                <span className='time-countdown__number'>{(timeLeft.hours - timeLeft.hours % 10) / 10}</span>
                <span className='time-countdown__number'>{timeLeft.hours % 10}</span>
            </>}
            <span className='time-countdown__separator'><TimeSeparator /></span>
            {timeLeft.minutes < 10 ? <>
                <span className='time-countdown__number'>0</span>
                <span className='time-countdown__number'>{timeLeft.minutes}</span>
            </> : <>
                <span className='time-countdown__number'>{(timeLeft.minutes - timeLeft.minutes % 10) / 10}</span>
                <span className='time-countdown__number'>{timeLeft.minutes % 10}</span>
            </>}
            <span className='time-countdown__separator'><TimeSeparator /></span>
            {timeLeft.seconds < 10 ? <>
                <span className='time-countdown__number'>0</span>
                <span className='time-countdown__number'>{timeLeft.seconds}</span>
            </> : <>
                <span className='time-countdown__number'>{(timeLeft.seconds - timeLeft.seconds % 10) / 10}</span>
                <span className='time-countdown__number'>{timeLeft.seconds % 10}</span>
            </>}
        </div>
    )
}

CountDown.propTypes = {
    // eslint-disable-next-line react/no-typos
    date: PropTypes.date
}


export default UrbanicaMain;