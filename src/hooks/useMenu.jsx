// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])

    const {data: pets = [], isPending: loading, refetch} = useQuery({
        queryKey: ['pets'],
        queryFn: async() => {
            const res = await axiosPublic.get('/pets');
            return res.data;
        }
    })


    return [pets, loading, refetch]
};

export default useMenu;