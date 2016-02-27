'use strict'


$(document).ready(init);

var rand;
var $stars = $('.stars');
var sumTot = 0;
var forceStr = 1;

function init() {

  $('.numbers').click(wingClick);
  $('#fire').click(fire);
  $('#force').click(force);

  randoStars();
}

function randoStars() {
  $stars = $('.stars');
  $stars.empty();
  $('.miss').css('visibility', 'hidden');

  rand = Math.floor(Math.random() * 9) + 1;
  var arr =[];
  var $star;
  for(var i = 0; i < rand; i++) {
    var $image = $('<img>').attr('src', 'deathstar.ico');
    $star = $('<td>').addClass('star').append($image);
    arr.push($star);
  }
  
  $('.stars').append(arr);
}

function wingClick(event) {
  var slctSts = $(this).hasClass('selected');
  if(!slctSts) {
    $(this).addClass('selected');
  }

  else {
    $(this).removeClass('selected');
  }
}

function fire() {
  console.log('boom goes the dynamite');
  
  var sum = 0;
  
  $('.selected').each(function(i, e) {
      sum += Number($('.selected').eq(i).text());
    });
  console.log(sum);

  

  if(sum === rand) {
    $('.selected').addClass('used').removeClass('selected');
    randoStars();
    $('.miss').css('visibility', 'hidden');
    winDet(sum);
  }
  else {
    $('.selected').removeClass('selected');
    $('.miss').css('visibility', 'inherit');
    lossDet(sum);
  }

}

function force() {
  console.log('"Wars not make one great" - Yoda'); //egg
  
  var forceR = $('span').html();
  if(forceR > 0) {
    $('.selected').removeClass('selected');
    forceR -= 1;
    $('span').html(forceR);
    $('.miss').css('visibility', 'hidden');
    randoStars();
  }
  else {
    $('.drain').css('visibility', 'inherit');
    forceStr = 0;
  }
}


function winDet(sum) {
  sumTot += sum;
  if(sumTot === 45) {
      $stars.empty();
      $('.win').css('display', 'inherit');
  }
  else {
    randoStars();
  }
}

function lossDet(sum) {
  if(sum + sumTot === 45 && forceStr === 0) {
    $stars.empty();
    $('.loss').css('display', 'inherit');
  }
}
























//her majesty's social request rjd2