//input
//on lick of btn grb the input frm user
//ask the internet to give me weat. det. of the city
//display that data in result in block


const city=document.getElementById("city")
const search=document.getElementById("search")

// async function for fetching weather details
async function fetchWeather(cityName){
let apiKey = "461ba7e70dd6098797e112428a75839e"

  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

try{

let response=await fetch(api)
let result = await response.json()

document.getElementById("temp").innerHTML=result.main.temp
        document.getElementById("max_temp").innerHTML=result.main.temp_max
        document.getElementById("min_temp").innerHTML=result.main.temp_min
        document.getElementById("humidity").innerHTML=result.main.humidity
}catch(error){
  console.log(error)
}
}



search.addEventListener("click", (e)=>{
 //grab inpt from city inpt fild
let cityName = city.value
  fetchWeather(cityName)
  
//ask open weath.api to give me weathr data of that city
  // let apiKey = "461ba7e70dd6098797e112428a75839e"

  // let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  // fetch(api)
  //   .then((response)=>{
  //     return response.json()
  //   })
  //     .then((response)=>{
  //       console.log(response)
  //       console.log(response.main.temp)
  //       document.getElementById("temp").innerHTML=response.main.temp
  //       document.getElementById("max_temp").innerHTML=response.main.temp_max
  //       document.getElementById("min_temp").innerHTML=response.main.temp_min
  //       document.getElementById("humidity").innerHTML=response.main.humidity
    
      
  //   })
  // .catch((error)=>{
  //   console.log(error)
  // })
  //disp data of that city
})


