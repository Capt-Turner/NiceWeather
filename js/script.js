const APIkey='62c1253fea8b7649895cb12bc8bd96c4';
const weathAPIrootUrl='https:/api.openweathermap.org';
const searchForm=document.querySelector('#search-form');
const searchInp=document.querySelector('#search-input');

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


function displayCurrWeath(){
    var date=dayjs().tz(timezone).format('M/D/YYYY');
    var temp=weather.temp;
    var windspd=weather.wind_speed;
    var humid=weather.humidity;
    var uvi=weather.uvi;

    var card=document.createElement('div');
    var cardBod=document.createElement('div');
    var head=document.createElement('h3');
    var tempEl=document.createElement('p');
    var windspdEl=document.createElement('p');
    var humidEl=document.createElement('p');
    var uviEl=document.createElement('p');
    

    card.setAttribute('class','card');
    cardBod.setAttribute('class','card-body');
    head.setAttribute('class','card-title');
    tempEl.setAttribute('class','card-text');
    windspdEl.setAttribute('class','card-text');
    humidEl.setAttribute('class','card-text');

    head.textContent=`${city} (${date})`;
    tempEl.textContent=`Temperature: ${temp}°F`;
    windspdEl.textContent=`Wind: ${windspd} MPH`;
    humidEl.textContent=`Humidity: ${humidity}%`;
    uviEl.textContent=`UV index: ${uvi}`;
    currWeatherContainter.innerHTML='';

    card.append(cardBod);
    cardBod.append(head,tempEl,windspdEl,humidEl,uviEl);
    currWeatherContainter.append(card);
}

function displayItems(city,data){
    displayCurrWeath();
    displayForecast();
};

function fetchCoord(search){
    var apiUrl=`${weathAPIrootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${APIkey}`;

    fetch(apiUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            if(!data[0]){
                alert('Location not found/invalid');
            } else{
                fetchWeath(data[0]);
            }
        })
        .catch(function(err){
            console.error(err);
        })
};

function fetchWeath(location){
    var {lat}=location;
    var {long}=location;
    var city=location.name;
    var apiUrl=`${weathAPIrootUrl}/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=minutely,hourly&appid=${APIkey}`
    
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

function handleSearchFormSubmit(event){
    if(!searchInp.value){
        return;
    }
    event.preventDefault();
    var search=searchInp.value.trim();
    fetchCoord(search);
    searchInp.value='';
};

searchForm.addEventListener('submit', handleSearchFormSubmit);