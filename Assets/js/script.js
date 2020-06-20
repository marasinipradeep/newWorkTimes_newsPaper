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
  
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=" + beginDate + "&end_date=" + endDate + "&q=" + searchTerm + "&api-key=" + APIkey;
  console.log(queryURL);
  
  function callAjax() {
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (result) {
      console.log(result);
      for (var i = 0; i < result.response.docs.length; i += 2) {
  
        var result = response.response.docs;
        console.log(result);
        //   var article = $("<div>");
      }
    });
  }
  
  callAjax();
});


