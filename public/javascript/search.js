async function searchFormHandler(event) {
  event.preventDefault();

  const diet = document.querySelector("#search-diet").value.trim();

  if (diet) {
    const response = await fetch(`/api/recipes/diet/${diet}`, {
      method: "get",
    });

    if (response.ok) {
      console.log(response);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".diet-form")
  .addEventListener("submit", searchFormHandler);
