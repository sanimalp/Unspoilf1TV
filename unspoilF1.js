function removeSpoilers() {
    [].forEach.call(document.querySelectorAll("[class^='podium-winner']"), function (er) {er.style.visibility = 'hidden';});
}

document.addEventListener('click', function () {
    console.log("running again!");
    removeSpoilers();
    console.log("spoilers removed");
});

document.addEventListener('DOMContentLoaded', function () {
    console.log("running again! dom content");
    removeSpoilers();
    console.log("spoilers removed dom content");
});

window.addEventListener('load', function() {
    console.log("running again! load");
    removeSpoilers();
    console.log("spoilers removed load");
});

//run intially, just in case! 
removeSpoilers();
