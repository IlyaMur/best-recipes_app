import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { useParams, useHistory } from "react-router-dom";
import { Preloader } from "../components/Preloader";

import { MealList } from "../components/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState();
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!meals ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
