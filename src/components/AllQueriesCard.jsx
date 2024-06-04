import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const AllQueriesCard = () => {
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/pets`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    });
    return (
        <div className="gadgetContainer pt-10 grid md:grid-cols-3 gap-4 mt-8">
            {
                // eslint-disable-next-line no-unused-vars
                item?.map(p => (
                    <div key={p._id}>
                        <div className="card py-3 bg-base-100 shadow-xl">
                            <figure><img className="mb-3 h-[300px] w-[350px]" src={p.pet_image} alt="Shoes" /></figure>
                            <div>
                                <p>pet_name: {p.pet_name}</p>
                                <p>pet_age: {p.pet_age}</p>
                                <p>pet_location: {p.pet_location}</p>
                                <p>pet_type: {p.pet_type}</p>
                            </div>
                            <div className="card-actions justify-between">
                                <Link to={`/petDetails/${p._id}`}><button className="btn btn-primary">Adopt</button></Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllQueriesCard;