import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AdoptRequest = () => {
    const axiosSecure = useAxiosSecure();
    const { data: adopt = [], refetch } = useQuery({
        queryKey: ['adopt'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adopt');
            return res.data;
        }
    });

    const handleMakeAdmin = adopt => {
        axiosSecure.patch(`/adopt/${adopt._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${adopt.Product_Name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = adopt => {
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
                axiosSecure.delete(`/adopt/${adopt._id}`)
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
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {adopt.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adopt.map((adopt, index) => <tr key={adopt._id}>
                                <th>{index + 1}</th>
                                <td>{adopt.Product_Name}</td>
                                <td>{adopt.email}</td>
                                <td>
                                    {adopt.role === 'pending' ? 'yes' :
                                        <button onClick={() => handleMakeAdmin(adopt)} className="btn btn-lg bg- bg-orange-500"><FaUsers className="text-white text-2xl"></FaUsers></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(adopt)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdoptRequest;