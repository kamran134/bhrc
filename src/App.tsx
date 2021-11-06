import React, { FunctionComponent } from 'react';
import './App.scss';

import './i18n';
import MyRouter from './router';

const App: FunctionComponent<{}> = (props) => {
  return (
    <MyRouter />
  );
}

export default App;