import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ProfileEllipses } from '../../../assets/images/profile/profile-ellipses.svg';
import { ReactComponent as FolderIcon } from '../../../assets/images/folder.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { getUserProjects, testRequest, updateProfile } from '../../../redux/actions';
import { IProject } from '../../../models';
import { GrEdit, GrCheckmark } from 'react-icons/gr';
import './profile.scss';

const ProfileMain: FunctionComponent = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const { auth, lang, projects } = useSelector((state: RootState) => ({
        auth: state.auth,
        lang: state.settings.language,
        projects: state.auth.userProjects,
        test: state.auth.test
    }));

    const [infoEditMode, setInfoEditMode] = useState<boolean>(false);
    const [about, setAbout] = useState<string>((auth.user?.profile?.bio || {})[lang]);
    
    useEffect(() => {
        if (auth.user) {
            dispatch(getUserProjects(auth.user._id!, 5, 0));
            dispatch(testRequest());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (infoEditMode) textareaRef.current?.focus();
    }, [infoEditMode]);

    const saveAboutHandler = () => {
        dispatch(updateProfile(auth.user?.profile && {...auth.user?.profile, bio: {az: about}}))
    }

    useEffect(() => {
        if (auth) setInfoEditMode(false);
    }, [auth]);

    return (
        <div className='profile container'>
            <div className='container-inner flex-center flex-col'>
                <div className='profile__about'>
                    {/* <div className='profile__statistics'>
                        <div>
                            <div className='statistics-badge'>{projects?.length}</div>
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
                    </div> */}
                    <div className='profile__about-me relative'>
                        <div className='profile-badge'>
                            {t("#AboutME")}
                        </div>
                        <div className='profile__about-me__info'>
                            {!infoEditMode ? (auth.user?.profile?.bio || {})[lang] : 
                                <textarea value={about} onChange={e => setAbout(e.target.value)} ref={textareaRef} />
                            } 
                        </div>
                        {!infoEditMode ? <div className='profile__about-me__edit' onClick={() => setInfoEditMode(true)}>
                            <GrEdit />
                        </div> :
                        <div className='profile__about-me__edit' onClick={saveAboutHandler}>
                            <GrCheckmark />
                        </div>}
                    </div>
                </div>
                <div className='profile__works flex-center flex-col'>
                    <ProfileEllipses className='left-corner' />
                    <ProfileEllipses className='right-corner' />
                    <MyProjects projects={projects} />
                </div>
            </div>
        </div>
    );
}

interface MyProjectsProps {
    projects?: IProject[]
}

const MyProjects: FunctionComponent<MyProjectsProps> = (props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className='profile-badge'>
                {t("#MyWorks")}
            </div>
            <div className='profile-files'>
                {Array.isArray(props.projects) && props.projects.length > 0 &&
                    props.projects.map(project => (
                        <div className='profile-files__file' key={project._id}>
                            <div><FolderIcon /></div>
                            <div style={{marginLeft: 20}}>
                                <div className='file-title'>#{project.general?.projectName || 'Adsız layihə'}</div>
                                <div className='file-description'>
                                    {project.general?.neccessary?.slice(0, 160)}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProfileMain;