//step 1
// $(function () {
//   $('#switcher-large').on('click', function () {
//     $('body').addClass('large');
//   })
// })

//step 2
// Large print => large, Narrow column -> narrow, Default => 처음
// $(function (){
//   $('#switcher-large').on('click', function(){
//     $('body').removeClass('narrow').addClass('large');
//   })
//   $('#switcher-narrow').on('click', function(){
//     $('body').removeClass('large').addClass('narrow');
//   })
//   $('#switcher-default').on('click', function(){
//     $('body').removeClass('large narrow');
//   })
// });

//step 3 : 클릭한 버튼만 Selected 스타일 적용해보자
// $(function (){
//   $('#switcher-large').on('click', function(){
//     $('body').removeClass('narrow').addClass('large');
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//   })
//   $('#switcher-narrow').on('click', function(){
//     $('body').removeClass('large').addClass('narrow');
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//   })
//   $('#switcher-default').on('click', function(){
//     $('body').removeClass('large narrow');
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//   })
// });

//setp 4 : selected 관련 중복된 스타일 제거
// $(function (){
//   $('#switcher-large').on('click', function(){
//     $('body').removeClass('narrow').addClass('large');
//   })
//   $('#switcher-narrow').on('click', function(){
//     $('body').removeClass('large').addClass('narrow');
//   })
//   $('#switcher-default').on('click', function(){
//     $('body').removeClass('large narrow');
//   })
//   $('#switcher .button').on('click', function () {
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//   })
// });

//step 5 : 보다 더 최적화 된 코드로 변경
// $(function (){
//   $('#switcher .button').on('click', function () {
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//     $('body').removeClass();

//     //id값을 뽑을려면 자바스크립트의 id값을 뽑아야함
//     if (this.id === 'switcher-large') {
//       $('body').addClass('large');
//     }else if (this.id === 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//   })
// });

//step 6 : 이벤트 통합 함수 사용 => 개별 이벤트 함수로 변경
//on함수를 사용하는 이유 : 이벤트를 해제하기 위해서
// $(function (){
//   $('#switcher .button').click(function () {  //on함수를 click으로 변경
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//     $('body').removeClass();

//     //id값을 뽑을려면 자바스크립트의 id값을 뽑아야함
//     if (this.id === 'switcher-large') {
//       $('body').addClass('large');
//     }else if (this.id === 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//   })
// });

//step 7: hover 이벤트
$(function () {
  $('#switcher .button').hover(function () {
    $(this).addClass('hover');  //처음 hover시 호출되는 함수
  }, function () {
    $(this).removeClass('hover');  //마우스가 hover에서 빠져나갈때 호출되는 함수
  })
});

//step 8 : toggleClass를 사용
// $(function () {
//   $('#switcher h3').click(function () {
//     //toggleClass : 클래스가 있으면 없애고 없으면 추가하는 함수
//     $('#switcher .button').toggleClass('hidden');
//   });

//   $('#switcher .button').click(function () {  //on함수를 click으로 변경
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//     $('body').removeClass();

//     //id값을 뽑을려면 자바스크립트의 id값을 뽑아야함
//     if (this.id === 'switcher-large') {
//       $('body').addClass('large');
//     }else if (this.id === 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//   })
// });

//step 9 : 버블링 방지
// $(function () {
//   $('#switcher').click(function () {
//     //toggleClass : 클래스가 있으면 없애고 없으면 추가하는 함수
//     //위와 같이 실행하면 버블링 일어남.
//     $('#switcher .button').toggleClass('hidden');
//   });

//   $('#switcher .button').click(function (e) {  //on함수를 click으로 변경
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//     $('body').removeClass();

//     //id값을 뽑을려면 자바스크립트의 id값을 뽑아야함
//     if (this.id === 'switcher-large') {
//       $('body').addClass('large');
//     }else if (this.id === 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//     e.stopPropagation();  //버블링 방지(자식에서 부모로 이벤트 전파 방지)
//   })
// });

//step 10 : 이벤트 해제(이벤트가 여러개 있을떄 선택한 이벤트만 해제하고자 할때)
//클래스에 네임스페이스를 사용하여 이벤트를 구분할 수 있다.
// $(function () {
//   $('#switcher').on('click.kosa', function() {
//     //toggleClass : 클래스가 있으면 없애고 없으면 추가하는 함수
//     //위와 같이 실행하면 버블링 일어남.
//     $('#switcher .button').toggleClass('hidden');    
//   });

//   $('#switcher').on('click.kasa', function () {
//     alert('다른 이벤트 발생');
//   });

//   $('#switcher .button').click(function(e) {  //on함수를 click으로 변경
//     $('.button').removeClass('selected');
//     $(this).addClass('selected');
//     $('body').removeClass();

//     //id값을 뽑을려면 자바스크립트의 id값을 뽑아야함
//     if (this.id === 'switcher-large') {
//       $('body').addClass('large');
//     }else if (this.id === 'switcher-narrow') {
//       $('body').addClass('narrow');
//     }
//     e.stopPropagation();  //버블링 방지(자식에서 부모로 이벤트 전파 방지)  
//   })

//   $('#switcher-large, #switcher-narrow').click(function () {
//     $('#switcher').off('click.kosa');  //버튼 클릭시 이벤트 해제
//   });
// });

//step 11 : 트리거 이벤트 발생
$(function () {
  $('#switcher').on('click.kosa', function() {
    //toggleClass : 클래스가 있으면 없애고 없으면 추가하는 함수
    //위와 같이 실행하면 버블링 일어남.
    $('#switcher .button').toggleClass('hidden');    
  });

  $('#switcher .button').click(function(e) {  //on함수를 click으로 변경
    $('.button').removeClass('selected');
    $(this).addClass('selected');
    $('body').removeClass();

    //id값을 뽑을려면 자바스크립트의 id값을 뽑아야함
    if (this.id === 'switcher-large') {
      $('body').addClass('large');
    }else if (this.id === 'switcher-narrow') {
      $('body').addClass('narrow');
    }
    e.stopPropagation();  //버블링 방지(자식에서 부모로 이벤트 전파 방지)  
  })

  $('#switcher-large, #switcher-narrow').click(function () {
    $('#switcher').off('click.kosa');  //버튼 클릭시 이벤트 해제
  });

  $('#switcher').trigger('click.kosa');  //이벤트 발생
});