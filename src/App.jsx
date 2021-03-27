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

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' exact component={Main} />
          <Route path='/activities' component={Activities} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;