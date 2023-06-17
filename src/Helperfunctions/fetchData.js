export const fetchRecipeList = async (searchkey, setData, setLoading) => {
  setLoading(true);
  console.log("loadinf fetch true");
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchkey}&key=e2dbf839-af46-4098-98e2-a308e5dc8ed7`
    );
    const data = await response.json();

    console.log("loadinf fetch false");
    if (!data.data) return;
    setData(data?.data?.recipes);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecipeDetail = async (id, setData, setLoading) => {
  setLoading(true);

  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=e2dbf839-af46-4098-98e2-a308e5dc8ed7`
    );
    const data = await response.json();

    if (!data.data) return;
    setData({
      id: data?.data?.recipe.id,
      ingredients: data?.data?.recipe.ingredients,
      image: data?.data?.recipe.image_url,
      publisher: data?.data?.recipe.publisher,
      title: data?.data?.recipe.title,
      source: data?.data?.recipe.source_url,
      servings: data?.data?.recipe.servings,
      cooking_time: data?.data?.recipe.cooking_time,
    });
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=e2dbf839-af46-4098-98e2-a308e5dc8ed7

// https://forkify-api.herokuapp.com/api/get?rId=47746
