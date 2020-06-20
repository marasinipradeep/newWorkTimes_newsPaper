var APIkey = "sXJjTX28VxWlN0xRo56tG6oqqeaIZRjg";
var beginDate = "";
var endDate = "";
var searchTerm = "";


// https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20120101&end_date=20130101&q=trump&page=2&api-key=sXJjTX28VxWlN0xRo56tG6oqqeaIZRjg


$("#searchButton").on("click", function () {

  event.preventDefault();
  searchTerm = $("#searchTerm").val();
  console.log(searchTerm);

  beginDate = $("#startYear").val();
  console.log(beginDate);

  endDate = $("#endYear").val();
  console.log(endDate);

  var selectedNumber = $("#numberOfRecordsToRetrieve").val();
  console.log(selectedNumber);

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + beginDate + "&end_date=" + endDate + "&q=" + searchTerm + "&api-key=" + APIkey;
  console.log(queryURL);

  clearResults();

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (result) {
    console.log(result);

    for (var i = 0; i < selectedNumber; i++) {

      var article = $("<div>");

      var title = $("<h3>");
      title.text(i + ". " + result.response.docs[i].headline.main);

      var author = $("<p>");
      author.text(result.response.docs[i].byline.original);

      var link = $("<a>");
      link.append(title);
      link.attr("href", result.response.docs[i].web_url);

      var lineBreak = $("<hr>");

      article.append(link, author, lineBreak);
      article.addClass("articleDiv");
      $("#results").append(article);
    }
  });

});

$("#clearButton").on("click", clearResults);

function clearResults() {
  $("#results").empty();
}

