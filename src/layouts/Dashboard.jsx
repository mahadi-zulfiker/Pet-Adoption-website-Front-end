import { FaHome, FaSearch, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    const [isAdmin] = useAdmin();


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-500">
                <ul className="menu p-4 text-white">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allPets"><FaUsers></FaUsers>All Pets</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/adoptRequest"><FaHome></FaHome>Adopt Request</NavLink>
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider">-------------</div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/petListing"><FaSearch></FaSearch>Pets</NavLink>
                    </li>
                    <li>
                        <NavLink to='/addQueries'>
                            Add Pets
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/myQueries'>
                            my pets
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;