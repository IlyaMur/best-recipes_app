import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <div style={{ margin: "0 auto", maxWidth: "450px" }}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
          <h1 style={{ textAlign: "center" }}>{recipe.strMeal}</h1>
          <h4 style={{ textAlign: "center" }}>
            Category: {recipe.strCategory}
          </h4>
          {recipe.strArea ? <h6>Area: {recipe.strArea} </h6> : null}
          <p style={{ marginTop: "50px" }}>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div
              className="row"
              style={{ margin: "0 auto", maxWidth: "450px" }}
            >
              <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe:</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}

      <button className="btn" onClick={goBack}>
        Go back
      </button>
    </>
  );
}

export { Recipe };
