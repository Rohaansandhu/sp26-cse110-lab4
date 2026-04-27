function getCurrentDate() {
    let d = new Date();
    let time = d.toTimeString();
    console.log(time);
}

setInterval(getCurrentDate, 1000);
