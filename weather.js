const API_key ="5a76f2a3289491f586e01f5e4298bced";

function onGeoOk(position){
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    //console.log("you live in" + lat +" "+lon);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
    fetch(url).then(response => response.json().then(data => {
        const wc = document.querySelector("#weather span:first-child");
        const cc = document.querySelector("#weather span:last-child");
        cc.innerText = data.name;
        wc.innerText =` ${data.weather[0].main} / ${data.main.temp} `;
        

    }));
    
}
function onGeoError(){
    alert("cant find u");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);