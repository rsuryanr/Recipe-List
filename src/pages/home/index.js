import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item";
import './index.css'

export default function Home() {
    const { recipeList, loading } = useContext(GlobalContext);
    if (loading) return <div>Loading...! Please Wait</div>;
    return (
        <div className="home-container">
            {recipeList && recipeList.length > 0 ? (
                recipeList.map((t) => <RecipeItem item={t} />)
            ) : (
                <div>
                    <p className="large-msg">
                        Nothing to show...!
                    </p>
                </ div>
            )}
        </div>
    );
}