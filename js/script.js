const APIkey='62c1253fea8b7649895cb12bc8bd96c4';
const weathAPIrootUrl='https:/api.openweathermap.org';
const searchForm=document.querySelector('#search-form');
const searchInp=document.querySelector('#search-input');
const currWeathCol=document.querySelector('#current');
const forecastContainer=document.querySelector('#forecast');
const testdata={
    "lat": 39.7392,
    "lon": -104.9849,
    "timezone": "America/Denver",
    "timezone_offset": -25200,
    "current": {
        "dt": 1669769335,
        "sunrise": 1669730407,
        "sunset": 1669765012,
        "temp": 19.02,
        "feels_like": 19.02,
        "pressure": 1016,
        "humidity": 73,
        "dew_point": 12.6,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 1.01,
        "wind_deg": 23,
        "wind_gust": 3,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ]
    },
    "daily": [
        {
            "dt": 1669744800,
            "sunrise": 1669730407,
            "sunset": 1669765012,
            "moonrise": 1669750200,
            "moonset": 1669788000,
            "moon_phase": 0.22,
            "temp": {
                "day": 21.58,
                "min": 19.02,
                "max": 26.85,
                "night": 20.98,
                "eve": 20.35,
                "morn": 20.93
            },
            "feels_like": {
                "day": 14.85,
                "night": 13.68,
                "eve": 13.71,
                "morn": 9.63
            },
            "pressure": 1017,
            "humidity": 69,
            "dew_point": 12.33,
            "wind_speed": 12.82,
            "wind_deg": 6,
            "wind_gust": 18.81,
            "weather": [
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13d"
                }
            ],
            "clouds": 100,
            "pop": 1,
            "snow": 4.26,
            "uvi": 2.18
        },
        {
            "dt": 1669831200,
            "sunrise": 1669816869,
            "sunset": 1669851394,
            "moonrise": 1669838400,
            "moonset": 0,
            "moon_phase": 0.25,
            "temp": {
                "day": 30.25,
                "min": 20.43,
                "max": 33.55,
                "night": 28.76,
                "eve": 27.93,
                "morn": 20.52
            },
            "feels_like": {
                "day": 30.25,
                "night": 28.76,
                "eve": 27.93,
                "morn": 20.52
            },
            "pressure": 1022,
            "humidity": 49,
            "dew_point": 13.01,
            "wind_speed": 5.26,
            "wind_deg": 176,
            "wind_gust": 8.39,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 2.79
        },
        {
            "dt": 1669917600,
            "sunrise": 1669903329,
            "sunset": 1669937778,
            "moonrise": 1669926300,
            "moonset": 1669878660,
            "moon_phase": 0.29,
            "temp": {
                "day": 41.99,
                "min": 29.41,
                "max": 45.12,
                "night": 36.9,
                "eve": 39.92,
                "morn": 30.33
            },
            "feels_like": {
                "day": 41.99,
                "night": 31.15,
                "eve": 39.92,
                "morn": 24.58
            },
            "pressure": 1008,
            "humidity": 55,
            "dew_point": 26.87,
            "wind_speed": 7.4,
            "wind_deg": 213,
            "wind_gust": 10.63,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 4,
            "pop": 0,
            "uvi": 2.24
        },
        {
            "dt": 1670004000,
            "sunrise": 1669989788,
            "sunset": 1670024164,
            "moonrise": 1670014140,
            "moonset": 1669969200,
            "moon_phase": 0.33,
            "temp": {
                "day": 50.92,
                "min": 29.34,
                "max": 50.92,
                "night": 29.34,
                "eve": 36.19,
                "morn": 40.77
            },
            "feels_like": {
                "day": 47.07,
                "night": 22.55,
                "eve": 26.13,
                "morn": 35.08
            },
            "pressure": 999,
            "humidity": 29,
            "dew_point": 19.92,
            "wind_speed": 22.1,
            "wind_deg": 326,
            "wind_gust": 38.86,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0.23,
            "uvi": 2.16
        },
        {
            "dt": 1670090400,
            "sunrise": 1670076246,
            "sunset": 1670110553,
            "moonrise": 1670101920,
            "moonset": 1670059560,
            "moon_phase": 0.36,
            "temp": {
                "day": 38.95,
                "min": 30.22,
                "max": 43.93,
                "night": 35.64,
                "eve": 39.65,
                "morn": 30.22
            },
            "feels_like": {
                "day": 38.95,
                "night": 31.44,
                "eve": 39.65,
                "morn": 30.22
            },
            "pressure": 1023,
            "humidity": 18,
            "dew_point": -1.43,
            "wind_speed": 6.87,
            "wind_deg": 127,
            "wind_gust": 11.63,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 2.02
        },
        {
            "dt": 1670176800,
            "sunrise": 1670162703,
            "sunset": 1670196943,
            "moonrise": 1670189760,
            "moonset": 1670149920,
            "moon_phase": 0.39,
            "temp": {
                "day": 45.88,
                "min": 34.9,
                "max": 52,
                "night": 40.75,
                "eve": 45.99,
                "morn": 34.9
            },
            "feels_like": {
                "day": 45.88,
                "night": 40.75,
                "eve": 45.99,
                "morn": 34.9
            },
            "pressure": 1009,
            "humidity": 26,
            "dew_point": 12.88,
            "wind_speed": 4.43,
            "wind_deg": 208,
            "wind_gust": 5.44,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0.15,
            "uvi": 3
        },
        {
            "dt": 1670263200,
            "sunrise": 1670249159,
            "sunset": 1670283336,
            "moonrise": 1670277780,
            "moonset": 1670240220,
            "moon_phase": 0.42,
            "temp": {
                "day": 46.02,
                "min": 34.03,
                "max": 46.02,
                "night": 34.03,
                "eve": 40.23,
                "morn": 36.79
            },
            "feels_like": {
                "day": 41.27,
                "night": 27.72,
                "eve": 38.5,
                "morn": 36.79
            },
            "pressure": 1004,
            "humidity": 21,
            "dew_point": 7.74,
            "wind_speed": 10.89,
            "wind_deg": 3,
            "wind_gust": 18.59,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "pop": 0.07,
            "uvi": 3
        },
        {
            "dt": 1670349600,
            "sunrise": 1670335613,
            "sunset": 1670369731,
            "moonrise": 1670366040,
            "moonset": 1670330580,
            "moon_phase": 0.46,
            "temp": {
                "day": 39.81,
                "min": 31.05,
                "max": 46.65,
                "night": 36.25,
                "eve": 41.97,
                "morn": 31.05
            },
            "feels_like": {
                "day": 37.78,
                "night": 31.95,
                "eve": 41.97,
                "morn": 27.23
            },
            "pressure": 1022,
            "humidity": 21,
            "dew_point": 2.48,
            "wind_speed": 7.56,
            "wind_deg": 153,
            "wind_gust": 14.45,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "pop": 0,
            "uvi": 3
        }
    ]
}


dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


function displayCurrWeath(city,weather,timezone){
    var date=dayjs.utc().tz(timezone).format('M/D/YYYY');
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
    humidEl.textContent=`Humidity: ${humid}%`;
    uviEl.textContent=`UV index: ${uvi}`;
    currWeathCol.innerHTML='';

    card.append(cardBod);
    cardBod.append(head,tempEl,windspdEl,humidEl,uviEl);
    currWeathCol.append(card);
}

function displayForecast(forecast,timezone){
    var unixTs=forecast.dt;
    var tempmin=forecast.temp.min;
    var tempmax=forecast.temp.max
    var humid=forecast.humidity;
    var windspd=forecast.wind_speed;

    var col=document.createElement('div');
    var card=document.createElement('div');
    var cardBod=document.createElement('div');
    var head=document.createElement('h4');
    var tempMaxEl=document.createElement('p');
    var tempMinEl=document.createElement('p');
    var windspdEl=document.createElement('p');
    var humidEl=document.createElement('p');

    col.setAttribute('class','col-md pb-2 mx-2');
    card.setAttribute('class','card');
    cardBod.setAttribute('class','card-body');
    head.setAttribute('class','card-title');
    tempMinEl.setAttribute('class','card-text');
    tempMaxEl.setAttribute('class','card-text');
    windspdEl.setAttribute('class','card-text');
    humidEl.setAttribute('class','card-text');

    head.textContent=dayjs.unix(unixTs).tz(timezone).format('M/D/YYYY');
    tempMinEl.textContent=`Low: ${tempmin}°F`;
    tempMaxEl.textContent=`High: ${tempmax}°F`;
    windspdEl.textContent=`Wind: ${windspd} MPH`;
    humidEl.textContent=`Humidity: ${humid}%`;

    col.append(card);
    card.append(cardBod);
    cardBod.append(head,tempMinEl,tempMaxEl,windspdEl,humidEl);
    forecastContainer.append(col);
}

function displayWeekForecast(dailyForecast,timezone){
    var startDate=dayjs.utc(timezone).tz().add(1,'day').startOf('day').unix();
    var endDate=dayjs.utc(timezone).tz().add(5,'day').startOf('day').unix();

    var col=document.createElement('div');
    var head=document.createElement('h4');

    col.setAttribute('class','col-12');
    head.textContent="--Weekly Forecast--";

    col.append(head);
    forecastContainer.append(col);
    for (let index = 0; index < 5; index++) {
        if(dailyForecast[index].dt >= startDate && dailyForecast[index] < endDate){
        }; 
        console.log("asdf");
        displayForecast(dailyForecast[index],timezone);
    }
}

function displayItems(city,data){
    displayCurrWeath(city,data.current,data.timezone);
    displayWeekForecast(data.daily,data.timezone);
    console.log("working?");
};

function fetchCoord(search){
    var apiUrl=`${weathAPIrootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${APIkey}`;

    fetchWeath();
    // fetch(apiUrl)
    //     .then(function(res){
    //         return res.json();
    //     })
    //     .then(function(data){
    //         if(!data[0]){
    //             alert('Location not found/invalid');
    //         } else{
    //             fetchWeath(data[0]);
    //         }
    //     })
    //     .catch(function(err){
    //         console.error(err);
    //     })


};

function fetchWeath(){
    var {lat}=location;
    var {lon}=location;
    var city=location.name;
    var apiUrl=`${weathAPIrootUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${APIkey}`
    
    // fetch(apiUrl)
    //     .then(function(res){
    //         return res.json();
    //     })
    //     .then(function(data){
    //         console.log(data);
    //         displayItems(city,data);
    //     })
    //     .catch(function(err){;
    //         console.error(err);
    //     });
    console.log(testdata);
    displayItems("Denver",testdata);
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