let params = new URL(document.location.toString()).searchParams;
let weatherData = document.getElementById("wheather-data")

async function weatherLao(e){
    const search = params.get("search")
    weatherData.innerHTML = 'Loading...'
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=bb84e3e4e8054735845115923240208&q=${search}&aqi=no`)
const d = await data.json()
        weatherData.innerHTML = `<p>${d.location.name}</p><h3>${d.current.temp_c} degree celcius</h3>`
    }catch (error) {
        weatherData.innerHTML = `<p>The Location you have entered is incorrect please search again:(</p>`
    }

}

weatherLao()