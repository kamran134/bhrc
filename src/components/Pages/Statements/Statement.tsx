import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatement } from "../../../redux/actions";
import { RootState } from "../../../redux/reducers";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { GrAttachment } from 'react-icons/gr';
import moment from "moment";
import 'react-bootstrap';
import './statement.scss';

interface StatementParams {
    id: string;
};

const Statement: FunctionComponent = () => {
    const { statement, lang } = useSelector((state: RootState) => ({
        statement: state.report.statement,
        lang: state.settings.language
    }));
    const { id } = useParams<StatementParams>()
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getStatement(id));
    },[]);

    return(
        <div className='statement'>
            <div className='container'>
                <div className='container-inner'>
                    <h1 className="statement__title main-blue-text">{t("Statement")}</h1>
                    {statement && <>
                        <h2>{statement?.name[lang]}</h2>
                        <div className="statement__body">
                            <p dangerouslySetInnerHTML={{__html: statement?.description[lang]}} />
                        </div>
                        <div className="statement__footer">
                            <p className="statement__date">{t("Published")}: {moment(statement.createdAt).format('DD.MM.YYYY')}</p>
                            <a href={statement.filePath[lang]}><GrAttachment /> {t("Attachment")}</a>
                        </div>
                    </>}
                </div>
            </div>
        </div>
    );
}

export default Statement;