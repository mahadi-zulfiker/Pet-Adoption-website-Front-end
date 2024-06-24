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
import AddQueries from '../pages/AddQueries'
import MyQueries from '../pages/MyQueries'
import UpdateQueries from '../pages/UpdateQueries'
import Adopt from '../pages/Adopt'
import AdoptRequest from '../pages/AdoptRequest'
import AllPets from '../pages/AllPets'
import UpdatePets from '../pages/UpdatePets'
import UpdateDonations from '../pages/UpdateDonations'
import AllDonationsAdmin from '../pages/AllDonationsAdmin'
import AddDonations from '../pages/AddDonations'
import MyDonations from '../pages/MyDonations'

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
      {
        path: '/myQueries',
        element: <PrivateRoute>
          <MyQueries></MyQueries>
        </PrivateRoute>,
      },
      {
        path: '/addQueries',
        element: <PrivateRoute>
          <AddQueries></AddQueries>
        </PrivateRoute>,
      },
      {
        path: '/adopt/:id',
        element: <PrivateRoute>
          <Adopt></Adopt>
        </PrivateRoute>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <UpdateQueries></UpdateQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/pets/:id",
        element: (
          <PrivateRoute>
            <UpdatePets></UpdatePets>
          </PrivateRoute>
        ),
      },
      {
        path: "/donations/:id",
        element: (
          <PrivateRoute>
            <UpdateDonations></UpdateDonations>
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
      {
        path: 'adoptRequest',
        element: <AdoptRequest></AdoptRequest>
      },
      {
        path: 'myQueries',
        element:
          <MyQueries></MyQueries>
      },
      {
        path: 'myDonations',
        element:
          <MyDonations></MyDonations>
      },
      {
        path: 'addQueries',
        element:
          <AddQueries></AddQueries>
      },
      {
        path: 'addDonations',
        element:
          <AddDonations></AddDonations>
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
      {
        path: 'allPets',
        element: <AdminRoute>
          <AllPets></AllPets>
        </AdminRoute>
      },
      {
        path: 'allDonations',
        element: <AdminRoute>
          <AllDonationsAdmin></AllDonationsAdmin>
        </AdminRoute>
      },
    ]
  }
]);

export default router
