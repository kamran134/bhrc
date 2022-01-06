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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { getCompetition, openModal, redirect } from '../../../redux/actions';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/az';
import './urbanica.scss';

const UrbanicaMain: FunctionComponent = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { competition, lang, auth, redirect } = useSelector((state: RootState) => ({
        competition: state.urbanica.competition,
        lang: state.settings.language,
        redirect: state.settings.redirect,
        auth: state.auth
    }));

    useEffect(() => {
        dispatch(getCompetition());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(redirect && redirect!== '' && auth.isAuthenticated ) navigate(redirect);
    }, [auth, redirect, navigate]);

    const today = new Date();
    const endDate = competition ? new Date(competition?.endDate) : new Date();

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
                        {competition && (endDate.getTime() > today.getTime()) &&
                            <Contest
                                name={competition.name[lang] || competition.name.az}
                                description={(competition.description || {})[lang || 'az']}
                                isAuthenticate={auth.isAuthenticated}
                                endDate={competition.endDate} />}
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
    );
}

interface ContestProps {
    name: string;
    description: string;
    isAuthenticate: boolean;
    endDate: Date;
}

const Contest: FunctionComponent<ContestProps> = ({ name, description, isAuthenticate, endDate }) => {
    const { t } = useTranslation();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const participateHandler = () => {
        if (isAuthenticate) {
            navigate('/urbanica/competition');
        } else {
            dispatch(openModal(true));
            dispatch(redirect('/urbanica/competition'));
        }
    }

    return (
        <div className='urbanica-contest'>
            <div className='urbanica-contest__name'>{name}</div>
            <div className='urbanica-contest__description' dangerouslySetInnerHTML={{__html: description}} />
            <div className='urbanica-contest__join'>
                <button className='urbanica-btn orange-btn' onClick={participateHandler} >{t("Participate").toLocaleUpperCase()}</button>
            </div>
            <div><CountDown date={endDate} /></div>
            <div className='urbanica-contest__green'><ContestGreen /></div>
            <div className='urbanica-contest__girl'><ContestGirl /></div>
        </div>
    );
}

interface CountDownProps {
    date: Date
}

const CountDown: FunctionComponent<CountDownProps> = ({date}) => {
    moment.locale('az');
    const calculateTimeLeft = () => {
        const endDate = new Date(date);
        const today = new Date();
        let diffSec: number = Math.abs(endDate.getTime() - today.valueOf());
        let timeLeft: {days: number, hours: number, minutes: number, seconds: number} = {days: 0, hours: 0, minutes: 0, seconds: 0};
        if (diffSec > 0) {
            timeLeft = {
                days: Math.floor((diffSec / (1000 * 60 * 60 * 24))),
                hours: Math.floor((diffSec / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diffSec / 1000 / 60) % 60),
                seconds: Math.floor((diffSec / 1000) % 60)
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
            {timeLeft && timeLeft.days < 1 ? <div className='time-countdown'>
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
            </div> : 
            <div className='time-countdown'>
                {timeLeft.days} gün qaldı. Son tarix: {moment(date).format('D MMMM YYYY')}
            </div>}
        </>
    );
}

const BHRCLink = () => {
    const dispatch = useDispatch();
    return (
        <div className='urbanica-info__go-home'>
            <Link to='/' onClick={() => dispatch(redirect('/'))} ><LogoEn className='bhrc-go-home' /></Link>
        </div>
)};

export default UrbanicaMain;