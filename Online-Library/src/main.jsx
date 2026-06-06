import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from './components/NotFound.jsx';
import BookDetails from './components/BookDetails.jsx';
import AddBook from './components/AddBook.jsx';
import BrowseBook from './components/BrowseBook.jsx';
import BookList from './components/BookList.jsx';

import Home from './components/Home.jsx';


const appRouter = createBrowserRouter([


  {

    path: "/",
    element: <App />,

    children: [

      {

        path: "/",
        element: <Home />

      },

      {

        path: "/cart",
        element: <AddBook />

      },

      {

        path: "/book",
        element: <BookDetails />

      },

      {

        path: "/bookBrowse",
        element: <BrowseBook />

      }


    ],

    errorElement: <NotFound />

  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
