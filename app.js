var clicks = 0;


$(document).ready(function(){
  //create the Generate button
  generateButton();

  //listen for Generate button click
  $('.genButton').on('click', addRow);

  //count Generate button clicks
  $('.genButton').on('click', clickCount);

  //listen for Delete button click
  $('.container').on('click', '.delete', deleteRow);

  //listen for Change button click
  $('.container').on('click', '.normal', changeBackground);

});


//DOM functions

//add Generate button to the DOM
function generateButton() {
  $('.container').append('<button class="genButton">Generate</button>');

  //add container for clicks
  $('.container').append('<p class="pClick">Generate button click count: <span class="spClicks"></span></p>');
}



//add the row that contains the two buttons - Delete and Change
function addRow() {
  $('.container').append('<div class="normal"><div>');

  //add the two buttons as children of the div
  var $el = $('.normal').children().last();
  $el.append('<button class="delete">Delete</button>');
  $el.append('<button>Change</button>');
}

//delete the container div
function deleteRow() {
  $(this).parent().remove();
}

//change the background color
function changeBackground() {
 $(this).toggleClass('change');
}




//count clicks
function clickCount() {
  clicks += 1;
//add to DOM
  $('.spClicks').text(clicks);


}
