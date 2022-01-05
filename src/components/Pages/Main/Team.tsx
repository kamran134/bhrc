import React, { useState, useEffect, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam } from '../../../redux/actions/home.actions';
import Modal from 'react-bootstrap/Modal';
import { config } from '../../../config';
import { RootState } from '../../../redux/reducers';
import { ITeamMember, ISocialNetwork, IHomePageBlock } from '../../../models';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

interface MainTeamProps {
    data: IHomePageBlock;
}

const MainTeam: FunctionComponent<MainTeamProps> = ({ data }) => {
    const dispatch = useDispatch();
    const { teamMembers, lang } = useSelector((state: RootState) => ({
        teamMembers: state.homepage.teamMembers,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getTeam(0, 0));
    }, [dispatch]);

    const { t } = useTranslation();

    return (
        <div className='main-team'>
            <div className='container'>
                <div className='container-inner centered-text'>
                    <AnimationOnScroll animateIn='animate__backInDown' animateOnce>
                        <h1>{data && data.title[lang]}</h1>
                    </AnimationOnScroll>
                    <Members members={teamMembers} />
                </div>
            </div>
        </div>
    )
}

interface MembersProps {
    members: ITeamMember[]
}

const Members: FunctionComponent<MembersProps> = ({members}) => {
    const { lang } = useSelector((state: RootState) => ({
        lang: state.settings.language
    }));
    const [showInfo, setShowInfo] = useState<string | undefined>(undefined);
    return (
        <div className='main-team__members'>
            {members.map((member: ITeamMember, i: number) => (
                <AnimationOnScroll key={member._id} animateIn='animate__fadeInUp' delay={i*100} animateOnce>
                    <div className='member' onClick={() => setShowInfo(member._id)}>
                        <img src={`${config.url.IMAGE_URL}team_images/${member.picture}/mobile/${member.picture}.${member.pictureExtension}`} alt={'avatar'} />
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
                        <img src={`${config.url.IMAGE_URL}team_images/${member.picture}/mobile/${member.picture}.${member.pictureExtension}`} alt={'avatar'} />
                        <div className='name'>{member.name[lang]}</div>
                        <div className='profession'>{member.profession[lang]}</div>
                        <div className='bio' dangerouslySetInnerHTML={{__html: member.bio[lang]}} />
                        {member.socialNetworks && <div className='social-network'>
                            {member.socialNetworks.map(network => <SocialNetwork key={network.name} network={network} />)}
                        </div>}
                    </Modal>
                </AnimationOnScroll>
            ))}
        </div>
    )
}

interface SocialNetworkProps {
    network: ISocialNetwork
}

const SocialNetwork: FunctionComponent<SocialNetworkProps> = ({ network }) => {
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
