// 'use strict';

$(document).ready(function() {

   $(window).onload = location.href="#home";

  //panelsnap
  $('#posts .panels').panelSnap({
    $menu: $('#posts #menu .menu')
  });

  $('#home .panels').panelSnap();

  $('#works .panels').panelSnap({
    $menu: $('#works #menu .menu')
  });

  $(document).scrollsnap({
      direction: 'x',
      snaps: '.snap',
      proximity: 1000,
      latency: 100
  });

  $('.intro .left .wrap:nth-child(1) h1').on('click', function(){
    $(".intro .left .wrap:nth-child(1) p").addClass('cursor'),
    $(".intro .left .wrap:nth-child(1) p").typed({
      strings: ["is Jerome Braeken, born in 1991. My first stuffed animal whas a dog named \"Vlekkie\"."],
      typeSpeed: 0,
      showCursor: false
    });
  });

  $('.intro .left .wrap:nth-child(2) h1').on('click',function(){
    $(".intro .left .wrap:nth-child(2) p").addClass('cursor'),
    $(".intro .left .wrap:nth-child(2) p").typed({
      strings: ["raised in Maastricht(NL). Close to both Belgium and Germany. We are a chauvinistic kind of people. Proud and strong."],
      typeSpeed: 0,
      showCursor: false
    });
  });

  $('.intro .right .wrap:nth-child(1) h1').on('click', function(){
    $(".intro .right .wrap:nth-child(1) p").addClass('cursor'),
    $(".intro .right .wrap:nth-child(1) p").typed({
      strings: ["what I do? Making things is like a drug to me. It's even worse when people like it."],
      typeSpeed: 0,
      showCursor: true
    });
  });

  $('.intro .right .wrap:nth-child(2) h1').on('click', function(){
    $(".intro .right .wrap:nth-child(2) p").addClass('cursor'),
    $(".intro .right .wrap:nth-child(2) p").typed({
      strings: ["am studying Communication and Design at Zuyd Hogeschool in Maastricht. At the moment I am looking for a half year internship, starting from September. So hurry, winter is coming..."],
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

  $(document.links).filter(function() {
      return this.hostname != window.location.hostname;
  }).attr('target', '_blank');

});







