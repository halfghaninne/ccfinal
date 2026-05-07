let LAT;
let LON;
let CITY;
const SCREEN_W = 1920;
const SCREEN_H = 1080; 
const FILE_COUNT = 8; // hard-coded for this iteration, would involve more advanced JS bundling to load dynamically.


async function myOnload() {
    //console.log("UA data: ", navigator.userAgentData)
    //console.log("platform: ", navigator.platform)
    
    if ("geolocation" in navigator) {
        await navigator.geolocation.getCurrentPosition((position) => {
            LAT = position.coords.latitude;
            LON = position.coords.longitude;
            console.log(LAT, LON);
            setLocation(LAT, LON);
        });
    } else {
        console.log("PLEASE ALLOW BROWSER TO USE YOUR LOCATION :)")
    }
}

// async function loadPage() {
//     const currentPage = localStorage.getItem("count");
//     let data;
//     if (DATA[CITY][currentPage]) {
//         data = DATA[CITY][currentPage];
//         const el = document.getElementById("container")
//         el.innerHTML=data;
//     }
// }

async function onCascadeLoad() {
    const CURRENT = parseInt(localStorage.getItem("count"));
    const NEXT = CURRENT + 1;
    const CITY = localStorage.getItem("CITY");
    console.log("in onCascadeLoad, CITY: ", CITY);
    if (NEXT <= FILE_COUNT) {
        localStorage.setItem("count", NEXT.toString());
        const ms = DATA[CITY] ? DATA[CITY][NEXT.toString()]["loadInMs"] : 1000;

        setTimeout(() => openNextPage(NEXT), ms)
    }
}

async function openNextPage(pageCount) {
    const data = DATA[localStorage.getItem("CITY")][pageCount] || {};
    const width = data["width"] || "500";
    const height = data["height"] || "500";
    const left = data["left"] || Math.random() * (SCREEN_W - parseInt(width));
    const top = data["top"] || Math.random() * (SCREEN_H - parseInt(height));
    window.open(`./${pageCount}.html`, `Window${pageCount}`, config=`width=${width}, height=${height}, top=${top}, left=${left}`) // TODO open at a randomized location on screen
}

async function setLocation(lat, lon) {
    const url = `https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${LAT}&lon=${LON}&format=json&`
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            CITY = result.address.city
            console.log(CITY);
            localStorage.setItem("CITY", CITY);
        } catch (error) {
            console.error(error.message);
        };
}


async function startCascade() {
    localStorage.setItem("count", "1");

    // get data, using city name from local storage
    if (DATA[CITY]) {
        window.open(`./popups/start.html`, "_unfencedTop", "width=500, height=500, left=200, top=200");
    } else {
        el = document.getElementById("container")
        el.innerHTML = "<p>no data yet for your current location :(</p>"
    }  
}
