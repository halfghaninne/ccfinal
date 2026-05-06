let LAT;
let LON;
let CITY;
let FILE_COUNT = 8; // hard-coded for this iteration, would involve more advanced JS bundling to load dynamically.


async function myOnload() {
    console.log("beep!")
    
    console.log("UA data: ", navigator.userAgentData)
    console.log("platform: ", navigator.platform)
    
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
    const NEXT = parseInt(localStorage.getItem("count")) + 1;
    console.log("NEXT: ", NEXT);
    console.log("FILE_COUNT: ", FILE_COUNT);
    if (NEXT <= FILE_COUNT) {
        localStorage.setItem("count", NEXT.toString());
        setTimeout(() => openNextPage(NEXT), 3000)
        //setTimeout(() => {console.log('timeout fired!')}, 5000);
    }
}

async function openNextPage(pageCount) {
    // TODO dynamically set width, height and maybe top, left values based off of data
    const data = DATA[localStorage.getItem("CITY")][pageCount] || {};
    const width = data["width"] || "500";
    const height = data["height"] || "500";
    window.open(`./${pageCount}.html`, `Window${pageCount}`, config=`width=${width}, height=${height}`) // TODO open at a randomized location on screen
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
    // FOR NOW:
    localStorage.setItem("count", "1");
    console.log(localStorage.getItem("CITY"))
    

    // get data, using city name from local storage
    if (DATA[CITY]) {
        window.open(`./popups/start.html`, "_unfencedTop", "width=500, height=500, left=200, top=200");
    } else {
        el = document.getElementById("container")
        el.innerHTML = "<p>no data yet for your current location :(</p>"
    }
    // if no data for city 
        // load a message about no info yet
    // if data
        // start cascade
   
}
