import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Elements/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from './components/Pages/About/About';
import Main from './components/Pages/Main/Main';
import Footer from './components/Elements/Footer/Footer';
import './i18n';

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' exact component={Main} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;