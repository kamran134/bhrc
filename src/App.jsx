import React from 'react';
import './App.scss';
import Header from './components/Elements/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import About from './components/Pages/About/About';
import Main from './components/Pages/Main/Main';
import Footer from './components/Elements/Footer/Footer';
import Activities from './components/Pages/Activities/Activities';
import './i18n';
import UrbanicaMain from './components/Pages/Urbanica/UrbanicaMain';
import UrbanicaHeader from './components/Elements/UrbanicaHeader/UrbanicaHeader';
import ProfileHeader from './components/Elements/ProfileHeader/ProfileHeader';
import ProfileMain from './components/Pages/Profile/ProfileMain';

function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route path='/urbanica'>
              <UrbanicaHeader />
              <Switch>
                <Route path='/urbanica' exact component={UrbanicaMain} />
              </Switch>
            </Route>
            <Route path='/profile'>
              <ProfileHeader />
              <Switch>
                <Route path='/profile' exact component={ProfileMain} />
              </Switch>
            </Route>
            <Route>
              <Header/>
              <Switch>
                <Route path='/' exact component={Main} />
                <Route path='/about' component={About} />
                <Route path='/activities' component={Activities} />
              </Switch>
            </Route>
          </Switch>
          <Footer/>
      </Router>
    </>
  );
}

export default App;