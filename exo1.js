const scoresJoueur = [];

scoresJoueur.push(78, 95, 48, 63, 85);

console.table(scoresJoueur);

const note1 = scoresJoueur[0];
const note2 = scoresJoueur[1];
const note3 = scoresJoueur[2];
const note4 = scoresJoueur[3];
const note5 = scoresJoueur[4];

//function moyenne(note1, note2, note3, note4, note5, result){
//    return result = note1 + note2 + note3 + note4 + note5;
//}
const result = note1 + note2 + note3 + note4 + note5;

// let somme = moyenne(scoresJoueur.forEach);

// let moyenneOk = somme / scoresJoueur.length;

const moy = result/scoresJoueur.length;

console.log(moy); // afficher la moyenne

let max = 0;

for (let i = 0; i < scoresJoueur.length; i++) {
    if(scoresJoueur[i] > max){
        max = scoresJoueur[i];
    }
    
   }

   console.log(max); // meilleur score


   for (let i = 0; i < scoresJoueur.length; i++) {
    
    if(scoresJoueur[i] < 50){
        console.log("Eleve numero " + i + " : insuffisant")
    } else if (scoresJoueur[i] < 64){
        console.log("Eleve numero " + i + " : passable")
    } else if (scoresJoueur[i] < 79){
        console.log("Eleve numero " + i + " : bien")
    } else if (scoresJoueur[i] < 89){
        console.log("Eleve numero " + i + " : très bien")
    } else
    console.log("Eleve numero " + i + " : excellent")
    
   }

   let insuf = 0;
   let passable = 0;
   let bien = 0;
   let tresbien = 0;
   let excellent = 0;



   function nombreMentions(scores) {

    for (let i = 0; i < scoresJoueur.length; i++) {

    
        if(scoresJoueur[i] < 50){
            insuf++;
            
        } else if (scoresJoueur[i] < 64){
            passable++;
            
        } else if (scoresJoueur[i] < 79){
            bien++;
            
        } else if (scoresJoueur[i] < 89){
            tresbien++;
            
        } else
        excellent++;
        
        
       }

        const mentionTab = [];
        mentionTab.push(insuf,passable,bien,tresbien,excellent);
        console.log("nombre d'eleve ayant eu la mention insuffisante : " + insuf);
        console.log("nombre d'eleve ayant eu la mention passable : " + passable);
        console.log("nombre d'eleve ayant eu la mention bien : " + bien);
        console.log("nombre d'eleve ayant eu la mention tres bien : " + tresbien);
        console.log("nombre d'eleve ayant eu la mention excellent : " + excellent);

       
        console.log(mentionTab);
   }
  
   nombreMentions(scoresJoueur);