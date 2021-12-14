import React, { FunctionComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ProfileEllipses } from '../../../assets/images/profile/profile-ellipses.svg';
import { ReactComponent as FolderIcon } from '../../../assets/images/folder.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { getUserProjects } from '../../../redux/actions';
import './profile.scss';

const ProfileMain: FunctionComponent = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { auth, lang, projects } = useSelector((state: RootState) => ({
        auth: state.auth,
        lang: state.settings.language,
        projects: state.auth.userProjects
    }));
    
    useEffect(() => {
        if (auth.user) dispatch(getUserProjects(auth.user._id!, 5, 0));
    }, []);

    console.log('proj', projects);
    return (
        <div className='profile container'>
            <div className='container-inner flex-center flex-col'>
                <div className='profile__about'>
                    <div className='profile__statistics'>
                        <div>
                            <div className='statistics-badge'>20</div>
                            <label>{t("Works")}</label>
                        </div>
                        <div>
                            <div className='statistics-badge'>20</div>
                            <label>{t("Views")}</label>
                        </div>
                        <div>
                            <div className='statistics-badge'>20</div>
                            <label>{t("Raitings")}</label>
                        </div>
                    </div>
                    <div className='profile__about-me'>
                        <div className='profile-badge'>
                            {t("#AboutME")}
                        </div>
                        <div className='profile__about-me__info'>
                            {(auth.user?.profile?.bio || {})[lang]} 
                        </div>
                    </div>
                </div>
                <div className='profile__works flex-center flex-col'>
                    <ProfileEllipses className='left-corner' />
                    <ProfileEllipses className='right-corner' />
                    <div className='profile-badge'>
                        {t("#MyWorks")}
                    </div>
                    <div className='profile-files'>
                        <div className='profile-files__file'>
                            <div><FolderIcon /></div>
                            <div style={{marginLeft: 20}}>
                                <div className='file-title'>#Loremipsum</div>
                                <div className='file-description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s.......
                                </div>
                            </div>
                        </div>
                        <div className='profile-files__file'>
                            <div><FolderIcon /></div>
                            <div style={{marginLeft: 20}}>
                                <div className='file-title'>#Loremipsum</div>
                                <div className='file-description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s.......
                                </div>
                            </div>
                        </div>
                        <div className='profile-files__file'>
                            <div><FolderIcon /></div>
                            <div style={{marginLeft: 20}}>
                                <div className='file-title'>#Loremipsum</div>
                                <div className='file-description'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                    1500s.......
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain;