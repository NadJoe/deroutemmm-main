
function conversion(distance,rm,vx,vw,fob) {

   let monObjet = new Object();
    monObjet.distance = Number(distance.value);
    monObjet.rm = Number(rm.value);
    monObjet.vx = Number(vx.value);
    monObjet.vw = Number(vw.value);
    monObjet.fob = Number(fob.value);
    return monObjet;
   }



function calcule(objet){
    // console.log('distance ici'+distance.value);
    console.log('here sa marche'+ objet.distance);
}