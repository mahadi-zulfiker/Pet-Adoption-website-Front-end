import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const DonationDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/donations/${id}`)
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
                            <p>max_donation_amount: {item.max_donation_amount}</p>
                            <p>donated_amount: {item.donated_amount}</p>
                        </div>
                        <div className="card-actions justify-between">
                            <Link to={`/donationDetails/${item._id}`}><button className="btn btn-primary">Donate</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DonationDetails;