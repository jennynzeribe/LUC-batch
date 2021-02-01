let progressbar = document.querySelector('#progressbar');
let progress = document.querySelector('#progress');

let seconds = 50100/60;

let timer;

 let year = 100;
 let width = 5;
 let counter =60;

timer = setInterval(() => {

    
    width+=1.6;
    year += seconds;
    progress.innerHTML = year;
    progressbar.style.width=width+"%";   
    counter+=6;
    console.log(counter)
    if(counter == 420){
        clearInterval(timer);
        console.log("Here oooo");
    } 
}, seconds);
// var name = "Jenifer";

// const functiovarai = function(){
//     this.name ="Lolade";
//     this.age =22;
//     console.log(this)
// }

// const isFullname = ()=>{
//     this.name ="Lolade";
//     this.age =22;
//     console.log(this);
// }

// functiovarai();

// isFullname();

// functiovarai =function(){
//     console.log("Just testing");
// }

// functiovarai();
