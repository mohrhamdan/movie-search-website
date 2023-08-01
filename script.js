$.ajax({
  url: "http://www.omdbapi.com/?apikey=62823513&s=avengers",
  success: (result) => {
    const movies = result.Search;
    console.log(movies)
  },
  errro: (err) => {
    console.log(err.responseText);
  },
});
