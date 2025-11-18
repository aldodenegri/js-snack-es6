export function scriviQualcosa1(){
    let biciObj=
        [
            {nome:"Mountain Bike",peso:"20"},
            {nome:"Bici Flash",peso:"15"}
        ];
        const nomeNuovo=prompt("Inserisci nome bici");
        const pesoNuovo=parseInt(prompt("Inserisci peso bici (in Kg)"));
        biciObj.push(
            {
                nome:nomeNuovo,
                peso:pesoNuovo
            }
        );
        console.log(biciObj);
    return "Ciao sono snack1";
}