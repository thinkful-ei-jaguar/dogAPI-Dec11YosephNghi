import $ from 'jquery';

function createHTML(website) {
  // Append image element to UL
  $('.results').append(`
    <li><img src="${website}" width="200px"/></li>
  `);
}

function getDogImages(num) {
  // fetches # of images
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
  // Parse json body
    .then(response => response.json())
    // print # of images
    .then(responseJson => {
      for(let i = 0; i < num; i++) {
        createHTML(responseJson.message[i]);
      }
    });
}

function listenToInput() {
  // listens to when a submit takes place
  $('form').submit(event => {
    // prevents page from refreshing when submit
    event.preventDefault();
    // saves input
    let num = $('input').val();
    // print out # of images
    getDogImages(num);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  listenToInput();
}); 