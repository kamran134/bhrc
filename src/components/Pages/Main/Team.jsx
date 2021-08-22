import React, { useState, useEffect } from 'react';
// import PaintBadge from '../../../utils/paint-badge';
// import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';
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
                        {member.socialNetworks && <div className='social-network'>
                            {member.socialNetworks.map(network => <SocialNetwork key={network.name} network={network} />)}
                        </div>}
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
                        {member.socialNetworks && <div className='social-network'>
                            {member.socialNetworks.map(network => <SocialNetwork key={network.name} network={network} />)}
                        </div>}
                    </Modal>
                </React.Fragment>
            ))}
        </div>
    )
}


const SocialNetwork = ({ network }) => {
    switch(network.name) {
        case 'twitter':
            return <a href={network.link} target="_blank" rel="noreferrer" className='icon'><Twitter /></a>;
        case 'facebook':
            return <a href={network.link} target="_blank" rel="noreferrer" className='icon'><Facebook /></a>;
        case 'instagram':
            return <a href={network.link} target="_blank" rel="noreferrer" className='icon'><Instagram /></a>;
        default:
            return <></>
    }
    
}

export default MainTeam;
