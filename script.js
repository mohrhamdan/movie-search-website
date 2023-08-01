$.ajax({
  url: "http://www.omdbapi.com/?apikey=62823513&s=avengers",
  success: (result) => {
    console.log(result);
  },
  errro: err => {
    console.log(err.responseText)
  }
});
