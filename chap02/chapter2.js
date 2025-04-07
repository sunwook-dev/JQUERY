$(function() {
  $('#selected-plays > li').addClass('horizontal'); //id가 selected-plays인 li에 horizontal 클래스 추가
  $('li:not(.horizontal)').addClass('sub-level');

  $('a[href $= pdf]').addClass('pdflink');
  $('a[href ^= mailto]').addClass('mailto');
  
  $('a[href *= henry]').not('.mailto').addClass('henrylink');

  //$('tr:odd').addclass('alt');  //짝수번째 tr에 alt클래스 추가
  //$('tr:nth-child(odd)').addclass('alt'); //홀수번째 tr에 alt클래스 추가
  $('tr').filter(':odd').addClass('alt'); //홀수번째 tr에 alt클래스 추가

  //$('td:contains(Henry)').addClass('hightlight'); //td에 henry가 포함된 td에 highlight 클래스 추가
  //$('td:contains(Henry)').nextAll().andSelf().addClass('highlight');
  //henry가 포함된 td에서 parent로 tr로 올라가서 find로 td를 찾고 모든 td에 highlight 클래스 추가
  //$('td:contains(Henry)').parent().find('td').addClass('highlight');
  $('td:contains(Henry)').parent().find('td:first').addClass('highlight')//첫번째 td에게 스타일추가
  .end().find('td:eq(1)').addClass('highlight'); //두번째 td에게 스타일추가(eq인덱스는 0부터 시작)
});