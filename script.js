let cityName=document.getElementById("city")
let temperature=document.getElementById("temp")
let humidity=document.getElementById("hum")
let windSpeed=document.getElementById("wind")
let icon=document.getElementById("icon")
let weather=document.getElementById("weather")

const fetchWeather=async()=>{
    const search=document.getElementById("search").value
    const response =
       await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search ? search : "delhi"}&appid=140630e06f4a431e18cd2a16c094e4b4&units=metric
`);
    

}

fetchWeather()
