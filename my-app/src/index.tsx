import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './text.css';

import Root from "./routes/root";
import ErrorPage from "./error-page";

import reportWebVitals from './reportWebVitals';
import Index from './routes';
import Photography from './routes/photography';
import Preparing from './routes/preparing';

const router = createBrowserRouter([
  {
    path: "/michellescat/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "d/artworks/",
        element: <Photography />,
      },
      {
        path: "d/frontend/",
        element: <Preparing />,
      },
      {
        path: "d/demos/",
        element: <Preparing />,
      },

    ],

  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
