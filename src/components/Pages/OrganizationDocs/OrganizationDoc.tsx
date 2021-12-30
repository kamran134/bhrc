import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrgDoc } from "../../../redux/actions";
import { RootState } from "../../../redux/reducers";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { GrAttachment } from 'react-icons/gr';
import moment from "moment";
import 'react-bootstrap';
import './orgDocs.scss';

interface OrganizationDoc {
    id: string;
};

const OrganizationDoc: FunctionComponent = () => {
    const { orgDoc, lang } = useSelector((state: RootState) => ({
        orgDoc: state.docs.orgDoc,
        lang: state.settings.language
    }));
    const { id } = useParams<OrganizationDoc>()
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getOrgDoc(id));
    },[]);

    return(
        <div className='orgDocs'>
            <div className='container'>
                <div className='container-inner'>
                    <h1 className="orgDocs__title main-blue-text">{t("Organization Document")}</h1>
                    {orgDoc && <>
                        <h2>{orgDoc?.name[lang]}</h2>
                        <div className="orgDocs__body">
                            <p dangerouslySetInnerHTML={{__html: orgDoc?.description[lang]}} />
                        </div>
                        <div className="orgDocs__footer">
                            <p className="orgDocs__date">{t("Published")}: {moment(orgDoc.createdAt).format('DD.MM.YYYY')}</p>
                            <a href={orgDoc.filePath[lang]}><GrAttachment /> {t("Attachment")}</a>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default OrganizationDoc;