import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/FoodDetails.css";
import { useCart } from "../context/CartContext";
import price from "../components/price";

export default function FoodDetails() {
  const {recipeId} = useParams();
  const { addToCart } = useCart();
  const { data: recipe, loading, error } = useFetch(recipeId ? `https://dummyjson.com/recipes/${recipeId}` : null);

  if (!recipeId) {
    return (
      <div className="details-status">
        <h2>Recipe ID is missing</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="details-status">
        <h2>Loading recipe...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="details-status error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="recipe-details">

      <div className="details-image">
        <img src={recipe.image} alt={recipe.name} />
      </div>

      <div className="details-content">
        <span className="details-cuisine">{recipe.cuisine}</span>
        <h1>{recipe.name}</h1>
        <h2 className="recipe-price">₹{price[recipe.id]}</h2>

        <div className="details-rating">⭐ {recipe.rating}
          <span>({recipe.reviewCount} reviews)</span>
        </div>

        <div className="details-info">
          <div><strong>Preparation Time: </strong>
            <span>{recipe.prepTimeMinutes} minutes</span>
          </div>

          <div>
            <strong>Cooking Time : </strong>
            <span>{recipe.cookTimeMinutes} minutes</span>
          </div>

          <div>
            <strong>Servings : </strong>
            <span>{recipe.servings}</span>
          </div>

          <div>
            <strong>Difficulty in Making : </strong>
            <span>{recipe.difficulty}</span>
          </div>

          <div>
            <strong>Calories : </strong>
            <span>{recipe.caloriesPerServing}{" "}cal / serving</span>
          </div>

        </div>

        <div className="details-section">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients?.map(
              (ingredient, index) => (
                <li key={index}>
                  {ingredient}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="details-section">
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions?.map(
              (instruction, index) => (
                <li key={index}>
                  {instruction}
                </li>
              )
            )}
          </ol>
        </div>

        <div className="details-tags">
          {recipe.tags?.map((tag) => (
            <span key={tag}>
              #{tag}
            </span>
          ))}
        </div>

        <button className="add-cart-btn" onClick={() => addToCart(recipe)}>Add to Cart</button>
      </div>
    </div>
  );
};