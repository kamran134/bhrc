import React, { FunctionComponent } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import Footer from './components/Elements/Footer/Footer';
import Activities from './components/Pages/Activities/Activities';
import UrbanicaMain from './components/Pages/Urbanica/UrbanicaMain';
import ProfileMain from './components/Pages/Profile/ProfileMain';
import Resources from './components/Pages/Resources/Resources';
import Activity from './components/Pages/Activities/Activity';
import UrbanicaCompetition from './components/Pages/Urbanica/UrbanicaCompetition';
import AlertMessage from './components/UI/AlertMessage';
import StaticPage from './components/Pages/StaticPage/StaticPage';
import Statement from './components/Pages/Statements/Statement';
import Statements from './components/Pages/Statements/Statements';
import OrganizationDoc from './components/Pages/OrganizationDocs/OrganizationDoc';
import OrganizationDocs from './components/Pages/OrganizationDocs/OrganizationDocs';
import Urbanica from './components/Pages/Urbanica/Urbanica';
import News from './components/Pages/Activities/News';
import Profile from './components/Pages/Profile/Profile';
import Default from './components/Pages/Default';

const MyRouter: FunctionComponent<{}> = () => {
    return (
        <>
            <AlertMessage />
            <Routes>
                <Route path='urbanica' element={<Urbanica />}>
                    <Route index element={<UrbanicaMain/>} />
                    <Route path='competition' element={<UrbanicaCompetition/>} />
                </Route>
                <Route path='profile' element={<Profile/>}>
                    <Route index element={<ProfileMain/>} />
                </Route>
                <Route path='activities' element={<News/>}>
                    <Route index element={<Activities/>} />
                    <Route path=':id' element={<Activity/>} />
                </Route>
                <Route path='/' element={<Default />}>
                    <Route index element={<Main/>} />
                    <Route path='resources/:category' element={<Resources/>} />
                    <Route path='resources' element={<Resources/>} />
                    <Route path='organization-document/:id' element={<OrganizationDoc/>} />
                    <Route path='organization-documents' element={<OrganizationDocs/>} />
                    <Route path='statement/:id' element={<Statement/>} />
                    <Route path='statements' element={<Statements/>} />
                    <Route path=':page' element={<StaticPage/>} />
                </Route>
            </Routes>
            <Footer/>
        </>
    );
}

export default MyRouter;
