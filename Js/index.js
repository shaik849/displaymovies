const form = document.getElementById("movieForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const movie = {
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    releaseYear: parseInt(document.getElementById("releaseYear").value, 10),
    imdbRating: parseFloat(document.getElementById("imdbRating").value),
  };

  await fetch("https://json-server-1fo4.onrender.com/movies", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  });

  form.reset();
  alert("Movie added successfully!");
});
