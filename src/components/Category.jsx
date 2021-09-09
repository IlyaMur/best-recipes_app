import { useEffect, useState } from "react";
import { getFilteredCategory } from "../api";
import { useParams } from "react-router-dom";
import { Preloader } from "../components/Preloader";

import { MealList } from "../components/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals ? <Preloader /> : <MealList meals={meals} />}</>;
}

export { Category };
