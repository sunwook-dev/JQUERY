//p의 길이에서 div길이를 빼면 움직일 거리가 나옴
$(function () {
  $('div.label').click(function () { 
    const pWidth = $('div.speech p').outerWidth();
    const divWidth = $('#switcher').outerWidth();

    //console.log(pWidth + " : " + divWidth);
    const num = parseInt(pWidth) - parseInt(divWidth);

    //체인 걸기
    $('#switcher')
      .fadeTo('fast', 0.5)
      .animate({marginLeft: num }, 'slow')
      .fadeTo('fast', 1.0)
      .slideUp('slow', function () {
        $(this).css('background', 'red');
      })
      .slideDown('slow'); //체인을 끊을려면 ; 해주면됨
  });
});