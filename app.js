let API_KEY = "cfbc7fa527244fad3800277c2d29637c";



let input = document.getElementById("input");

let showDiv = document.getElementById("showDiv")

let searchData = async () => {

    try {

        showDiv.innerHTML = `<div class="spinner-border text-info spn" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
         let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`;
   
    let response = await fetch(API_URL);

    let data = await response.json();

    console.log(data);

    showData(data)
    } catch (error) {
        console.log(error);
        
    }
 
    

}

let setWeatherBackground = (condition) => {
  let body = document.body;

  switch (condition) {
    case "Clear":
      body.style.background = "linear-gradient(to bottom, #56ccf2, #2f80ed)";
      break;
    case "Clouds":
      body.style.background = "linear-gradient(to bottom, #bdc3c7, #2c3e50)";
      break;
    case "Rain":
      body.style.background = "linear-gradient(to bottom, #4b79a1, #283e51)";
      break;
    case "Drizzle":
      body.style.background = "linear-gradient(to bottom, #89f7fe, #66a6ff)";
      break;
    case "Thunderstorm":
      body.style.background = "linear-gradient(to bottom, #141e30, #243b55)";
      break;
    case "Snow":
      body.style.background = "linear-gradient(to bottom, #e0eafc, #cfdef3)";
      break;
    case "Mist":
    case "Haze":
    case "Fog":
      body.style.background = "linear-gradient(to bottom, #3a1c2d, #f9c5d1)";
      break;
    default:
      body.style.background = "linear-gradient(to bottom, #6dd5ed, #ffffff)";
  }
};

let showData = (data) => {



  if(data.cod == "404"){
    showDiv.innerHTML = `<h1 class="error">${data.message}</h1>`;
    let body = body.style.background = "linear-gradient(to bottom,  #6dd5ed, #ffffff) "
  } else{
    showDiv.innerHTML =   `<div class="show">

                <img src= "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

                <h2> ${data.weather[0].main}</h2>
                <h2>Temperature: ${data.main.temp}°C</h2>

                <h2>Feels Like: ${data.main.feels_like}°C</h2>

                <h2>Humidity: ${data.main.humidity}°C</h2>

                <h2>Maximum Temperature: ${data.main.temp_max}°C</h2>

                <h2>Minimun Temperature: ${data.main.temp_min}°C</h2>

                

                <h2> Wind:  Degree: ${data.wind.deg}° Speed: ${data.wind.speed}m/s</h2>
                
                <h2>Sunrise: ${data.sys.sunrise}</h2>

                <h2>Sunset: ${data.sys.sunset}</h2>
                
             </div>`


     setWeatherBackground(data.weather[0].main)
        
        }
    
}