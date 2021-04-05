'use stript';

$(function(){
  // ハンバーガーメニュークリックイベント
  $('.hamburger-menu').click(function(){
    if($('.nav-sp').hasClass('open')){
      // ナビゲーション非表示
      $('.nav-sp').removeClass('open');
      // ハンバーガーメニューを元に戻す
      $(this).removeClass('open');
    }else{
      // ナビゲーションを表示
      $('.nav-sp').addClass('open');
      // ハンバーガーメニューを✖印に変更
      $(this).addClass('open');
    }
  });
});