'use strict';

let hornsArray = [];

$(function () {

  const addToTemplate = () => {
    $('#horns').empty();

    hornsArray.forEach(horn => {
      const template = $('#horns-template').html();
      const html = Mustache.render(template, horn);
      $('#horns').append(html)
    });

  }

  $('#one').on('click', () => {
    const ajaxSettings = {
      method: 'get',
      dataType: 'json'
    }
    $.ajax('data/page-1.json', ajaxSettings).then(horns => {
      horns.forEach(horn => {
        hornsArray.push(horn);
      });
      addToTemplate();
      hornsArray = [];
    });
    console.log(hornsArray);
  });


  $('#two').on('click', () => {
    const ajaxSettings = {
      method: 'get',
      dataType: 'json'
    }
    $.ajax('data/page-2.json', ajaxSettings).then(horns => {
      horns.forEach(horn => {
        hornsArray.push(horn);
      });
      addToTemplate();
      hornsArray = [];
    });
    console.log(hornsArray);
  });

});



