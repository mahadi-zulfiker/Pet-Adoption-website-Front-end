import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllDonationsAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { data: donations = [], refetch } = useQuery({
        queryKey: ['donations'],
        queryFn: async () => {
            const res = await axiosSecure.get('/donations');
            return res.data;
        }
    });

    const handleMakeAdmin = donations => {
        axiosSecure.patch(`/donations/${donations._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${donations.Product_Name} is approved Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = donations => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/donations/${donations._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Donations</h2>
                <h2 className="text-3xl">Total Users: {donations.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Roll</th>
                            <th>Action</th>
                            <th>update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            donations.map((donations, index) => <tr key={donations._id}>
                                <th>{index + 1}</th>
                                <td>{donations.pet_name}</td>
                                <td>
                                    {donations.role === 'pending' ? 'yes' :
                                        <button onClick={() => handleMakeAdmin(donations)} className="btn btn-lg bg- bg-orange-500"><FaUsers className="text-white text-2xl"></FaUsers></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(donations)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </td>
                                <td>
                                    <td>
                                        <Link to={`/donations/${donations._id}`}><button className="btn btn-primary">Update</button></Link>
                                    </td>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllDonationsAdmin;