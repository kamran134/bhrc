import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ProfileCover } from '../../../assets/images/profile/profile-cover.svg';
import { ReactComponent as ProfileCoverEllipse } from '../../../assets/images/profile/profile-cover-ellipse.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/images/profile/logout.svg';
import noAvatar from '../../../assets/images/profile/no-avatar.png';
import { RootState } from '../../../redux/reducers';
import { getProfile, signOut, updateProfile } from '../../../redux/actions';
import { useTranslation } from 'react-i18next';
import { UserRole } from '../../../models';
import { MdPhotoCamera } from 'react-icons/md';
import './profileHeader.scss';
import { config } from '../../../config';

const ProfileHeader: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const addPhotoRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { auth, lang } = useSelector((state: RootState) => ({
        auth: state.auth,
        lang: state.settings.language
    }));
    const [preview, setPreview] = useState<string>();
    const FR = new FileReader();

    useEffect(() => {
        dispatch(getProfile(auth.token || ''));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!auth.isAuthenticated) navigate('/urbanica');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signOutHandler = () => {
        dispatch(signOut(auth.user?._id || '', auth.token || ''));
    }

    const addPhotoHandler = () => {
        addPhotoRef.current?.click();
    }

    const addPhotoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) FR.readAsDataURL(e.target.files[0])
        FR.onloadend = () => {
            console.log('res', FR.result);
            setPreview(FR.result as string);
        }
    }

    useEffect(() => {
        if (preview) dispatch(updateProfile(undefined, preview));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preview]);

    console.log('prof', auth.user);

    return (
        <div className='profile-header'>
            <ProfileCover />
            <ProfileCoverEllipse className='ellipse' />
            <div className='profile-header__avatar'>
                {auth.user?.profile.picture ? <img src={`${config.url.IMAGE_URL}users_images/${auth.user.profile.picture}/mobile/avatar`} /> : 
                <img src={preview ? preview : noAvatar} alt={'test_avatar'} />}
                <div className='profile-header__avatar__change-photo'>
                    <div className='change-photo-inner' onClick={addPhotoHandler}>
                        <MdPhotoCamera />
                    </div>
                    <input
                        type={'file'}
                        style={{display: 'none'}}
                        onChange={(e) => addPhotoChangeHandler(e)}
                        ref={addPhotoRef} />
                </div>
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