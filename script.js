
let currenWeather = {
    apiKey : "",

    fetchWeather : function(cityName){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            return this.displayWeather(data)})
        .catch(error => {
            console.log(error)
        })
    },

    displayWeather : function(data){
        const {name} = data;
        const {country} = data.sys;
        const {temp} = data.main;
        const {icon, description} = data.weather[0];
        const {temp_max, temp_min} =data.main;
        const {pressure, humidity} = data.main;
        const {visibility} = data
        const {speed} = data.wind;
        const celsius = Math.round(temp-273.15);


        document.querySelector('.weatherdetails1').innerText = `${name}, ${country}`;

        document.querySelector('.weatherdetails2').innerText = `${celsius} °c`;
        document.querySelector('.weather-report').src = 'http://openweathermap.org/img/w/' + icon + '.png'

        document.querySelector('.description').innerText = `${description}`;
        document.querySelector('.weatherdetails4').innerHTML = `Max <br> ${temp_max} °K`;
        document.querySelector('.weatherdetails5').innerHTML = `Min <br> ${temp_min} °K`;
        document.querySelector('.weatherdetails6').innerHTML = `pressure <br> ${pressure}`;
        document.querySelector('.weatherdetails7').innerHTML = `Humidity <br> ${humidity}`;
        document.querySelector('.weatherdetails8').innerHTML = `WindSpeed <br> ${speed}km/h`;
        document.querySelector('.weatherdetails9').innerHTML = `Visibility <br> ${visibility}mt`;

        


    }
}



//currenWeather.fetchWeather('London')

document.querySelector('.search-btn').addEventListener('click', () => {
    const cityName= document.querySelector('.inputsearch').value;
    document.querySelector('.show').classList.add('weather');
    if(cityName === null || cityName === ""){
       alert('enter any city before proceeding')
    }

    else{
       currenWeather.fetchWeather(cityName);

    }
})