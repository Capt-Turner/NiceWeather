const APIkey='62c1253fea8b7649895cb12bc8bd96c4';
const weathAPIrootUrl='https:/api.openweathermap.org';
const searchForm=document.querySelector('#search-form');
const searchInp=document.querySelector('#search-input');
const currWeathCol=document.querySelector('#current');
const forecastContainer=document.querySelector('#forecast');


dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


function displayCurrWeath(city,weather,timezone){
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
    currWeatherCol.innerHTML='';

    card.append(cardBod);
    cardBod.append(head,tempEl,windspdEl,humidEl,uviEl);
    currWeatherl.append(card);
}

function displayForecast(forecast,timezone){
    var unixTs=forecast.dt;
    var temp=forecast.temp.day;
    var {humid}=forecast;
    var windspd=forecast.wind_speed;

    var col=document.createElement('div');
    var card=document.createElement('div');
    var cardBod=document.createElement('div');
    var head=document.createElement('h4');
    var tempEl=document.createElement('p');
    var windspdEl=document.createElement('p');
    var humidEl=document.createElement('p');

    col.setAttribute('class','col-md pb-2 mx-2');
    card.setAttribute('class','card');
    cardBod.setAttribute('class','card-body');
    head.setAttribute('class','card-title');
    tempEl.setAttribute('class','card-text');
    windspdEl.setAttribute('class','card-text');
    humidEl.setAttribute('class','card-text');

    head.textContent=dayjs.unix(unixTs).tz(timezone).format('M/D/YYYY');
    tempEl.textContent=`Temperature: ${temp}°F`;
    windspdEl.textContent=`Wind: ${windspd} MPH`;
    humidEl.textContent=`Humidity: ${humidity}%`;
    forecastContainer.innerHTML='';

    col.append(card);
    card.append(cardBod);
    cardBod.append(head,tempEl,windspdEl,humidEl);
    forecastContainer.append(col);
}

function displayWeekForecast(dailyForecast,timezone){
    var startDate=dayjs().tz(timezone).add(1,'day').startOf('day').unix();
    var endDate=dayjs().tz(timezone).add(6,'day').startOf('day').unix();

    var col=document.createElement('div');
    var head=document.createElement('h4');

    col.setAttribute('class','col-10');
    head.textContent="--Weekly Forecast--";

    col.append(head);
    forecastContainer.append(col);
    for (let index = 0; index < dailyForecast.length; index++) {
        if(dailyForecast[index].dt >= startDate && dailyForecast[index] < endDate){
            displayForecast(dailyForecast[index],timezone);
        }; 
    }
}

function displayItems(city,data){
    displayCurrWeath(city,data.current,data.timezone);
    displayWeekForecast(data.daily,data.timezone);
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
    var {lon}=location;
    var city=location.name;
    var apiUrl=`${weathAPIrootUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIkey}`
    
    fetch(apiUrl)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            console.log(data);
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