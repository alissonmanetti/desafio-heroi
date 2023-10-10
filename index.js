let nomeHeroi = "Multeck";
let experienciaHeroi = 1001;

if (experienciaHeroi <= 1000) {
  experienciaHeroi = "Ferro";
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
  experienciaHeroi = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
  experienciaHeroi = "Prata";
} else if (experienciaHeroi >= 6001 && experienciaHeroi <= 7000) {
  experienciaHeroi = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
  experienciaHeroi = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
  experienciaHeroi = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
  experienciaHeroi = "Imortal";
} else if (experienciaHeroi >= 10001) {
  experienciaHeroi = "Radiante";
}

console.log(
  `O Herói de nome ${nomeHeroi} está no nivel de ${experienciaHeroi}`
);
