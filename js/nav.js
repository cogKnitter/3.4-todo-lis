var $ = require("jquery");


var $allNav = $("[data-js='allNav']");
    $activeNav = $("[data-js='activeNav']");
    $completedNav = $("[data-js='completedNav']");


    $completedNav.on("click", function(){
      console.log("should hide");
      $(".todo-list__item--text").parent().hide();
      $(".todo-list__item--text-clicked").parent().show();
    });

    $activeNav.on("click", function(){
      console.log("should show");
      $(".todo-list__item--text").parent().show();
      $(".todo-list__item--text-clicked").parent().hide();
    });

    $allNav.on("click", function(){
      $(".todo-list__item").show();
    });
