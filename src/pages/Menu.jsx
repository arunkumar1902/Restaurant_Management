import { useMemo } from "react";
import useFetch from "../hooks/useFetch";
import "../styles/Menu.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Menu() {
  const api = "https://dummyjson.com/recipes?limit=0";
  const { data, loading, error } = useFetch(api);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const cuisine = searchParams.get("cuisine") || "All";
  const mealType = searchParams.get("mealType") || "All";
  const sortBy = searchParams.get("sort") || "default";
  const recipes = data?.recipes || [];

  const cuisines = [
    "All",
    ...new Set(
      recipes.map((recipe) => recipe.cuisine)
    ),
  ];
  const mealTypes = [
    "All",
    ...new Set(
      recipes.flatMap(
        (recipe) => recipe.mealType || []
      )
    ),
  ];
  const updateSearchParams = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === "" || value === "All" || value === "default") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };
  const filteredRecipes = useMemo(() => {
    let result = [...recipes];
    if (search.trim()) {
      result = result.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (cuisine !== "All") {
      result = result.filter(
        (recipe) =>
          recipe.cuisine === cuisine
      );
    }
    if (mealType !== "All") {
      result = result.filter((recipe) => recipe.mealType?.includes(mealType));
    }
    if (sortBy === "rating-high") {
      result.sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === "rating-low") {
      result.sort((a, b) => a.rating - b.rating);
    }
    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [recipes, search, cuisine, mealType, sortBy]);

  if (loading) {
    return (
      <div className="menu-status">
        <h2>Loading menu...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="menu-status error">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <section className="menu-header">
        <p>Our Menu</p>
        <h1>Explore Our Delicious Food</h1>
        <span>Discover delicious recipes from around the world.</span>
      </section>

      <section className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => updateSearchParams("search", e.target.value)}
          />
        </div>

        <select value={cuisine} onChange={(e) => updateSearchParams("cuisine", e.target.value)}>
          {cuisines.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <select value={mealType} onChange={(e) => updateSearchParams("mealType", e.target.value)}>
          {mealTypes.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>

        <select value={sortBy} onChange={(e) => updateSearchParams("sort", e.target.value)}>
          <option value="default">Sort By</option>
          <option value="rating-high">Rating: High to Low</option>
          <option value="rating-low">Rating: Low to High</option>
          <option value="name">Name: A-Z</option>
        </select>
      </section>

      <div className="result-count">
        <p>Showing{" "}<strong>{filteredRecipes.length}</strong>{" "}dishes</p>
      </div>

      <section className="menu-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div className="menu-card" key={recipe.id} >
              <div className="menu-card-image">
                <img src={recipe.image} alt={recipe.name} />
                <span className="rating">⭐ {recipe.rating}</span>
              </div>

              <div className="menu-card-content">
                <span className="cuisine">{recipe.cuisine}</span>
                <h3>{recipe.name}</h3>

                <div className="meal-tags">
                  {recipe.mealType?.map((type) => (
                    <span key={type}>{type}</span>
                  ))}
                </div>

                <div className="card-footer">
                  <span className="difficulty">{recipe.difficulty}</span>
                  <button onClick={() => navigate(`/foodDetails/${recipe.id}`)}>View Details</button>
                </div>
              </div>
            </div>
          ))) : (

          <div className="no-results">
            <h2>No dishes found </h2>
            <p>Try changing your search or filters. </p>
          </div>

        )}
      </section>
    </div>

  );
}