import React from "react";
import Express from 'express';
import { createStore, applyMiddleware } from 'redux';
import { renderToString } from 'react-dom/server';
import { rootReducer } from './src/redux/reducers';
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import App from './src/App';

const app = Express();
const port = 3456;

app.use('/static', Express.static('static'));

function handleRender(req, res) {
    
    const store = createStore(rootReducer);

    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const preloadedState = store.getState();
    
    res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Bakı İnsan Hüquqları Klubu</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // https://redux.js.org/usage/server-rendering#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
                /</g,
                '\\u003c'
            )}
            </script>
            <script src="/static/bundle.js"></script>
        </body>
        </html>
    `
}

app.use(handleRender);

app.listen(port);