

// movements counter
function counter() {
    for (var i = 1; i <= 42; i++) {
        if (i % 2 = 0) {
            redField();
            i++;
        } else {
            blueField();
            i++;
        }
    };
};


//##############################################################
//##############################################################

// function adds class with red circle
function redField() {
  $(document).ready(function() {
    $(this).click(function() {
      field_id = $(this).attr('id');
      $(field_id).toggleClass('red');
    });
  });
};

// function adds class with blue circle
function blueField() {
  $(document).ready(function() {
    $(this).click(function() {
      field_id = $(this).attr('id');
      $('#' + field_id).toggleClass('blue');
    });
  });
};

blueField();
redField();


// $(document).ready(function() {
//   $(this).click(function() {
//     $('#1').toggleClass('blue');
//   });
// });
