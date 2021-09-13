import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './profileHeader.scss';
import { ReactComponent as ProfileCover } from '../../../assets/images/profile/profile-cover.svg';
import { ReactComponent as ProfileCoverEllipse } from '../../../assets/images/profile/profile-cover-ellipse.svg';
import noAvatar from '../../../assets/images/profile/no-avatar.png';
import { RootState } from '../../../redux/reducers/rootReducer';
import { getProfile } from '../../../redux/actions/auth-actions';
import { useTranslation } from 'react-i18next';
import { UserRole } from '../../../models/user';

const ProfileHeader: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { auth, lang } = useSelector((state: RootState) => ({
        auth: state.auth,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getProfile(auth.token || ''));
    }, [dispatch]);

    return (
        <div className='profile-header'>
            <ProfileCover />
            <ProfileCoverEllipse className='ellipse' />
            <div className='profile-header__avatar'>
                <img src={noAvatar} alt={'test_avatar'} />
            </div>
            <div className='profile-header__name'>
                <p className='name'>{(auth.user?.profile.fullName || {})[lang] || auth.user?.emails[0]?.address}</p>
                <p className='role'>{auth.user?.profile.role === UserRole.PARTICIPANT ? t("Participant") : t(auth.user?.profile.role || "Participant")}</p>
            </div>
        </div>
    )
}

export default ProfileHeader;