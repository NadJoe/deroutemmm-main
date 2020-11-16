
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

    let afficheObjet = new Object();

    

    fb1 = 0.55;
    vp = 110;
    alpha = (objet.rm)-(objet.vx);
    xm = objet.vw*fb1;
    d=xm*Math.sin(alpha);
    cm =objet.rm+d;
    ve = objet.vw*Math.cos(alpha);
    vt = objet.vw*Math.sin(alpha);  //const vt = vw+*sin(alpha)
    vs = vp-ve;
    fb2 = 60/vs;
    tav=fb2*objet.distance;
    tsv = fb1 *objet.distance;
    conso_L_h = 20;
    conso_L_min = (conso_L_h)/60;
    efuel = tav*(conso_L_min);

    console.log('conso_L_min = '+conso_L_min);  

    affichage();
}

function affichage(){
   // console.log('tsv = '+efuel); 

    document.getElementById('cm').value = cm;
    document.getElementById('vs').value = vs;
    document.getElementById('tav').value = tav;
    document.getElementById('efuel').value = efuel;

    console.log(vs);
    
}