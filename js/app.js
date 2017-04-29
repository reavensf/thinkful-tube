var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";
var YOUTUBE_API = 'AIzaSyCslYsWhIq7rs3tUgH92g6OSMi9W1ewZ0I';

var getDataFromApi = function (searchTerm, callback) {
  var settings = {
    part: 'snippet',
    key: YOUTUBE_API,
    q: searchTerm
  };
  $.getJSON(YOUTUBE_BASE_URL, settings, callback);
}

var displayYoutubeSearchData = function(data) {
    console.log(data);

    var resultElement = "";
    if (data.items) {
        data.items.forEach(function (item) {
            resultElement =  resultElement + "<p><a href = https://www.youtube.com/watch/?v=" + item.id.videoId +"><img src = "+item.snippet.thumbnails.medium.url+"></a></p>";         
        });
    }
    else {
        return "No results were found.";
    }
    $('.results').html(resultElement);
}


$(document).ready(function(){
    $('#searchThinkfulTube').submit(function(e) {
        e.preventDefault();

        var query = $('.searchInput').val();
        console.log(query);

        getDataFromApi(query, displayYoutubeSearchData);
    });
});