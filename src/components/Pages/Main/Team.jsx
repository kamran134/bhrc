import React, { useState, useEffect } from 'react';
// import PaintBadge from '../../../utils/paint-badge';
// import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
// import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
// import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
// import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam } from '../../../redux/actions/home-actions';
import Modal from 'react-bootstrap/Modal';
import { config } from '../../../config';

const MainTeam = () => {

    const dispatch = useDispatch();

    const { team } = useSelector(state => ({
        team: state.team
    }));

    useEffect(() => {
        dispatch(getTeam());
    }, [dispatch]);

    const { t } = useTranslation();

    return (
        <div className='main-team'>
            <div className='container'>
                <div className='container-inner centered-text'>
                    <h1>{t("Our team")}</h1>
                    <Members members={team} />
                </div>
            </div>
        </div>
    )
}

const Members = ({members}) => {
    const { lang } = useSelector(state => ({
        lang: state.settings.language
    }));
    const [showInfo, setShowInfo] = useState(undefined);
    return (
        <div className='main-team__members'>
            {members.map(member => (
                <React.Fragment key={member._id}>
                    <div className='member' onClick={() => setShowInfo(member._id)}>
                        <img src={`${config.url.IMAGE_URL}team_images/${member.picture}/original/${member.picture}.${member.pictureExtension}`} alt={'avatar'} />
                        <div className='name'>{member.name[lang]}</div>
                        <div className='profession'>{member.profession[lang]}</div>
                        {/* <div className='social-network'>
                            <a href={member.social.twitter} target="_blank" rel="noreferrer" className='icon'><Twitter/></a>
                            <a href={member.social.facebook} target="_blank" rel="noreferrer" className='icon'><Facebook/></a>
                            <a href={member.social.instagram} target="_blank" rel="noreferrer" className='icon'><Instagram/></a>
                        </div> */}
                    </div>
                    <Modal
                        className='member-modal'
                        centered
                        show={showInfo === member._id}
                        onHide={() => setShowInfo(undefined)}
                    >
                        <img src={`${config.url.IMAGE_URL}team_images/${member.picture}/original/${member.picture}.${member.pictureExtension}`} alt={'avatar'} />
                        <div className='name'>{member.name[lang]}</div>
                        <div className='profession'>{member.profession[lang]}</div>
                        <div className='bio' dangerouslySetInnerHTML={{__html: member.bio[lang]}} />
                        {/* <div className='social-network'>
                            <a href={member.social.twitter} target="_blank" rel="noreferrer" className='icon'><Twitter/></a>
                            <a href={member.social.facebook} target="_blank" rel="noreferrer" className='icon'><Facebook/></a>
                            <a href={member.social.instagram} target="_blank" rel="noreferrer" className='icon'><Instagram/></a>
                        </div> */}
                    </Modal>
                </React.Fragment>
            ))}
        </div>
    )
}

export default MainTeam;
