import React, { FunctionComponent, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getOrgDocs } from "../../../redux/actions";
import { RootState } from "../../../redux/reducers";
import moment from "moment";
import { Link } from "react-router-dom";
import './orgDocs.scss';

const OrganizationDocs: FunctionComponent = () => {
    const { orgDocs, lang } = useSelector((state: RootState) => ({
        orgDocs: state.docs.orgDocs,
        lang: state.settings.language
    }));
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getOrgDocs(100, 0));
    },[]);
    
    return (
        <div className='orgDocs'>
            <div className='container'>
                <div className='container-inner'>
                    <h1 className="orgDoc__title main-blue-text">{t("Organization Documents")}</h1>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>{t("Name")}</th>
                                {/* <th>{t("Short description")}</th> */}
                                <th>{t("Date")}</th>
                                <th>{t("File")}</th>
                                <th>{t("Link to Document")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orgDocs && orgDocs.map((orgDoc, index) => (
                                    <tr key={orgDoc._id}>
                                        <td>{index + 1}</td>
                                        <td>{orgDoc.name[lang]}</td>
                                        {/* <td>{orgDoc.shortDescription[lang]}</td> */}
                                        <td>{moment(orgDoc.createdAt).format('DD.MM.YYYY')}</td>
                                        <td>{orgDoc.filePath ? 
                                            <a href={orgDoc.filePath[lang]}>Yüklə</a> : t("Not found")}
                                        </td>
                                        <td> <Link to={`/organization-document/${orgDoc._id}`}>{t("Link")}</Link> </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div> 
        </div>
    );
}

export default OrganizationDocs;