const prompt = require('prompt-sync')();
let nomeDoHeroi = prompt("Informe o nome do seu herói: ");
let xpDoHeroi = prompt("Informe a experiência do seu herói: ");
let nivelDoHeroi = "";
const textoXp = "Experiência (xp) atual do herói: " + xpDoHeroi;

if (xpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log("Xp atual: " + xpDoHeroi)

} else if (xpDoHeroi > 1000 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log(textoXp);

} else if (xpDoHeroi > 2000 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log(textoXp);

} else if (xpDoHeroi > 5000 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log(textoXp);

} else if (xpDoHeroi > 7000 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log(textoXp);

} else if (xpDoHeroi > 8000 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log(textoXp);

} else if (xpDoHeroi > 9000 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log(textoXp);

} else {
    nivelDoHeroi = "Radiante";
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}`);
    console.log(textoXp);

}
