import React from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function RecipeItem({ item }) {
    return (
        <div className="recipe-item-container">
            <div>
                <img src={item.image_url} alt="item" className="recipe-item-image"></img>
            </div>
            <div>
                <span className="recipe-item-publisher">
                    {item.publisher}
                </span>
                <h3 className="recipe-item-title">
                    {item.title}
                </h3>
                <Link to={`/recipe-item/${item.id}`} className="recipe-item-link">
                    Recipe Details
                </Link>
            </div>
        </div>
    );
}
