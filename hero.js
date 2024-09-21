/// Dev: Victor Koga
// Date: 21/09/2024

// declarando as minhas variaveis
let nameHero = "Person"
let xpHero = "1000"

// função para ver qual o xp do héroi
function calculateHeroLevel(xpHero) {
  // passando uma condiçã if pegando o xp do heroi
  if (xpHero <= 1000) {
    return "Ferro"
  } else if (xpHero >= 1001 && xpHero <= 2000) {
    return "Bronze"
  } else if (xpHero >= 2001 && xpHero <= 5000) {
    return "Prata"
  } else if (xpHero >= 6001 && xpHero <= 7000) {
    return "Ouro"
  } else if (xpHero >= 7001 && xpHero <= 8000) {
    return "Platina"
  } else if (xpHero >= 8001 && xpHero <= 9000) {
    return "Ascendente"
  } else if (xpHero >= 9001 && xpHero <= 10000) {
    return "Imortal"
  } else {
    return "Hero Level 0"
  }  
}
// saída resultando os valores de XP do héroi
let levelHero = calculateHeroLevel(xpHero);
console.log("O herói de nome "+ nameHero + " esta no nível: " + levelHero);
