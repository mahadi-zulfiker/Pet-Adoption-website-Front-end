import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateDonations = () => {

    const { id } = useParams();
    console.log(id);
    const [pet, setPet] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/singleDonation/${id}`)
            .then(res => res.json())
            .then(data => {
                setPet(data);
                console.log(data);
            })
    }, [id])

    const { user } = useAuth() || {};
    const handleUpdatePet = (e) => {
        e.preventDefault();

        const pet_name = e.target.pet_name.value;
        const pet_image = e.target.pet_image.value;
        const pet_age = e.target.pet_age.value;
        const pet_location = e.target.pet_location.value;
        const pet_type = e.target.pet_type.value;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;

        // console.log(name, price, image, type)

        const info2 = { displayName, pet_name, pet_image, pet_age, email, pet_location, pet_type, photoURL };

        fetch(`${import.meta.env.VITE_API_URL}/updateDonations/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info2)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    Swal.fire("Your Product has been Updated");
                }
            })

    };

    return (
        <div className="gadgetContainer py-10">
            <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
                {/* Heading */}
                <div className="mt-5 mb-8">
                    <p className="text-center text-3xl font-semibold">
                        <span className="mr-3 text-[#8049ff]">
                            <i className="bx bxs-alarm-add"></i>
                        </span>
                        <span className="dark:text-white">
                            <span className="text-[#8049ff]">
                                Update-
                            </span>
                            Your Pet
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleUpdatePet}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="Pet Name">
                                Pet Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="pet Name"
                                id="pet_name"
                                name="pet_name"
                                defaultValue={pet.pet_name}
                            />

                            <label className="block mb-2 dark:text-white" htmlFor="Product Name">
                                Product Brand
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="Product Brand"
                                id="Product_Brand"
                                name="pet_age"
                                defaultValue={pet.pet_age}
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                pet_type
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="Query_Title"
                                id="Query_Title"
                                name="pet_type"
                                defaultValue={pet.pet_type}
                            />

                        </div>
                        {/* Right side */}
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="image">
                                Image
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="Enter Image URL"
                                id="image"
                                name="pet_image"
                                defaultValue={pet.pet_image}
                            />
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="Boycotting_Reason_Details"
                            >
                                pet location
                            </label>
                            <input
                                name="Boycotting_Reason_Details"
                                id="Boycotting_Reason_Details"
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="pet_location"
                                defaultValue={pet.pet_location}
                            >
                            </input>
                        </div>
                    </div>



                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#4331ab]  bg-[#8049ff] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Update Pet"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateDonations;