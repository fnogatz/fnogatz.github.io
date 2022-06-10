$(document).ready(function () {
  $("html").addClass("js-enabled");
  bibtexify("data/publications.bib", "pubTable", {
    datatable: {
      bFilter: false,
      bAutoWidth: false,
    },
  });

  bibtexify("data/teaching.bib", "teachTable", {
    datatable: {
      bFilter: false,
      bAutoWidth: false,
    },
  });

  // Display GitHub stats
  document.querySelectorAll("#projects .repo").forEach((repo) => {
    const repoUrl = repo.querySelector("a").getAttribute("href");
    const repoApiUrl = repoUrl.replace("github.com", "api.github.com/repos");
    fetch(repoApiUrl)
      .then((res) => res.json())
      .then(({ stargazers_count, forks_count }) => {
        if (stargazers_count) {
          repo.querySelector(".stars").textContent = stargazers_count;
        }

        if (forks_count) {
          repo.querySelector(".forks").textContent = forks_count;
        }
      });
  });

  $(".open-topics li").click(function (e) {
    $(this).toggleClass("open");
  });
});
