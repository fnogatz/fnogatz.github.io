$(document).ready(function () {
  $("html").addClass("js-enabled");
  bibtexify("publications.bib", "pubTable", {
    datatable: {
      bFilter: false,
    },
  });
});
