var $ = require("jquery");

 // $listEntryEl = $("[data-js='listEntry']");
var $todoListEl = $("[data-js='todoList']");
    $todoListItemEl = $("[data-js='listItem']");
    $selectedListItemEl = $();

// $listEntryEl.on("keyup", function(e){
this.prependList = function(todoText){
     // Append a new li to the list container element
       $todoListEl.prepend(`
          <li class="todo-list__item" data-js="listItem">
            <span class="checkmark" data-js="checkmark"> &#10003;</span>
            <p class="todo-list__item--text" data-js="listItemText">
          ${todoText}
           </p>
          </li>
         `);
    var $itemInputEl = $("[data-js='itemText']");
    var $itemCount = $todoListEl.children().length;
    var $numOfItems = $("[data-js='numOfItems']")
      if($itemCount === 1){
        $numOfItems.text($itemCount + " item left")
      }
      else {
        $numOfItems.text($itemCount + " items left")
      }

   // end of if statement for 2 chars and return key
  }; // end of listEntryEl which creates listItemContainer


  $todoListEl.on("click", "[data-js='listItemText']" , function(e){
    $selectedListItemEl = $(e.target);
      });

// show checkmark and cross out item
    $todoListEl.on("click", "[data-js='checkmark']", function(e){
      $(e.target).toggleClass("checkmark__click");
      $(e.target).next($("[data-js='listItemText']")).toggleClass("todo-list__item--text-clicked");
    });
