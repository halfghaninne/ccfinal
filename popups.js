const SEASON_HEX_CODES = {
    "spring":"#EDC8FF",
    "summer":"#FEA993",
    "fall":"#9C6D57",
    "winter":"#368BC1"
}

function getSeasonColor(month) {
    if (month < 2) {
        return SEASON_HEX_CODES["winter"]
    } else if (month < 5) {
        return SEASON_HEX_CODES["spring"]
    } else if (month < 8) {
        return SEASON_HEX_CODES["summer"]
    } else {
        return SEASON_HEX_CODES["fall"]
    }
};

async function initialCascade() {
    const now = Date.now();
    const dtObj = new Date(now)
    const body = document.getElementsByTagName("body")[0];
    const startMessage = document.getElementById("startMessage");
    body.style.backgroundColor = getSeasonColor(dtObj.getMonth());
    startMessage.style.display = "block";
    console.log('initial cascade fired')
    onCascadeLoad();
}

function logCitation(number) {
    const CITY = localStorage.getItem("CITY");
    if (DATA[CITY][number]["citation"]) {
        console.log(DATA[CITY][number]["citation"])
    }
}