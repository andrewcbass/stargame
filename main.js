'use strict'

$(document).ready(init);

var rand;
var $stars = $('.stars');
var sumTot = 0;
var forceStr = 1;

function init() {

  $('.numbers').on('click', wingClick);
  $('#fire').on('click',fire);
  $('#force').on('click',force);
  $('#reset').on('click', reset);

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
  console.log('"A Jedi uses the Force for knowledge and defense, never for attack." - Yoda'); //egg

  var sum = 0;

  $('.selected').each(function(i, e) { //loss detection var could fix?
      sum += Number($('.selected').eq(i).text());
    });

  if(sum === rand) {
    $('.selected').addClass('used').removeClass('selected');
    randoStars();
    $('.miss').css('visibility', 'hidden');
    winDet(sum);
  }
  else {
    $('.selected').removeClass('selected');
    $('.miss').css('visibility', 'visible');
    lossDet(sum);
  }

}

function force() {
  console.log('"Wars not make one great." - Yoda'); //egg

  var forceR = $('span').html();
  if(forceR > 1) {
    $('.selected').removeClass('selected');
    forceR -= 1;
    $('span').html(forceR);
    $('.miss').css('visibility', 'hidden');
    randoStars();
  }
  else {
    $('.selected').removeClass('selected');
    forceR -= 1;
    $('span').html(forceR);
    $('.miss').css('visibility', 'hidden');
    $('.drain').css('visibility', 'visible');
    $('#force').off('click',force);
    randoStars();
    forceStr = 0;
  }
}


function winDet(sum) {
  sumTot += sum;

  if(sumTot === 45) {
      $stars.empty();
      $('.win').css('display', 'block');
      $('.numbers').on('click', wingClick);
      $('#fire').off('click',fire);

  }
  else {
    randoStars();
  }
}

function lossDet(sum) {  //is broken-ish
  if(sum + sumTot === 45 && forceStr === 0) {
    $stars.empty();
    $('.loss').css('display', 'block');
    $('.numbers').css('visibility', 'hidden');
    $('#fire').css('visibility', 'hidden');
    $('#force').css('visibility', 'hidden');

  }
}

function reset() {
  sumTot=0;
  forceStr=1;
  $('.miss').css('visibility', 'hidden');
  $('.loss').css('display', 'none');
  $('.win').css('display', 'none');
  $('.drain').css('visibility', 'hidden');
  $('.numbers').css('visibility', 'visible');
  $('#fire').css('visibility', 'visible');
  $('#force').css('visibility', 'visible');
  $('#force').on('click',force);

  $('span').html(3);
  randoStars();


}
























//her majesty's social request rjd2
