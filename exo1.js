let scoresJoueur = [];

scoresJoueur.push(78, 95, 48, 63, 85);

console.table(scoresJoueur);

let note1 = scoresJoueur[0];
let note2 = scoresJoueur[1];
let note3 = scoresJoueur[2];
let note4 = scoresJoueur[3];
let note5 = scoresJoueur[4];

function moyenne(note1, note2, note3, note4, note5, result){
    return result = note1 + note2 + note3 + note4 + note5;
}
let result = note1 + note2 + note3 + note4 + note5;

// let somme = moyenne(scoresJoueur.forEach);

// let moyenneOk = somme / scoresJoueur.length;

let moy = result/scoresJoueur.length;

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