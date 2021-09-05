import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ProfileEllipses } from '../../../assets/images/profile-ellipses.svg';
import { ReactComponent as FolderIcon } from '../../../assets/images/folder.svg';

import './profile.scss';

const ProfileMain: FunctionComponent = () => {
    const { t } = useTranslation();
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
                            I am a new participant in this enterprise. I strive to improve life in our country.
                            I am looking for new opportunities to prove myself.is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. 
                        </div>
                    </div>
                </div>
                <div className='profile__works flex-center flex-col'>
                    <ProfileEllipses className='left-corner' />
                    <ProfileEllipses className='right-corner' />
                    <div className='profile-badge'>
                        #MyWorks
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