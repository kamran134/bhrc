import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { TFunction, useTranslation } from 'react-i18next';
import { ReactComponent as ProfileEllipses } from '../../../assets/images/profile/profile-ellipses.svg';
import { ReactComponent as FolderIcon } from '../../../assets/images/folder.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { getUserProjects, testRequest, updateProfile } from '../../../redux/actions';
import { IProject } from '../../../models';
import { GrEdit, GrCheckmark } from 'react-icons/gr';
import { Table } from 'react-bootstrap';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
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

    const projectsMock: IProject[] = [
        {
            _id: '1',
            general: {
                projectName: 'LoremIpsum',
                neccessary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s....... '
            }
        },
        {
            _id: '2',
            general: {
                projectName: 'LoremIpsum',
                neccessary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s....... '
            }
        },
        {
            _id: '3',
            general: {
                projectName: 'LoremIpsum',
                neccessary: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s....... '
            }
        }
    ];

    return (
        <div className='profile container'>
            <div className='container-inner flex-center flex-col'>
                <div className='profile__about'>
                    <div className='profile__statistics'>
                        <div>
                            <div className='statistics-badge'>{projectsMock?.length}</div>
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
                    <div className='profile__about-me relative'>
                        <div className='profile-badge'>
                            {t("#AboutME")}
                        </div>
                        <div className='profile__about-me__info'>
                            {!infoEditMode ? 'I am a new participant in this enterprise. I strive to improve life in our country. I am looking for new opportunities to prove myself.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' : 
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
                    <MyProjects projects={projectsMock} t={t} />
                </div>
            </div>
        </div>
    );
}

interface MyProjectsProps {
    projects?: IProject[];
    t: TFunction;
}

const MyProjects: FunctionComponent<MyProjectsProps> = props => {
    const { t } = props;
    return (
        <>
            <div className='profile-badge'>
                {t("#MyWorks")}
            </div>
            <div className='profile-files'>
                {Array.isArray(props.projects) && props.projects.length > 0 &&
                    props.projects.map(project => (
                        <MyProject project={project} t={t} />
                    ))
                }
            </div>
        </>
    );
}

interface ProjectProps {
    project: IProject;
    t: TFunction;
}

const MyProject: FunctionComponent<ProjectProps> = props => {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const [showBudget, setShowBudget] = useState<boolean>(false);
    const budgetSums: number[] = [
        props.project.budget?.participants?.reduce((p, c) => (p + c.price)*c.period.quantity, 0)!,
        props.project.budget?.activities?.reduce((p, c) => (p + c.price)*c.period.quantity, 0)!,
        props.project.budget?.devices?.reduce((p, c) => (p + c.price)*c.period.quantity, 0)!,
        props.project.budget?.others?.reduce((p, c) => (p + c.price)*c.period.quantity, 0)!,
    ];
    const { t } = props;
    return (
        <>
            <div className='profile-files__file' key={props.project._id} onClick={() => setShowDetails(!showDetails)}>
                <div><FolderIcon /></div>
                <div style={{marginLeft: 20}}>
                    <div className='file-title'>#{props.project.general?.projectName || 'Adsız layihə'}</div>
                    <div className='file-description'>
                        {props.project.general?.neccessary?.slice(0, 160)}
                    </div>
                </div>
            </div>
            {showDetails && <div className={showDetails ? 'profile-files__details active' : 'profile-files__details'}>
                <Table responsive bordered hover>
                    <tbody>
                        <tr>
                            <th colSpan={4}>Ümumi məlumatlar</th>
                        </tr>
                        <tr>
                            <td colSpan={2}>Layihənin adı: </td>
                            <td colSpan={2}>{props.project.general?.projectName || 'Adssız'}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Layihənin zəruriliyi: </td>
                            <td colSpan={2}>{props.project.general?.neccessary}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Layihənin həll edəcəyi problemlər: </td>
                            <td colSpan={2}>{props.project.general?.howSolve}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Layihənin hədəf qrupları: </td>
                            <td colSpan={2}>{props.project.general?.groups}</td>
                        </tr>

                        <tr>
                            <th colSpan={4}>Layihənin detalları</th>
                        </tr>
                        <tr>
                            <td colSpan={2}>Layihənin məqsədi: </td>
                            <td colSpan={2}>{props.project.details?.goal}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Layihənin fəaliyyət təklifi: </td>
                            <td colSpan={2}>{props.project.details?.suggestions}</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Layihənin gözlənilən nəticələri: </td>
                            <td colSpan={2}>{props.project.details?.expectedResult}</td>
                        </tr>

                        <tr>
                            <th colSpan={4} onClick={() => setShowBudget(!showBudget)}>
                                Büdcə forması {showBudget ? <MdArrowDropUp /> : <MdArrowDropDown />}
                            </th>
                        </tr>
                        {showBudget && <>
                            <tr>
                                <td colSpan={2}>Layihənin müddəti: </td>
                                <td colSpan={2}>{props.project.budget?.period.quantity} {t(props.project.budget?.period.unit || '')}</td>
                            </tr>
                            
                            <tr>
                                <th colSpan={4}>Heyət xərcləri</th>
                            </tr>
                            <tr>
                                <th>Xərclərin növü</th>
                                <th>Vahid</th>
                                <th>Kəmiyyət</th>
                                <th>Vahidin qiyməti</th>
                            </tr>
                            {props.project.budget?.participants?.map(p => (
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{t(p.period.unit)}</td>
                                    <td>{p.period.quantity}</td>
                                    <td>{p.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>
                                    Cəmi: {budgetSums[0]} AZN
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={4}>Fəaliyyət</th>
                            </tr>
                            <tr>
                                <th>Xərclərin növü</th>
                                <th>Vahid</th>
                                <th>Kəmiyyət</th>
                                <th>Vahidin qiyməti</th>
                            </tr>
                            {props.project.budget?.activities?.map(a => (
                                <tr>
                                    <td>{a.name}</td>
                                    <td>{t(a.period.unit)}</td>
                                    <td>{a.period.quantity}</td>
                                    <td>{a.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>
                                    Cəmi: {budgetSums[1]} AZN
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={4}>Avadanlıq</th>
                            </tr>
                            <tr>
                                <th>Xərclərin növü</th>
                                <th>Vahid</th>
                                <th>Kəmiyyət</th>
                                <th>Vahidin qiyməti</th>
                            </tr>
                            {props.project.budget?.devices?.map(d => (
                                <tr>
                                    <td>{d.name}</td>
                                    <td>{t(d.period.unit)}</td>
                                    <td>{d.period.quantity}</td>
                                    <td>{d.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>
                                    Cəmi: {budgetSums[2]} AZN
                                </td>
                            </tr>

                            <tr>
                                <th colSpan={4}>Digər xərclər</th>
                            </tr>
                            <tr>
                                <th>Xərclərin növü</th>
                                <th>Vahid</th>
                                <th>Kəmiyyət</th>
                                <th>Vahidin qiyməti</th>
                            </tr>
                            {props.project.budget?.others?.map(o => (
                                <tr>
                                    <td>{o.name}</td>
                                    <td>{t(o.period.unit)}</td>
                                    <td>{o.period.quantity}</td>
                                    <td>{o.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>
                                    Cəmi: {budgetSums[3]} AZN
                                </td>
                            </tr>
                            
                            <tr>
                                <th colSpan={4}>
                                    Cəmi: {budgetSums.reduce((p, c) => (p + c), 0)} AZN
                                </th>
                            </tr>
                        </>}
                    </tbody>
                </Table>
            </div>}
        </>
    );
}

export default ProfileMain;