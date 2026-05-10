// async function imageFadeIn() {
//     const topImage = document.getElementById("topImage");
//     const hiddenImage = document.getElementById("hiddenImage");

//     setTimeout(() => {

//     }, 3000)
// }

function logCitation(number) {
    const CITY = localStorage.getItem("CITY");
    if (DATA[CITY][number]["citation"]) {
        console.log(DATA[CITY][number]["citation"])
    }
}