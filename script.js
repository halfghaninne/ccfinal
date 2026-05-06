let LAT;
let LON;
let CITY;
let FILE_COUNT = 33; // hard-coded for this iteration, would involve more advanced JS bundling to load dynamically.


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

async function onCascadeLoad() {
    const NEXT = parseInt(localStorage.getItem("count")) + 1;
    console.log("NEXT: ", NEXT);
    console.log("FILE_COUNT: ", FILE_COUNT);
    if (NEXT <= FILE_COUNT) {
        localStorage.setItem("count", NEXT.toString());
        setTimeout(() => openNextPage(NEXT), 1000)
        //setTimeout(() => {console.log('timeout fired!')}, 5000);
    }
}

async function openNextPage(pageCount) {
    
    window.open(`./${pageCount}.html`, `Window${pageCount}`, config=`width=500, height=500`) // TODO open at a randomized location on screen
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
    // if no data for city 
        // load a message about no info yet
    // if data
        // start cascade
    window.open(`./popups/start.html`, "_unfencedTop", "width=500, height=500, left=200, top=200");
}
