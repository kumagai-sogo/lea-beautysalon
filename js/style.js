$(function(){
    $('.mv_slide').slick({
        autoplay:true,
        autoplaySpeed:5000,
        
    });
    
    $('.before_after_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
    });
    
    // スマホ版のみスライダー
    var treatmentSlider = $('.treatment_cont');
    var sliderFlag = false;
    
    $(window).on('load resize', function() {
        var width = $(window).width();
        
        if (width <= 768) {
            if (!sliderFlag) {
                sliderFlag = true;
                treatmentSlider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true,
                    autoplay: false,
                });
            }
        } else {
            if (sliderFlag) {
                treatmentSlider.slick('unslick');
                sliderFlag = false;
            }
        }
    });
});


//   アコーディオン
$(function() {
  $('.question').click(function () {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
  });
});

  //アニメーション
  function fadeAnime(){
    $('.fadein').each(function(){ //fadeUpTriggerというクラス名が
      // .mvセクション内の要素はスキップ（別途処理）
      if ($(this).closest('.mv').length > 0) {
        return;
      }
      var elemPos = $(this).offset().top+150;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('active');// 画面内に入ったらfadeUpというクラス名を追記
      }
      });
    $('.fadein2').each(function(){ //fadeUpTriggerというクラス名が
      // .mvセクション内の要素はスキップ（別途処理）
      if ($(this).closest('.mv').length > 0) {
        return;
      }
      var elemPos = $(this).offset().top+150;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('active');// 画面内に入ったらfadeUpというクラス名を追記
      }
      });
    $('.leftin').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+150;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('active');// 画面内に入ったらfadeUpというクラス名を追記
      }
      });
    $('.rightin').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top+150;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('active');// 画面内に入ったらfadeUpというクラス名を追記
      }
      });
  
  };
  
  // .mvセクションのアニメーション（ページ読み込み時に実行）
  function mvAnime(){
    // .mvセクション内の.fadeinと.fadein2要素にactiveクラスを追加
    $('.mv .fadein').each(function(index){
      var delay = index * 100; // 各要素を少しずつ遅らせる
      var $elem = $(this);
      setTimeout(function(){
        $elem.addClass('active');
      }, delay);
    });
    $('.mv .fadein2').each(function(index){
      var delay = (index + 1) * 150; // .fadeinより少し遅れて開始
      var $elem = $(this);
      setTimeout(function(){
        $elem.addClass('active');
      }, delay);
    });
  };
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    mvAnime(); // .mvセクションのアニメーションを先に実行
    fadeAnime();/* その他のアニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  
  // DOM読み込み完了時にも.mvアニメーションを実行（画像がまだ読み込まれていない場合でも）
  $(document).ready(function(){
    setTimeout(function(){
      mvAnime();
    }, 100);
  });


// floating_areaの追従（スマホ時はオフ）
$(window).on('scroll resize', function() {
    var width = $(window).width();
    var floatingArea = $('.floating_area');
    
    // スマホ時（768px以下）は追従機能をオフ
    if (width <= 768) {
        floatingArea.css({
            'position': 'relative',
            'top': 'auto',
            'bottom': 'auto'
        });
        return;
    }
    
    var scrollTop = $(window).scrollTop();
    var mvHeight = $('.mv').outerHeight();
    var contentsOffset = $('.contents').offset().top;
    var contentsMainHeight = $('.contents_main').outerHeight();
    var floatingHeight = floatingArea.outerHeight();
    
    // .mvの高さ分スクロールしたら追従開始
    if (scrollTop >= mvHeight) {
        // .contents_mainの終端に達したら追従を解除
        var stopPoint = contentsOffset + contentsMainHeight - floatingHeight;
        if (scrollTop >= stopPoint) {
            floatingArea.css({
                'position': 'absolute',
                'top': contentsMainHeight - floatingHeight + 'px',
                'bottom': 'auto'
            });
        } else {
            floatingArea.css({
                'position': 'fixed',
                'top': '0',
                'bottom': 'auto'
            });
        }
    } else {
        // .mvの高さより前は通常の位置
        floatingArea.css({
            'position': 'relative',
            'top': 'auto',
            'bottom': 'auto'
        });
    }
});