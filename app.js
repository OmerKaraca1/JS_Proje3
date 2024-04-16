let geçenSaniye = 0;
let aralık = null;
const time = document.getElementById("time")

function padStart(değer) {
    return String(değer).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(geçenSaniye / 60)
    const seconds = geçenSaniye % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer() {
    geçenSaniye++;
    setTime()
}

function başlat() {
    if (aralık) durdur()
    aralık = setInterval(timer, 1000)
}

function durdur() {
    clearInterval(aralık)
}

function reset() {
    durdur()
    geçenSaniye = 0;
    setTime()
}