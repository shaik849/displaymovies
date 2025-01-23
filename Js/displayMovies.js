const movieGrid = document.getElementById("movieGrid");
const sortSelect = document.getElementById("sort");
const filterInput = document.getElementById("filter");
const applyFilterBtn = document.getElementById("applyFilter");

let movies = [];

const fetchMovies = async () => {
  const res = await fetch("https://json-server-1fo4.onrender.com/movies");
  movies = await res.json();
  displayMovies(movies);
};

const displayMovies = (movies) => {
    movieGrid.innerHTML = "";
    movies.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");
      movieDiv.innerHTML = `
        <h3>${movie.name}</h3>
        <img src="${movie.image_url}" alt="${movie.name}" />
        <p>Release Year: ${movie.release_year}</p>
        <p>IMDb Rating: ${movie.imdb_rating}</p>
      `;
      movieGrid.appendChild(movieDiv);
    });
  };
  

sortSelect.addEventListener("change", () => {
  const order = sortSelect.value;
  const sortedMovies = [...movies].sort((a, b) =>
    order === "asc" ? a.imdbRating - b.imdbRating : b.imdbRating - a.imdbRating
  );
  displayMovies(sortedMovies);
});

applyFilterBtn.addEventListener("click", (e) => {
    const year = parseInt(filterInput.value, 10);
    if (!year) {
      e.preventDefault();
      alert("Please select a valid year");
      return; // Stop further execution if input is invalid
    }
    const filteredMovies = movies.filter((movie) => movie.releaseYear > year);
    displayMovies(filteredMovies) ;
  });
  
 
fetchMovies();
