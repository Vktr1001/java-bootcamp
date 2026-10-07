alert("Hello 1001 Labs team! ");

console.log("This message is logged to the console from script.js.");

const team = {
    Isaac: "Scrum Master del equipo, estoy aqui para volverme desarrolldor Java",
    Joce: "Estoy explorando un nuevo camino profesional y quiero especializarme en front end.",
    Dani: "Soy parte del Scrum Team, y quiero desarrollar en la parte del Front",
    Cesar:  "Soy desarrollador de software y estoy aquí para generar un buen networking",
    Sergio: "Formo parte del equipo de desarrollo, Busco ser el comodín y ayudar a todos en el proyecto :D",
    LuisAngel: "Estoy aquí para convertirme en experto en desarrollo de software",
    Israel: "Programador, estoy aquí para volverme desarrollador Java Backend",
    Victor: "Backend Developer, estoy aquí para dominar el stack de Java",
    Anita: "está en el bootcamb de generation ya que le gustaría adquirir conocimientos nuevos para desarrollarlos en el mundo laboral",

}

let ask;

do{
 ask = prompt("Who are you?");
const answer = team
[ask];
if (answer) {
    alert(answer);
} else {
    alert("Sorry, I don't know you.");
}

} while (ask);