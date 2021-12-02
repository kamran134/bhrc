import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

import './i18n';
import { getVisitorId } from './redux/actions';
import { RootState } from './redux/reducers';
import MyRouter from './router';

const App: FunctionComponent<{}> = (props) => {
  const { visitorId } = useSelector((state: RootState) => ({
    visitorId: state.visitors.visitorId
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!visitorId) dispatch(getVisitorId());
  }, [dispatch, visitorId]);

  return (
    <MyRouter />
  );
}

export default App;