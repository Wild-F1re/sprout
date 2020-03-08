$(function() {
// skill hoverアクション
    $('.skill-item01__icon').hover(
        function(){
          $('.skill-item02__icon').fadeOut();
        },
        function(){
          $('.skill-item02__icon').fadeIn();
        }
        );

    $('.skill-item02__icon').hover(
        function(){
            $('.skill-item01__icon').fadeOut();
        },
        function(){
            $('.skill-item01__icon').fadeIn();
        }
        );

  });  