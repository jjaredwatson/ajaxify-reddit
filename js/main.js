/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var developerPage = 'https://www.reddit.com/r/developer/.json';

$(document).ready(function(){
  // load main page
  $.ajax({
    method: "GET",
    url: "https://www.reddit.com/.json",
    success: onHomeLoad
  });

// load dev page on dev button click
  $('#developer').on('click', function() {
    console.log("devbutton clicked.");
    $.ajax({
      method: "GET",
      url: "https://www.reddit.com/r/developer/.json",
      success: loadDevPage
    });
  });

});

function loadDevPage(json) {
  $('#content-box').empty();
  // console.log(json);
  for (var i = 0; i < json.data.children.length; i++) {
    var homeTitle = json.data.children[i].data.title;
    // var homeImage = json.data.children[i].data.preview.images[0].resolutions[0].url;
    // console.log(homeImage);
    var homePost = `<div class="row" id="boxes">
    <div class="col-md-6" id="story-title"><p>${homeTitle}</p></div>
    <div class="col-md-3" id="comments-share"><button>comment</button></div>
    </div>
    <hr>`;

    $('#content-box').append(homePost);

  }
};



function onHomeLoad(json) {
  $('#content-box').empty();
  // console.log(json);
  for (var i = 0; i < json.data.children.length; i++) {
    var homeTitle = json.data.children[i].data.title;
    var homeImage = json.data.children[i].data.preview.images[0].resolutions[0].url;
    // console.log(homeImage);
    var homePost = `<div class="row" id="boxes">
    <div class="col-md-3" id="story-image"><img src="${homeImage}"></div>
    <div class="col-md-6" id="story-title"><p>${homeTitle}</p></div>
    <div class="col-md-3" id="comments-share"><button>comment</button></div>
    </div>
    <hr>`;

    $('#content-box').append(homePost);

  }
};








/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */
