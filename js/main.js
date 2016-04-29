$(function(){

  var $listEntryEl = $("[data-js='listEntry']");
  var $todoListEl = $("[data-js='todoList']");
  var $itemInputEl = $("[data-js='itemText']");

  // $listEntryEl.on("click", function (e) {
  //   console.log(look at how well I work);
  // });


$listEntryEl.on("keyup", function(e){
     // Append a new li to the list container element
  var $el = $(e.target);
   console.log(e.keyCode)
    if(e.keyCode === 13){
       $todoListEl.prepend(`
         <span class="checkmark"> &#10003; <span>
         <span class="circle-check"> &#x25CB; <span>
         <li>
          <span class="itemContainer" data-js="changeItem">
         ${$el.val()}
          </span>
         </li>
         `);
        $el.val("");

    var $changeItem = $("[data-js='changeItem']")

      $changeItem.on("click", function(e){
        if(e.keyCode === 8){
            var $el = $(e.target);
            $el.parent().remove();
        };
      });
    };
  });

  // console.log(This works)
  // var $el = $(e.target);
  //
  // if(e.keycode === 13)
  //
  // $todoListEl.prepend(`
  //   <li>
  //   ${el.val()}
  //   </li>
  //   `);
  //   console.log($todoListEl);







});
