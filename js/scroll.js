let firstAnchor = document.getElementById('first-href');
let secondAnchor = document.getElementById('second-href');
let thirdAnchor = document.getElementById('third-href');

let firstline = document.getElementById('firstline');
let secondline = document.getElementById('secondline');
let thirdline = document.getElementById('thirdline');


window.onscroll = function(){
    if(firstAnchor.getBoundingClientRect().top >= 0) {
        firstline.style.visibility = "hidden";
        secondline.style.visibility = "hidden";
        thirdline.style.visibility = "hidden";

    } 
    if(firstAnchor.getBoundingClientRect().top <= 1) {
        firstline.style.visibility = "visible";
        secondline.style.visibility = "hidden";
        thirdline.style.visibility = "hidden";

    } 
    if(secondAnchor.getBoundingClientRect().top <= 0){
        firstline.style.visibility = "hidden";
        secondline.style.visibility = "visible";
        thirdline.style.visibility = "hidden";
    }
    if(thirdAnchor.getBoundingClientRect().top <= 0){
        firstline.style.visibility = "hidden";
        secondline.style.visibility = "hidden";
        thirdline.style.visibility = "visible";
    }
}