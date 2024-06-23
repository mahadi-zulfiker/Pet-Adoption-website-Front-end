import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllPets = () => {
    const axiosSecure = useAxiosSecure();
    const { data: pets = [], refetch } = useQuery({
        queryKey: ['pets'],
        queryFn: async () => {
            const res = await axiosSecure.get('/pets');
            return res.data;
        }
    });

    const handleMakeAdmin = pets => {
        axiosSecure.patch(`/pets/${pets._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${pets.Product_Name} is approved Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = pets => {
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
                axiosSecure.delete(`/adopt/${pets._id}`)
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
                <h2 className="text-3xl">Total Users: {pets.length}</h2>
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
                            <th>update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.map((pets, index) => <tr key={pets._id}>
                                <th>{index + 1}</th>
                                <td>{pets.Product_Name}</td>
                                <td>{pets.email}</td>
                                <td>
                                    {pets.role === 'pending' ? 'yes' :
                                        <button onClick={() => handleMakeAdmin(pets)} className="btn btn-lg bg- bg-orange-500"><FaUsers className="text-white text-2xl"></FaUsers></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(pets)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                                </td>
                                <td>
                                    <td>
                                        <Link to={`/products/${pets._id}`}><button className="btn btn-primary">Update</button></Link>
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

export default AllPets;