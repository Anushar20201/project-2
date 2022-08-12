//js file for posting a newrecipe
async function newFormHandler(event) {
  event.preventDefault();

  const recipe_name = document.querySelector("#recipename").value;
  const diet_type = document.querySelector("#diet").value;
  const ingredients = document.querySelector("#ingredients").value;
  const instructions = document.querySelector("#instructions").value;

  if (recipe_name && diet_type && ingredients && instructions) {
    const response = await fetch(`/api/recipes`, {
      method: "POST",
      body: JSON.stringify({
        recipe_name,
        diet_type,
        ingredients,
        instructions,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".recipe-form")
  .addEventListener("submit", newFormHandler);
