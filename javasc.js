$(document).ready(function(){
reset();
$('.grid-box').hover(function()
  {
  $(this).addClass("class")
  })
});




          function gridSize(side)
          {
            for(var i = 0; i < side*side  ; i++)
                  {
                     $(".grid").append('<div id="grided" class="grid-box"></div>');
                   }
                   var w = 480 / side;
                    $('.grid-box').css('width' ,w+'px');
                    $('.grid-box').css('height' ,w+'px');
        }


        function deleteClass(){
          $('.grid-box').removeClass('class');
        }



        function reset(){
          var side = +prompt('Enter value bellow 50' );
          if(side <= 0 || side >= 50)
          {
            alert('set to default');
            side=16;
          }
          deleteClass();
          gridSize(side);
        }
