///////////******************  Recuperation des elements  *************//////////////////////////////////
const distance = document.getElementById('distance');
const rm = document.getElementById('rm');
const vx = document.getElementById('vx');
const vw = document.getElementById('vw');
const fob = document.getElementById('fob');



const inputs = document.querySelectorAll('.div-colonnes-1 ul li input');
const resultXm = document.getElementById('resultXm');


// console.log(inputs);
// console.log(distance,rm,vx,vw,fob);


///////////******************  declarations des variables *************//////////////////////////////////

let alpha;
let xm;
let d;
let ve;
let vt; 
let vp;
let fb1;
let fb2;
let tav;
let conso_L_h;
let conso_L_min;
let tsv;

let vs;
let cm;
let efuel;
console.log(rm.value);
console.log(vx.value);
///////////******************  calcule des composants *************//////////////////////////////////


//Outcm.value = cm;


calcule(conversion(distance,rm,vx,vw,fob));


/////////////////// apres chargement de la page/////////////////////
document.addEventListener('DOMContentLoaded', function() {
    console.log('HTML prêt !');
    read();
  });

function read(){
    // distance.value= sessionStorage.getItem('distance');
}

inputs.forEach(element => {
    element.addEventListener('click', function(e){
//  console.log(xm);
    });
});


document.addEventListener('keydown', function(e){
    if (e.code === 'Enter') {
 console.log(vw.value);
 console.log(xm);
 alpha = degrees_to_radians(alpha);
 console.log(alpha);
        
        console.log('lol');
        save();
resultXm.innerText = xm;
    }
});

var lol = 230;
var lol1 = degrees_to_radians(230);
console.log(lol);
console.log(lol1);


function degrees_to_radians(degree)
{
 var pi = Math.PI;
 return degree * (pi/180);
}

function save(){
sessionStorage.setItem('distance',distance.value) ;
sessionStorage.setItem('rm',rm.value) ;
sessionStorage.setItem('vx',vx.value) ;
sessionStorage.setItem('vw',vw.value) ;
sessionStorage.setItem('fob',fob.value);
}

// document.addEventListener('keydown', logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }


















// document.addEventListener('click', function () {
// resultRm = document.getElementById('rm').textContent;
// resultVx = document.getElementById('vx').textContent;
//     console.log(resultRm);
//     console.log(resultVx);
//     result = Number(resultRm) - Number(resultVx);
//     console.log('resultVx:', resultVx);
//     console.log('resultRm:', resultRm);
//     console.log('result:', result);
//    document.getElementById('testq').textContent = result; 
//    document.getElementById('testq').textContent = result; 

//     console.log(degrees_to_radians(result));
//     console.log(Math.round(Math.cos(degrees_to_radians(result))));

//     document.getElementById('test1').textContent = "Alpha Ɑ :"+ result;
//     document.getElementById('test2').textContent = "Sin : "+Math.round(Math.sin(degrees_to_radians(result)));
//     document.getElementById('test3').textContent = "Cos : "+Math.round(Math.cos(degrees_to_radians(result)));
// })

