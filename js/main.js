var $ = require("jquery");
var addToList = require("add-to-list");
var nav = require("nav")

$(function(){

  $(document).keydown(function(e){
    if (e.keyCode === 8) {
      $selectedListItemEl.parent().remove();
    }
  });

});
