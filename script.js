$.ajax({
  url: "http://www.omdbapi.com/?apikey=62823513&s=avengers",
  success: (result) => {
    const movies = result.Search;
    let cards = "";
    movies.forEach((m) => {
      cards += `  <a href="" class="card">
                    <div class="container-image">
                      <img src="${m.Poster}" alt="">
                    </div>
                    <div class="card-body">
                      <h3>${m.Title}</h3>
                      <p>${m.Year}</p>
                      <button class="show-detail">Show Detail</button>
                    </div>
                  </a>`;
    });
    $(".container-cards").html(cards);
  },
  errro: (err) => {
    console.log(err.responseText);
  },
});
