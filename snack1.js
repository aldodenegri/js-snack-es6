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
        let biciLeggera=biciObj[0];
        for(let i=1; i<biciObj.length;i++)//salto il primo che è già verificato dalla riga scritta sopra
        {
            if(biciObj[i].peso<biciLeggera.peso)
            {
                biciLeggera=biciObj[i];
            }
        }
        console.log(biciLeggera);
    return `
        <h2>Snack 1 - Bici più leggera</h2>
        <p>La bici più leggera è: <strong>${biciLeggera.nome}</strong> con ${biciLeggera.peso} kg</p>
    `;
}