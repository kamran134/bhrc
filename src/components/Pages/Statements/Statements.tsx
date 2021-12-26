import React, { FunctionComponent, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStatements } from "../../../redux/actions";
import { RootState } from "../../../redux/reducers";
import { useTranslation } from "react-i18next";
import moment from "moment";
import 'react-bootstrap';
import './statement.scss';
import { Link } from "react-router-dom";

const Statements: FunctionComponent = () => {
    const { statements, lang } = useSelector((state: RootState) => ({
        statements: state.report.statements,
        lang: state.settings.language
    }));
    const dispatch = useDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getStatements(100, 0));
    },[]);

    return(
        <div className='statement'>
            <div className='container'>
                <div className='container-inner'>
                    <h1 className="statement__title main-blue-text">{t("Statement")}</h1>
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>{t("Name")}</th>
                                {/* <th>{t("Short description")}</th> */}
                                <th>{t("Date")}</th>
                                <th>{t("File")}</th>
                                <th>{t("Link to statement")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                statements && statements.map((statement, index) => (
                                    <tr key={statement._id}>
                                        <td>{index + 1}</td>
                                        <td>{statement.name[lang]}</td>
                                        {/* <td>{statement.shortDescription[lang]}</td> */}
                                        <td>{moment(statement.createdAt).format('DD.MM.YYYY')}</td>
                                        <td>{statement.filePath ? 
                                            <a href={statement.filePath[lang]}>Yüklə</a> : t("Not found")}
                                        </td>
                                        <td> <Link to={`/statement/${statement._id}`}>{t("Link")}</Link> </td>
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

export default Statements;