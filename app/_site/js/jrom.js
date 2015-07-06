// 'use strict';

$(document).ready(function() {

  //panelsnap
  $('#posts .panels').panelSnap({
    $menu: $('#posts #menu .menu')
  });

  $('#home .panels').panelSnap();

  $('#works .panels').panelSnap({
    $menu: $('#works #menu .menu')
  });

  //snapp
  $(document).scrollsnap({
      direction: 'x',
      snaps: '.snap',
      proximity: 1000,
      latency: 100
  });

    //typed
  $('.intro .left .wrap:nth-child(1) h1').on('click', function(){
    $(".intro .left .wrap:nth-child(1) p").addClass('cursor'),
    $(".intro .left .wrap:nth-child(1) p").typed({
      strings: ["is Jerome Braeken, born in 1991. What will happen next when I add a line."],
      typeSpeed: 0,
      showCursor: false
    });
  });

  $('.intro .left .wrap:nth-child(2) h1').on('click',function(){
    $(".intro .left .wrap:nth-child(2) p").addClass('cursor'),
    $(".intro .left .wrap:nth-child(2) p").typed({
      strings: ["raised in Maastricht. A city close to both Belgium and Germany."],
      typeSpeed: 0,
      showCursor: false
    });
  });

  $('.intro .right .wrap:nth-child(1) h1').on('click', function(){
    $(".intro .right .wrap:nth-child(1) p").addClass('cursor'),
    $(".intro .right .wrap:nth-child(1) p").typed({
      strings: ["what I do? Creating things is like a drug to me. It's even worse when people like it."],
      typeSpeed: 0,
      showCursor: true
    });
  });

  $('.intro .right .wrap:nth-child(2) h1').on('click', function(){
    $(".intro .right .wrap:nth-child(2) p").addClass('cursor'),
    $(".intro .right .wrap:nth-child(2) p").typed({
      strings: ["am studying CMD at Zuyd Hogeschool in Maastricht. Looking for a half year internship, starting from September."],
      typeSpeed: 0,
      showCursor: true
    });
  });

  $('.left .wrap:nth-child(1) h1').click(function(){
    $('.left .wrap:nth-child(1) h1 span.typed-cursor').css('display', 'none')
  });

  $('.left .wrap:nth-child(2) h1').click(function(){
    $('.left .wrap:nth-child(2) h1 span.typed-cursor').css('display', 'none')
  });

  $('.right .wrap:nth-child(1) h1').click(function(){
    $('.right .wrap:nth-child(1) h1 span.typed-cursor').css('display', 'none')
  });

  $('.right .wrap:nth-child(2) h1').click(function(){
    $('.right .wrap:nth-child(2) h1 span.typed-cursor').css('display', 'none')
  });
});







