/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';
var developerPage = 'https://www.reddit.com/r/developer/.json';




$(document).ready(function(){

$.ajax({
  method: "GET",
  url: "https://www.reddit.com/.json",
  success: onSuccess,
});

// $.ajax({
//   method: "GET",
//   url: "https://www.reddit.com/r/developer/.json",
//   success: onSuccess,
// });


function onSuccess(json) {
  $('#content-box').empty();
  console.log(json);
  for (var i = 0; i < json.data.children.length; i++) {
    var homeTitle = json.data.children[i].data.title;
    var homeImage = json.data.children[i].data.preview.images["0"].resolutions["0"].url;
    var devTitle = json.data.children[i].data.title;

    var homePost = `<div class="row" id="boxes">
      <div class="col-md-3" id="story-image"><img src="${homeImage}"></div>
      <div class="col-md-6" id="story-title"><p>${homeTitle}</p></div>
      <div class="col-md-3" id="comments-share"><button>comment</button></div>
    </div>
    <hr>`

    $('#content-box').append(homePost);

  }
};


//
// $('#developer').on(click, developerPost(event) {
//   $('#content-box').empty();
//   event.preventDefault();
//   $.ajax({
//     method: "GET",
//     url: "https://www.reddit.com/r/developer/.json",
//     success: onSuccess,
//   });
// }
//
//   for (var i = 0; i < json.data.children.length; i++){
//     var devTitle = json.data.children[i].data.title;
//     var developerPost = `<div class="row" id="boxes">
//       <div class="col-md-9" id="story-title"><p>${devTitle}</p></div>
//       <div class="col-md-3" id="comments-share"><button>comment</button></div>
//     </div>
//     <hr>`
//
//     $('#content-box').append(developerPost);
//   }
//
// });
//




//end of document
});



/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */
