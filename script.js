async function fetchWeatherCity(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=271d9d9a3c7a465c7a4236ca282fc028`;
const response =await fetch(url)
const data=await response.json();
console.log(data)
}
function fetchCity(){
	let cityName=document.getElementById("city_name");
	if(cityName.value==="")
	{
		alert("Enter a city name");
	}

else{
	fetchWeatherCity(cityName.value);
	cityName.value="";
}

}