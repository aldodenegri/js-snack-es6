import { scriviQualcosa1 } from './snack1.js';
import { scriviQualcosa2 } from './snack2.js';

// Chiediamo all'utente quale snack vuole vedere
const scelta = prompt("Scrivi 1 per vedere lo Snack 1 (bici)\nScrivi 2 per vedere lo Snack 2 (squadre)\nScrivi entrambi per vedere tutti e due").toLowerCase();

// Variabile che conterrà il contenuto da stampare in pagina
let contenuto = "";

switch (scelta) {
    case "1":
        contenuto = scriviQualcosa1();  // esegue solo snack 1
        break;

    case "2":
        contenuto = scriviQualcosa2();  // esegue solo snack 2
        break;

    case "entrambi":
    case "tutti":
    case "both":
        contenuto = `
            ${scriviQualcosa1()}
            <hr style="margin: 40px 0;">
            ${scriviQualcosa2()}
        `;
        break;

    default:
        contenuto = `<h2 style="color: red;">Scelta non valida!</h2>
                     <p>Hai scritto: <strong>${scelta || "niente"}</strong><br>
                     Ricarica la pagina e scrivi 1, 2 oppure "entrambi"</p>`;
}

document.querySelector(".container").innerHTML = contenuto;