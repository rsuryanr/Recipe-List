import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";
import './index.css';

export default function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
    return (
        <div>
            <nav className="nav-container">
                <h2 className="brand-container">
                    <NavLink to={"/"}>FoodRecipe</NavLink>
                </h2>
                <form onSubmit={handleSubmit} className="search-form">
                    <input
                        type="text"
                        name="search"
                        value={searchParam}
                        onChange={(e) => setSearchParam(e.target.value)}
                        placeholder="Enter Items..."
                        className="search-input"
                    />
                </form>
                <ul className="nav-links">
                    <li className="nav-item">
                        <NavLink to={"/"} className="nav-link">
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/favorites"} className="nav-link">
                            Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
