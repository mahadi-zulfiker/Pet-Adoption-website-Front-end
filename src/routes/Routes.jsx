import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Login from '../pages/Authentication/Login'
import ErrorPage from '../pages/ErrorPage'
import AllQueries from '../pages/AllQueries'
import PrivateRoute from './PrivateRoute'
import AllQueriesDetails from '../pages/AllQueriesDetails'
import DonationDetails from '../pages/DonationDetails'
import AllDonations from '../pages/AllDonations'
import Dashboard from '../layouts/Dashboard'
import UserHome from '../pages/UserHome/UserHome'
import AllUsers from '../pages/AllUsers/AllUsers'
import SignUp from '../pages/Authentication/SignUp'
import AdminRoute from './AdminRoute'
import AdminHome from '../pages/AdminHome/AdminHome'

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
        element: <SignUp />,
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
  {
    path: 'dashboard',
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children: [
      // normal user routes
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      // admin routes
      {
        path: 'adminHome',
        element: <AdminRoute>
          <AdminHome></AdminHome>
        </AdminRoute>
      },
      {
        path: 'allUsers',
        element: <AdminRoute>
          <AllUsers></AllUsers>
        </AdminRoute>
      },
    ]
  }
]);

export default router
