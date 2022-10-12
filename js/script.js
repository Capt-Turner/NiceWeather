const APIkey='';
const searchForm=document.querySelector('#search-form');
const searchInp=document.querySelector('#search-input');

function displayItems(city,data){
    displayCurrWeath();
    displayForecast();
};

function fetchWeath(location){
    var {lat}=location;
    var {lon}=location;
    var city=location.name;
    var apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}`
    
    fetch(apiUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            displayItems(city,data);
        })
        .catch(function(err){
            console.error(err);
        });
};