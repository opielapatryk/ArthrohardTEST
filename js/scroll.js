let someElement = document.querySelector('whatever');

window.onscroll = function(){
    //TOP
    if(someElement.getBoundingClientRect().top <= 0){
        console.log("TRIGGER: top of div reached.");
    }
    //BOTTOM
    if(someElement.getBoundingClientRect().bottom <= 0){
        console.log("TRIGGER: bottom of div reached.");
    }
}