const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=62823513&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const movies = response.Search;
      let cards = "";
      movies.forEach((m) => (cards += showCards(m)));
      const moviesContainer = document.querySelector(".container-cards");
      moviesContainer.innerHTML = cards;

      // keika tombol detail di-klik
      const modelDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      modelDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          // mengambil id"imdbid"
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=62823513&i=" + imdbid)
            .then((response) => response.json())
            .then((m) => {
              const mainContainerModal = document.querySelector(
                ".main-container-modal"
              );

              let cardModalBox = `<div class="container-modal-box">
              <div class="box-modal-card">
                                      <div class="up">
                                        <h2>Detail Movie</h3>
                                      </div>
                                      <div class="isi-content">
                                        <div class="left">
                                          <img src="${m.Poster}" alt="">
                                        </div>
                                        <div class="right">
                                          <h3>${m.Title}</h3>
                                          <p><span>Actors : </span> ${m.Actors}</p>
                                          <p><span>Writer : </span> ${m.Writer}</p>
                                          <p><span>Plot : </span> ${m.Plot}</p>
                                        </div>
                                      </div>
                                      <div class="down">
                                        <button class="close-btn">Close</button>
                                      </div>
                                  </div>
                                </div>`;

              mainContainerModal.innerHTML = cardModalBox;

              // membuat body tidak bisa discroll
              document.body.classList.add("modal-open");

              // Event listener untuk tombol "Close" di dalam modal box
              const closeButoon = document.querySelector(".close-btn");
              closeButoon.addEventListener("click", function (event) {
                const containerModalBox = document.querySelector(
                  ".container-modal-box"
                );

                if (event.target.classList.contains("close-btn")) {
                  containerModalBox.style.display = "none"; // Menyembunyikan modal saat tombol "Close" diklik

                  // Mengizinkan scrolling kembali pada elemen body ketika modal ditutup
                  document.body.classList.remove("modal-open");
                } else if (!containerModalBox.contains(event.target)) {
                  containerModalBox.style.display = "none"; // Menyembunyikan modal saat klik di luar modal

                  // Mengizinkan scrolling kembali pada elemen body ketika modal ditutup
                  document.body.classList.remove("modal-open");
                }
              });
            });
        });
      });
    });
});

function showCards(m) {
  return `  <div href="" class="card">
                        <div class="container-image">
                          <img src="${m.Poster}" alt="">
                        </div>
                        <div class="card-body">
                          <h3>${m.Title}</h3>
                          <p class="year">${m.Year}</p>
                          <a href="#" class="modal-detail-button" data-imdbid="${m.imdbID}">Show Detail</a>
                        </div>
                  </div>`;
}
