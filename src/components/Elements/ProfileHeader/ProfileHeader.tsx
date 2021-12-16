import React, { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ReactComponent as ProfileCover } from '../../../assets/images/profile/profile-cover.svg';
import { ReactComponent as ProfileCoverEllipse } from '../../../assets/images/profile/profile-cover-ellipse.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/profile/logout.svg';
import noAvatar from '../../../assets/images/profile/no-avatar.png';
import { RootState } from '../../../redux/reducers';
import { getProfile, signOut } from '../../../redux/actions';
import { useTranslation } from 'react-i18next';
import { UserRole } from '../../../models';
import './profileHeader.scss';

const ProfileHeader: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const history = useHistory();
    const { auth, lang } = useSelector((state: RootState) => ({
        auth: state.auth,
        lang: state.settings.language
    }));

    useEffect(() => {
        dispatch(getProfile(auth.token || ''));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!auth.isAuthenticated) history.push('/urbanica');
    }, [auth, history]);

    const signOutHandler = () => {
        dispatch(signOut(auth.user?._id || '', auth.token || ''));
    }

    return (
        <div className='profile-header'>
            <ProfileCover />
            <ProfileCoverEllipse className='ellipse' />
            <div className='profile-header__avatar'>
                <img src={noAvatar} alt={'test_avatar'} />
            </div>
            <div className='profile-header__name'>
                <p className='name'>{(auth.user?.profile?.fullName || {})[lang]}</p>
                <p className='role'>{auth.user?.profile.role === UserRole.PARTICIPANT ? t("Participant") : t(auth.user?.profile.role || "Participant")}</p>
            </div>
            <div className='profile-header__homepage'>
                <Link to={`/`} />
            </div>
            <div className='profile-header__logout'>
                <Link to={`/profile`} onClick={signOutHandler} >{t("Logout")} <LogoutIcon /></Link>
            </div>
        </div>
    );
}

export default ProfileHeader;