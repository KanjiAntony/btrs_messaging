import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './store/store';
import { Provider } from 'react-redux';
import App from './App';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Provider store={store}>
          <Routes>
            <Route path="/*" element={<App />}/>
          </Routes>
      </Provider>
    </BrowserRouter>
);
