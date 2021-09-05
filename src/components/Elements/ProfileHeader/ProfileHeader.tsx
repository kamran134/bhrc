import React, { FunctionComponent } from 'react';
import './profileHeader.scss';
import { ReactComponent as ProfileCover } from '../../../assets/images/profile-cover.svg';
import { ReactComponent as ProfileCoverEllipse } from '../../../assets/images/profile-cover-ellipse.svg';
import testAvatar from '../../../assets/images/test_avatar4.png';

const ProfileHeader: FunctionComponent = () => {
    return (
        <div className='profile-header'>
            <ProfileCover />
            <ProfileCoverEllipse className='ellipse' />
            <div className='profile-header__avatar'>
                <img src={testAvatar} alt={'test_avatar'} />
            </div>
            <div className='profile-header__name'>
                <p className='name'>Alina Asgarova</p>
                <p className='role'>participant</p>
            </div>
        </div>
    )
}

export default ProfileHeader;