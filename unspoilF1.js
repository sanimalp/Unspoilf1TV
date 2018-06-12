function removeSpoilers() {
    [].forEach.call(document.querySelectorAll("[class^='podium-winner']"), function (er) {er.style.visibility = 'hidden';});

    [].forEach.call(document.querySelectorAll("[class^='gp-module__winner']"), function (er) {er.style.visibility = 'hidden';});
}

document.addEventListener('click', function () {
    console.log("running again!");
    removeSpoilers();
    console.log("spoilers removed");
});

document.addEventListener('DOMContentLoaded', function () {
    console.log("running again! dom");
    removeSpoilers();
    console.log("spoilers removed dom");
});


//run intially, just in case! 
removeSpoilers();
