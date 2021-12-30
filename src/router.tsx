import React, { FunctionComponent } from 'react';
import Header from './components/Elements/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import Footer from './components/Elements/Footer/Footer';
import Activities from './components/Pages/Activities/Activities';
import UrbanicaMain from './components/Pages/Urbanica/UrbanicaMain';
import UrbanicaHeader from './components/Elements/UrbanicaHeader/UrbanicaHeader';
import ProfileHeader from './components/Elements/ProfileHeader/ProfileHeader';
import ProfileMain from './components/Pages/Profile/ProfileMain';
import Resources from './components/Pages/Resources/Resources';
import Activity from './components/Pages/Activities/Activity';
import NewsHeader from './components/Elements/NewsHeader/NewsHeader';
import UrbanicaCompetition from './components/Pages/Urbanica/UrbanicaCompetition';
import AlertMessage from './components/UI/AlertMessage';
import StaticPage from './components/Pages/StaticPage/StaticPage';
import Statement from './components/Pages/Statements/Statement';
import Statements from './components/Pages/Statements/Statements';
import OrganizationDoc from './components/Pages/OrganizationDocs/OrganizationDoc';
import OrganizationDocs from './components/Pages/OrganizationDocs/OrganizationDocs';

const MyRouter: FunctionComponent<{}> = () => {
    return (
        <Router>
          <AlertMessage />
          <Switch>
            <Route path='/urbanica'>
              <UrbanicaHeader />
              <Switch>
                <Route path='/urbanica' exact component={UrbanicaMain} />
                <Route path='/urbanica/competition' component={UrbanicaCompetition} />
              </Switch>
            </Route>
            <Route path='/profile'>
              <ProfileHeader />
              <Switch>
                <Route path='/profile' exact component={ProfileMain} />
              </Switch>
            </Route>
            <Route path='/activities'>
              <NewsHeader />
              <Switch>
                <Route path='/activities/:id' component={Activity} />
                <Route path='/activities' component={Activities} />              
              </Switch>
            </Route>
            <Route>
              <Header/>
              <Switch>
                <Route path='/' exact component={Main} />
                <Route path='resources/:category/:topic' component={Resources} />
                <Route path='/resources' component={Resources} />
                <Route path='/organization-document/:id' component={OrganizationDoc} />
                <Route path='/organization-documents' component={OrganizationDocs} />
                <Route path='/statement/:id' component={Statement} />
                <Route path='/statements' component={Statements} />
                <Route path='/:page' component={StaticPage} />
              </Switch>
            </Route>
          </Switch>
          <Footer/>
      </Router>
    );
}

export default MyRouter;
