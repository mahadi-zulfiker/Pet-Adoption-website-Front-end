import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UpdateQueries = () => {

    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(data);
            })
    }, [id])

    const { user } = useAuth() || {};
    const handleUpdateProduct = (e) => {
        e.preventDefault();

        const Product_Name = e.target.Product_Name.value;
        const image = e.target.image.value;
        const Product_Brand = e.target.Product_Brand.value;
        const Boycotting_Reason_Details = e.target.Boycotting_Reason_Details.value;
        const Query_Title = e.target.Query_Title.value;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;

        // console.log(name, price, image, type)

        const info = { displayName, Product_Name, image, Product_Brand, email, Boycotting_Reason_Details, Query_Title, photoURL };

        fetch(`${import.meta.env.VITE_API_URL}/updateProduct/${id}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount> 0) {
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
                            Your Product
                        </span>
                    </p>
                </div>
                {/* form */}
                <form onSubmit={handleUpdateProduct}>
                    <div className="flex gap-8 ">
                        <div className="flex-1">
                            <label className="block mb-2 dark:text-white" htmlFor="Product Name">
                                Product Name
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="Product Name"
                                id="Product_Name"
                                name="Product_Name"
                                defaultValue={product.Product_Name}
                            />

                            <label className="block mb-2 dark:text-white" htmlFor="Product Name">
                                Product Brand
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="Product Brand"
                                id="Product_Brand"
                                name="Product_Brand"
                                defaultValue={product.Product_Brand}
                            />

                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="price"
                            >
                                Query Title
                            </label>
                            <input
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="Query_Title"
                                id="Query_Title"
                                name="Query_Title"
                                defaultValue={product.Query_Title}
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
                                name="image"
                                defaultValue={product.image}
                            />
                            <label
                                className="block mt-4 mb-2 dark:text-white"
                                htmlFor="Boycotting_Reason_Details"
                            >
                                Boycotting Reason Details
                            </label>
                            <input
                                name="Boycotting_Reason_Details"
                                id="Boycotting_Reason_Details"
                                className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                                type="text"
                                placeholder="Boycotting_Reason_Details"
                                defaultValue={product.Boycotting_Reason_Details}
                            >
                            </input>
                        </div>
                    </div>



                    <input
                        className="px-4 w-full py-2 mt-4 rounded hover:bg-[#4331ab]  bg-[#8049ff] duration-200 text-white cursor-pointer font-semibold"
                        type="submit"
                        value="Update Product"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateQueries;