export function scriviQualcosa2(){
    let squadraObj =
        [
            { nome: "Inter", punti: "0",falli:"0"},
            { nome: "Juventus", punti: "0",falli:"0" }
        ];

    for(let i = 0; i<squadraObj.length;i++)
    {
        squadraObj[i].punti=Math.floor(Math.random() * 100) + 0;
        squadraObj[i].falli=Math.floor(Math.random() * 50 ) + 0;
    }
    let nomiSquadreObj=[""];
    for(let i = 0; i< squadraObj.length;i++)
    {
        nomiSquadreObj[i]=squadraObj[i].nome;
    }
    let scegliSquadra="";
    let nomeUguale = false
    do
    {
        
        scegliSquadra=prompt("Indica il nome della squadra della quale vuoi vedere i dati");
        for(let i=0;i<squadraObj.length;i++)
        {
            if(scegliSquadra===squadraObj[i].nome)
            {
                nomeUguale=true;
            }
        }
    }while( nomeUguale == false)
    let nomeOutput="";
    let puntiOutput="";
    let falliOutput="";

    for(let i=0;i<squadraObj.length;i++)
    {
        if(scegliSquadra===squadraObj[i].nome)
            {
                nomeOutput=squadraObj[i].nome;
                puntiOutput=squadraObj[i].punti;
                falliOutput=squadraObj[i].falli;
                break;
            }
    }


    return `
        <h2>Snack 1 - Bici più leggera</h2>
        <p>Squadra: <strong>${nomeOutput}</strong>, punti ${puntiOutput}, falli ${falliOutput}</p>
    `;
}