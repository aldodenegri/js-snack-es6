import { scriviQualcosa1 } from './snack1.js';
import { scriviQualcosa2 } from './snack2.js';
const txt1=scriviQualcosa1();
const txt2=scriviQualcosa2();
document.querySelector(".container").innerHTML=`<div>${txt1}</div><br><div>${txt2}</div>`;
