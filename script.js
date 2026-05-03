let LAT;
let LON;
let CITY;

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
        } catch (error) {
            console.error(error.message);
        };
}


async function startCascade() {
    // FOR NOW:
    

    // console.log("firing function!");
    open(`./popups/template.html?city=${CITY}`, "_unfencedTop", "width=500, height=500, left=200, top=200");
}
