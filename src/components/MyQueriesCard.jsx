import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const MyQueriesCard = () => {
    const { user } = useAuth() || {};
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/myQueries/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [user, control]);

    const handleDelete = (_id) => {
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
                fetch(`${import.meta.env.VITE_API_URL}/deleted/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setControl(!control)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        })

    };

    return (
        <div className="gadgetContainer pt-10 grid md:grid-cols-3 gap-4 mt-8">

            {
                // eslint-disable-next-line no-unused-vars
                item?.map(p => (
                    <div key={p._id}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={p.image} alt="Shoes" /></figure>
                            <div className="">
                                <h2 className="card-title">pet Name: {p.Product_Name}</h2>
                                <div className="text-white mb-1">
                                    <p>Pet location: {p.Product_Brand}</p>
                                    <p>pet age: {p.Boycotting_Reason_Details}</p>
                                    <p>pet location: {p.Query_Title}</p>
                                    <div className="flex">
                                        <p className="mt-3"> User name: {p.displayName}</p>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={p.photoURL} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-actions justify-between">
                                    <Link to={`/products/${p._id}`}><button className="btn btn-primary">Update</button></Link>
                                    <button onClick={() => handleDelete(p._id)} className="btn btn-secondary">Delete</button>
                                    <button>Adopted</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyQueriesCard;