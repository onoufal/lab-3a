'use strict';

const hornArrayOne = [];
const hornArrayTwo = [];
let optionsOne = [];
let optionsTwo = [];

$(function () {
  const ajaxSettings = {
    method: 'get',
    dataType: 'json'
  };

  //////// pull & render json 1 ////////////////////////

  $('#one').on('click', () => {
    $('#horns').empty();
    optionsOne = [];
    $('select').empty();
    $.ajax('data/page-1.json', ajaxSettings)
      .then(horns => {
        horns.forEach(horn => {
          const animal = new Horn(horn);
          hornArrayOne.push(animal);
          const template = $('#horns-template').html();
          const html = Mustache.render(template, horn);
          $('#horns').append(html);
          if (!optionsOne.includes(horn.keyword)) {
            optionsOne.push(horn.keyword)
          }
        });
        $('select').html(`<option value="default">Filter by Keyword</option>`);
        optionsOne.forEach(option => {
          $('select').append(`<option>${option}</option>`);
        });
      });
  });

  // console.log(hornArrayOne);

  //////// pull & render json 2 ////////////////////////

  $('#two').on('click', () => {
    $('#horns').empty();
    optionsTwo = [];
    $('select').empty();
    $.ajax('data/page-2.json', ajaxSettings)
      .then(horns => {
        horns.forEach(horn => {
          const animal = new Horn(horn);
          hornArrayTwo.push(animal);
          const template = $('#horns-template').html();
          const html = Mustache.render(template, horn);
          $('#horns').append(html);
          if (!(optionsTwo.includes(horn.keyword))) {
            optionsTwo.push(horn.keyword)
          }

        });
        $('select').html(`<option value="default">Filter by Keyword</option>`);
        optionsTwo.forEach(option => {
          $('select').append(`<option>${option}</option>`);
        });
      });
    console.log('before', hornArrayTwo);
  });

  //////// selecting an option ////////////////////////
  $('select').on('change', () => {
    $('#horns').empty();
    if (hornArrayOne) {
      hornArrayOne.forEach(horn => {
        if ($('select').val() === horn.keyword) {
          const template = $('#horns-template').html();
          const html = Mustache.render(template, horn);
          $('#horns').append(html);
        }
      });

    } else if (hornArrayTwo) {
      console.log('after', hornArrayTwo);
      hornArrayTwo.forEach(horn => {
        if ($('select').val() === horn.keyword) {
          const template = $('#horns-template').html();
          const html = Mustache.render(template, horn);
          $('#horns').append(html);
        }
      });

    }
  });




  // console.log(optionsOne);



  function Horn(object) {
    for (let key in object) {
      this[key] = object[key];
    }
  }


});



