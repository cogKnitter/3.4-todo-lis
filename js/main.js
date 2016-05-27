var $ = require("jquery");
var addToList = require("add-to-list");
var nav = require("nav")

$(function(){

  $(document).keydown(function(e){
    if (e.keyCode === 8) {
      $selectedListItemEl.parent().remove();
    }
  });
  var $listEntryEl = $("[data-js='listEntry']");

    $listEntryEl.on("keyup", function(e){
      var $el = $(e.target);
        if($el.val().length > 1 && e.keyCode === 13){
          addToList.prependList($el.val());
          $el.val("");
        };
    });

});
