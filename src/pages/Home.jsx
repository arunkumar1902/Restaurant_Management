
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../styles/Home.css";

export default function Home() {
  const api = "https://dummyjson.com/recipes?limit=8";
  const { data, loading, error } = useFetch(api);
  const navigate = useNavigate();

  if (loading) {
    return <h2 className="status">Loading recipes...</h2>;
  }

  if (error) {
    return <h2 className="status error">{error}</h2>;
  }

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle"> Welcome to FoodieHub</p>
          <h1>Delicious Food, <br />Made With Love</h1>
          <p className="hero-description">Discover delicious dishes from around the world and enjoy your favorite meals.</p>
          <button className="explore-btn"><Link to="/menu">  Explore Menu</Link></button>
        </div>

        <div className="hero-image">
          <img src={data?.recipes?.[0]?.image} alt={data?.recipes?.[0]?.name} />
        </div>
      </section>

      <section className="popular-section">
        <div className="section-heading">
          <p>Our Menu</p>
          <h2>Popular Dishes</h2>
        </div>

        <div className="recipe-grid">
          {data?.recipes?.map((recipe) => (
            <div className="recipe-card" key={recipe.id} >
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              
              <div className="recipe-content">
                <span className="cuisine">{recipe.cuisine}</span>
                <h3>{recipe.name}</h3>

                <div className="recipe-info">
                  <span>⭐ {recipe.rating}</span>
                </div>

                <div className="recipe-footer">
                  <span className="difficulty">{recipe.difficulty}</span>
                  <button onClick={() => navigate(`/foodDetails/${recipe.id}`)}>View</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <p>Why Us?</p>
          <h2>Why Choose FoodieHub?</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Fresh Food</h3>
            <p>Fresh ingredients prepared with care.</p>
          </div>

          <div className="feature-card">
            <h3>Fast Service</h3>
            <p>Quick preparation and excellent service.</p>
          </div>

          <div className="feature-card">
            <h3>Quality</h3>
            <p>High quality food and great taste.</p>
          </div>

        </div>
      </section>
    </div>
  );
};
