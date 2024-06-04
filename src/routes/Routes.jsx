import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import Register from '../pages/Authentication/Register'
import ErrorPage from '../pages/ErrorPage'
import AllQueries from '../pages/AllQueries'
import PrivateRoute from './PrivateRoute'
import AllQueriesDetails from '../pages/AllQueriesDetails'
import DonationDetails from '../pages/DonationDetails'
import AllDonations from '../pages/AllDonations'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Register />,
      },
      {
        path: '/petListing',
        element: <AllQueries />,
      },
      {
        path: "/petDetails/:id",
        element: (
          <PrivateRoute>
            <AllQueriesDetails></AllQueriesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/donationCampaigns',
        element: <AllDonations />,
      },
      {
        path: "/donationDetails/:id",
        element: (
          <PrivateRoute>
            <DonationDetails></DonationDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
])

export default router
