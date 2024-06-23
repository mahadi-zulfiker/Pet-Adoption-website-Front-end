import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const AllQueriesDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/pets/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    });

    return (
        <div className="lg:flex lg:flex-col md:flex-row justify-around py-8 gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div>
                    <div className="card py-3 bg-base-100 shadow-xl">
                        <figure><img className="mb-3 h-[300px] w-[350px]" src={item.pet_image} alt="Shoes" /></figure>
                        <div>
                            <p>pet_name: {item.pet_name}</p>
                            <p>pet_age: {item.pet_age}</p>
                            <p>pet_location: {item.pet_location}</p>
                            <p>pet_type: {item.pet_type}</p>
                        </div>
                        <div className="card-actions justify-between">
                            <Link to={`/adopt/${item._id}`}><button className="btn btn-primary">Adopt</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllQueriesDetails;