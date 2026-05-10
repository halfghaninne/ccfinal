let LAT;
let LON;
let CITY;
const SCREEN_W = 1920;
const SCREEN_H = 1080; 
const FILE_COUNT = 16; // hard-coded for this iteration, would involve more advanced JS bundling to load dynamically.

async function proliferateStream(el) {
    const constraints = {
        audio: false,
        video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        const videoTracks = stream.getVideoTracks();
        stream.onremovetrack = () => {
            console.log("Stream ended");
        };
        el.srcObject = stream;
        el.style.display = "block";
    })
    .catch((error) => {
        if (error.name === "OverconstrainedError") {
            console.error(
                `The resolution ${constraints.video.width.exact}x${constraints.video.height.exact} px is not supported by your device.`,
            );
        } else if (error.name === "NotAllowedError") {
            console.error(
                "You need to grant this page permission to access your camera and microphone.",
            );
        } else {
            console.error(`getUserMedia error: ${error.name}`, error);
        }
    });
}
async function myOnload() {
    const video1 = document.querySelector("#video1");

    proliferateStream(video1);
    
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
    const CURRENT = parseInt(localStorage.getItem("count"));
    const NEXT = CURRENT + 1;
    const CITY = localStorage.getItem("CITY");
    //console.log("in onCascadeLoad, CITY: ", CITY);
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
    if (data["url"]) {
        window.open(`./${pageCount}.html`, `Window${pageCount}`, config=`width=170, height=128, top=${top}, left=${left}`);
        window.open(data["url"], `Window${pageCount}-url`, config=`width=${width}, height=${height}, top=${top}, left=${left}`);
    } else {
        window.open(`./${pageCount}.html`, `Window${pageCount}`, config=`width=${width}, height=${height}, top=${top}, left=${left}`);
    };
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
    document.querySelector("#cascadeTrigger").style.display = "none";

    const videoIds = ["#video1", "#video2", "#video3", "#video4", "#video5" ,"#video6", "#video7", "#startMessage"];
    const lastIndex = videoIds.length-1; 
    const int = 700;
    let promise = Promise.resolve();
    videoIds.forEach((id, i) => {
        promise = promise.then(() => {
            const el = document.querySelector(id);
            // show startMessage
            if (i === lastIndex) {
                el.style.display = "block";
                el.style.zIndex = `${lastIndex}`;
                // TODO -- make her blink?
            } else {
                proliferateStream(el);
            }
            return new Promise((resolve) => {
                setTimeout(resolve, int)
            })
        })
    })


    // get data, using city name from local storage
    setTimeout(() => {
        if (DATA[CITY]) {
            window.open(`./popups/start.html`, "_unfencedTop", "width=500, height=500, left=200, top=200");
        } else {
            el = document.getElementById("container")
            el.innerHTML = "<p>no data yet for your current location :(</p>"
        }  
    }, 7500)
    
}
