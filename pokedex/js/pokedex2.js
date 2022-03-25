const fetchPokemon = () => {
    const pokeName = document.getElementById ("pokeName");
    let pokeInput = pokeName.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch (url).then ((res)=>{
        //console.log (res);
        return res.json();
    }).then ((data) =>{
        console.log (data);
        /// con la data se manda a llamar la informacion del pokemon en cuestion
        let pokeImg= data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);

        let pokeSpecie = data.species.name; //consulta de la api
        console.log ("Especie: " + pokeSpecie); // imprimir en consola
        pokeSpecies ();

        let pokeId =data.id;
        console.log ("Id " + pokeId);

        let pokeMovimientos = data.moves.value;
        console.log ("Movimientos: " + pokeMovimientos);
        
        let pokeHabilidad = data.abilities.name;
        console.log("Habilidades: " + pokeHabilidad);
        
    })
    //PROMESA (.then (FUNCION A PROCESAR (RESPUESTA)))
    ///////// es decirle al equipo que la respuesta llegara, hasta que se 
    ///////// termine de procesar 
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
const pokeSpecies =() =>{
    const pokeSpecie = document.getElementById("spanpokeSpecie");
    //printLabel ('spanpokeSpecie',pokeSpecie);
}
 
/* const imprimir = () =>{
    const pokeName = document.getElementById ("pokeName");
    let pokeInput = pokeName.value;
    console.log (pokeInput);
}  */