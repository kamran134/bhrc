import React, { useState } from 'react';
import PaintBadge from '../../../utils/paint-badge';
import { ImArrowRight2 } from 'react-icons/im';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import RasulAvatar from '../../../assets/images/Rasul_avatar.jpg';
import { ReactComponent as Facebook } from '../../../assets/images/circled_facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/images/circled_instagram.svg';
import { ReactComponent as Twitter } from '../../../assets/images/circled_twitter.svg';
import Modal from 'react-bootstrap/Modal';

const MainTeam = () => {

    const membersMock = [
        {
            name: {
                az: 'Rəsul Cəfərov',
                ru: 'Расул Джафаров',
                en: 'Rasul Jafarov'
            },
            avatar: RasulAvatar,
            profession: {
                az: 'Həmtəsisçi',
                ru: 'Соучредитель',
                en: 'Co-founder'
            },
            bio: {
                az: '<p>Rəsul Cəfərov Bakı İnsan Hüquqları Klubu İctimai Birliyinin (BİHK) həmtəsisçisi və sədridir. BİHK Azərbaycanda insan hüquq və azadlıqlarının, həmçinin demokratik dəyərlərin təşviqi və müdafiəsi ilə məşğul olan qeyri-hökumət təşkilatıdır. Bu fəaliyyətini həyata keçirmək məqsədilə BİHK mülki və siyasi hüquqlar, o cümlədən iqtisadi-sosial hüquqlar üzrə vəziyyəti monitorinq edir, pozuntu halları zamanı araşdırma aparır, zəruri hüquqi yardım göstərir, narahatlıq doğuran işlərin həll üçün dövlət qurumlarına müraciətlər ünvanlayır və ictimai kampaniyalar təşkil edir, regional və beynəlxalq səviyyədə ictimai vəkilliklə məşğul olur.<br/><br/>Cəfərov 2012-ci ildə Bakıda keçirilən Avroviziya Musiqi Yarışması ərəfəsində insan hüquqları sahəsində problemləri qabartmaq üçün təşkil edilmiş “Demokratiya naminə Oxu” kampaniyasının koordinatoru olub. Bu kampaniya sonradan Demokraiya naminə İncəsənət adlandırıldı ki, onun da məqsədi insan hüquqlarının təşviqi üçün incəsənət və onun vasitələrindən istifadə etmək idi.<br/><br/>Cəfərov öz hüquq müdafiə fəaliyyətinə görə müvafiq olaraq Beynəlxalq Ədalət Körpüsü və Norveç Helsinki Komitəsi tərəfindən təsis edilmiş Ədalət Yaradanlar Mükafatna və Andrey Saxarov Azadlıq Mükafatına layiq görülüb.</p>',
                ru: '<p>Расул Джафаров является соучредителем и председателем Бакинского клуба прав человека (БКПЧ), местной неправительственной организации, активно работающей над продвижением и защитой прав человека и демократических ценностей в Азербайджане. С этой целью BHRC отслеживает ситуацию с гражданскими и политическими свободами, а также социально-экономическими правами в стране, проводит расследования сообщений о нарушениях и предоставляет необходимую юридическую поддержку, проводит кампании по вызывающим озабоченность делам и участвует в пропагандистской деятельности на региональном и международном уровнях.<br/><br/>Расул был координатором кампании «Sing for Democracy», направленной на повышение осведомленности о проблемах прав человека накануне конкурса песни «Евровидение 2012», который проходил в Баку. Позже кампания трансформировалась в «Art for democracy», в котором искусство и художественное выражение используются для продвижения прав человека.<br/><br/>Расул собирал информацию о политических заключённых в Азербайджане, сообщая о своих выводах международным организациям, пока не стал одним из них. Он был арестован за правозащитную деятельность в 2014 году. Проведя почти два года за решёткой, он был освобождён в результате усилий, предпринятых местным и международным сообществом в отношении его свободы. В 2020 году Расул был полностью оправдан Верховным судом Азербайджана на основании решения Европейского суда по правам человека, в котором его задержание было политически мотивированным.<br/><br/>Расул является лауреатом Премии Правосудия и Премии свободы Андрея Сахарова, учреждённых соответственно организацией International Bridges to Justice и Норвежским Хельсинкским комитетом.</p>',
                en: '<p>Rasul Jafarov is a co-founder and Chairman of the Baku Human Rights Club (BHRC), a local NGO actively operating for the promotion and protection of human rights and democratic values in Azerbaijan. To that end, the BHRC monitors situation regarding civil and political freedoms as well as socio-economic rights in the country, conducts investigations into reports of violations and provides necessary legal support, campaigns on cases of concern, and engages in advocacy on the regional and international level.<br/><br/>Rasul was a coordinator of the  “Sing for Democracy” campaign aiming to raise awareness on human rights issues on the eve of the 2012 Eurovision Song Contest held in Baku. The campaign later transformed into “Art for democracy” that uses art and artistic expression for human rights promotion.<br/><br/>Rasul compiled information on political prisoners in Azerbaijan, reporting on his findings to international institutions until he became one of those. He has been arrested for his human rights work in 2014. After spending almost two years behind bars he has been released as a result of efforts conducted by local and international community on his freedom. In 2020, Rasul was fully acquitted by the Supreme Court of Azerbaijan based on the Judgement of the European Court of Human Rights indicating his detention as politically-motivated.<br/><br/>Rasul is the recipient of the Justice Makers Award and the Andrei Sakharov Freedom Award instituted by the International Bridges to Justice and the Norwegian Helsinki Committee respectively.</p>'
            },
            social: {
                twitter: 'https://twitter.com/rasuljafarov/',
                instagram: 'https://www.instagram.com/rasuljafarov/',
                facebook: 'https://www.facebook.com/rasul.jafarov/'
            }
        }
    ];

    const { t } = useTranslation();

    return (
        <div className='main-team'>
            <div className='container'>
                <div className='container-inner'>
                    <PaintBadge title={t("Team")} />
                    <h1>{t("Our team")}</h1>
                    <div className='main-team__text-button'>
                        <div className='text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet turpis
                            quis nunc vestibulum auctor. Fusce semper vel enim sit amet ultricies.
                        </div>
                        {/* <button className='bhrc-btn orange-btn'>Meet us <ImArrowRight2/></button> */}
                    </div>
                    <Members members={membersMock} />
                </div>
            </div>
        </div>
    )
}

