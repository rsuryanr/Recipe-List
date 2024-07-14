import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const GlobalContext = createContext(null);

// Creating an instance of Axios with a base URL
const axiosInstance = axios.create({
    baseURL: "https://forkify-api.herokuapp.com/api/v2/",
});

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true); // Set loading to true before making the request

            // Making a GET request using Axios
            const response = await axiosInstance.get(`/recipes?search=${searchParam}`);

            if (response.data?.data?.recipes) {
                setRecipeList(response.data.data.recipes);
                setSearchParam("");
                navigate('/');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false); // Set loading to false after request completes
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                setSearchParam,
                handleSubmit,
                loading,
                recipeList,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
