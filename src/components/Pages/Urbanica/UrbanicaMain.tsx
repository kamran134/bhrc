import React, { useState, useEffect, FunctionComponent } from 'react';
import { ReactComponent as ContestGreen} from '../../../assets/images/urbanica/green.svg';
import { ReactComponent as ContestGirl} from '../../../assets/images/urbanica/girl.svg';
import { ReactComponent as TimeSeparator } from '../../../assets/images/urbanica/time-separator.svg';
import { ReactComponent as UrbanicaInfoLeft } from '../../../assets/images/urbanica/urbanica-info-left.svg';
import { ReactComponent as UrbanicaInfoRight } from '../../../assets/images/urbanica/urbanica-info-right.svg';
import { ReactComponent as LogoEn } from '../../../assets/images/urbanica/bhrc-urbanica.svg';
import { ReactComponent as UrbanicaLeftCircles } from '../../../assets/images/urbanica/urbanica-left-circles.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './urbanica.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers/rootReducer';
import { getCompetition } from '../../../redux/actions/urbanica-actions';

const UrbanicaMain: FunctionComponent = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const { competition, lang } = useSelector((state: RootState) => ({
        competition: state.urbanica.competition,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getCompetition());
    }, [dispatch]);

    console.log('comp', competition);

    return (
        <>
            <div className='urbanica-main'>
                <div className='container'>
                    <div className='container-inner flex-center flex-column'>
                        <div className='urbanica-main__what-is'>
                            {t("Urbanica is a social platform established for a youth")}
                        </div>
                        <div className='urbanica-main__motivation'>
                            {t("MAKE A STEP")}
                        </div>
                        {competition && <Contest name={competition.name[lang] || competition.name.az} description={(competition.shortDescription || {})[lang || 'az']} />}
                    </div>
                </div>
            </div>
            <div className='urbanica-info'>
                <div className='urbanica-info__left'>
                    <UrbanicaInfoLeft />
                    <div className='urbanica-info__left-text'>
                        <p><h1>{t("What are we proposing?")}</h1></p>
                        <p>{t("urbanica_1")}</p>
                        <BHRCLink />
                    </div>
                </div>
                <div className='urbanica-info__right'>
                    <div className='urbanica-info__right-text'>
                        <p><h1>{t("Which fileds we support?")}</h1></p>
                        <p>{t("urbanica_2")}</p>
                    </div>
                    <UrbanicaInfoRight />
                </div>
                <div className='urbanica-info__left'>
                    <UrbanicaInfoLeft />
                    <div className='urbanica-info__left-text'>
                        <p><h1>{t("Who can apply?")}</h1></p>
                        <p>{t("urbanica_3")}</p>
                        <UrbanicaLeftCircles className='urbanica-info__left-circles' />
                    </div>
                </div>
            </div>
        </>
    )
}

interface ContestProps {
    name: string,
    description: string,
    url?: string,
    endTime?: Date
}

const Contest: FunctionComponent<ContestProps> = ({name, description, url, endTime}) => {
    const { t } = useTranslation();
    const date = new Date('10.28.2021 10:30');
    return (
        <div className='urbanica-contest'>
            <div className='urbanica-contest__name'>{name}</div>
            <div className='urbanica-contest__description'>{description}</div>
            <div className='urbanica-contest__join'>
                <button className='urbanica-btn orange-btn'>{t("Participate").toLocaleUpperCase()}</button>
            </div>
            <div><CountDown date={date} /></div>
            <div className='urbanica-contest__green'><ContestGreen /></div>
            <div className='urbanica-contest__girl'><ContestGirl /></div>
        </div>
    )
}

interface CountDownProps {
    date: Date
}

const CountDown: FunctionComponent<CountDownProps> = ({date}) => {
    const calculateTimeLeft = () => {
        let difference: number = Number(date) - Number(new Date());
        let timeLeft: {hours: number, minutes: number, seconds: number} = {hours: 0, minutes: 0, seconds: 0};
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
        <>
            {timeLeft && <div className='time-countdown'>
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
            </div>}
        </>
    )
}

const BHRCLink = () => (
    <div className='urbanica-info__go-home'>
        <Link to='/'><LogoEn className='bhrc-go-home' /></Link>
    </div>
);

export default UrbanicaMain;