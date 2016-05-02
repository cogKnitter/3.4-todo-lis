$(function(){

  var $listEntryEl = $("[data-js='listEntry']");
  var $todoListEl = $("[data-js='todoList']");
  var $todoListItemEl = $("[data-js='listItem']");
  var $selectedListItemEl = $();
  var $allNav = $("[data-js='allNav']");
  var $activeNav = $("[data-js='activeNav']");
  var $completedNav = $("[data-js='completedNav']");

    var $deleteKey = false;
    $(document).keydown(function(e){
      if (e.keyCode === 8) {
        $selectedListItemEl.parent().remove();
      }
    });

$listEntryEl.on("keyup", function(e){
     // Append a new li to the list container element
  var $el = $(e.target);
    if($el.val().length > 1 && e.keyCode === 13){
       $todoListEl.prepend(`
          <li class="todo-list__item" data-js="listItem">
            <span class="checkmark" data-js="checkmark"> &#10003;</span>
            <p class="todo-list__item--text" data-js="listItemText">
          ${$el.val()}
           </p>
          </li>

         `);
        $el.val("");
    var $itemInputEl = $("[data-js='itemText']");
    var $itemCount = $($itemInputEl).length;
    var $numOfItems = $("[data-js='numOfItems']")
      if($itemCount === 1){
        $numOfItems.text($itemCount + " item left")
      }
      else {
        $numOfItems.text($itemCount + " items left")
      }

      var $listItemTextEl = $("[data-js='listItemText']")
      $todoListEl.on("click", "p" , function(e){
        $selectedListItemEl = $(e.target);
          });

      var $completeCheck = $("[data-js='checkmark']");
        $completeCheck.on("click", function(e){
          $(e.target).toggleClass("checkmark__click");
          $(e.target).next($("[data-js='listItemText']")).toggleClass("todo-list__item--text-clicked");
        });


    }; // end of if statement for 2 chars and return key
  }); // end of listEntryEl which creates listItemContainer


  $activeNav.on("click", function(e){
    $(".todo-list__item--text").parent().show();
    $(".todo-list__item--text-clicked").parent().hide();
  });

  $completedNav.on("click", function(e){
    $(".todo-list__item--text-").parent().hide();
    $(".todo-list__item--text-clicked").parent().show();
  });

  $allNav.on("click", function(e){
    $(".todo-list__item--text-clicked").parent().show();
    $(".todo-list__item--text-").parent().show();
  });


});
