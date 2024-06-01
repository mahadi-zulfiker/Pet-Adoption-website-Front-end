import { useContext } from 'react'
import logo from '../assets/images/logo.jpg'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import darking from "../assets/images/dark.png";
import lighting from "../assets/images/light.png";
// eslint-disable-next-line react/prop-types
const Navbar = ({ setDarkMode, darkMode }) => {

  const { user, logOut } = useContext(AuthContext)

  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold'>ProductPulse</span>
        </Link>
      </div>
      <div className="w-[50px]">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className=" p-1 mr-3 flex items-center"
        >
          <img
            className="md:w-full   w-10 object-cover"
            src={darkMode ? lighting : darking}
            alt=""
          />
        </button>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/allQueries'>Queries</Link>
          </li>

          {!user && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/recommendationForMe' className='justify-between'>
                  Recommendations
                  For Me
                </Link>
              </li>
              <li>
                <Link to='/myQueries'>My Queries</Link>
              </li>
              <li>
                <Link to='/myRecommendation'>My recommendations</Link>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
