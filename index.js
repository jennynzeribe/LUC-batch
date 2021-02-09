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
 var button = document.getElementById('load').addEventListener('click', function(){
     console.log(123);
 });


 // FETCH API

fetch('data.json').then((res)=>{
    return res.json();
}).then((resp)=>{
    console.log(resp)

let table = document.querySelector('#people tbody');
let dateGenerted = "#";
let trs="";
let count = 0;
let data = resp.response;
for (i = 0; i < data.length; i++){
    
    let tr ="<tr>"     
    td=`
       <td> ${++count}</td>
       <td> ${data[i].ownerName}</td>
       <td> ${data[i].folderrsn}</td>
        <td> ${data[i].billNumber}</td>
        <td> ${data[i].dateGenerted}</td>
        <td>${data[i].status} </td>
        <td>${data[i].path} <button type="submit"class="btn btn-primary"> &#10515; Download</button></td>`;
    tr+=td;
    tr+="</tr>";
    trs+=tr;
}
 
table.innerHTML=trs; 

$('#people').DataTable();

}).catch((err)=>{

})

// data.forEach(function(data){
//     // console.log(data);
// });

//$('#people').Datatable();
