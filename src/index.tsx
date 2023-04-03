import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom"
import router from './routes/routes';
import StyleGlobal from './global/themes/StyleGlobal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleGlobal />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
