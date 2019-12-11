import $ from 'jquery';

function creatHTML () {
    
}

function getDogImage(num, displayDog) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        for(let i = 0; i < num; i++) {
            responseJson.message[i];
        }
     

    
    } 
        
    );
  }

  function listenToInput() {
    $('.js-search-form').submit(event => {
      event.preventDefault();
      let num = $(input).val();
      getDogImages(num, displayDogSearchData);
    });
  }
  
  $(function() {
    console.log('App loaded! Waiting for submit!');
    listenToInput();
  }); 

  function displayDogSearchData(data) {
    const results = data.message.map((item, index) => displayResults(item));
    $('.js-results').html(results);
    
    $('.results').removeClass('hidden');
  }

  