const Members = ({members}) => {
    const { lang } = useSelector(state => ({
        lang: state.settings.language
    }));
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className='main-team__members'>
            {members.map(member => (
                <>
                    <div className='member' onClick={() => setShowInfo(true)}>
                        <img src={member.avatar} alt={'avatar'} />
                        <div className='name'>{member.name[lang]}</div>
                        <div className='profession'>{member.profession[lang]}</div>
                        <div className='social-network'>
                            <a href={member.social.twitter} target="_blank" rel="noreferrer" className='icon'><Twitter/></a>
                            <a href={member.social.facebook} target="_blank" rel="noreferrer" className='icon'><Facebook/></a>
                            <a href={member.social.instagram} target="_blank" rel="noreferrer" className='icon'><Instagram/></a>
                        </div>
                    </div>
                    <Modal
                        className='member-modal'
                        centered
                        show={showInfo}
                        onHide={() => setShowInfo(false)}
                    >
                        <img src={member.avatar} alt={'avatar'} />
                        <div className='name'>{member.name[lang]}</div>
                        <div className='profession'>{member.profession[lang]}</div>
                        <div className='bio' dangerouslySetInnerHTML={{__html: member.bio[lang]}} />
                        <div className='social-network'>
                            <a href={member.social.twitter} target="_blank" rel="noreferrer" className='icon'><Twitter/></a>
                            <a href={member.social.facebook} target="_blank" rel="noreferrer" className='icon'><Facebook/></a>
                            <a href={member.social.instagram} target="_blank" rel="noreferrer" className='icon'><Instagram/></a>
                        </div>
                    </Modal>
                </>
            ))}
        </div>
    )
}

export default MainTeam;
