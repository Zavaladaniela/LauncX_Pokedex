// fetch es el metodo de consulta a una Api

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    //una promesa es dara un resultado despues de terminar de procesar
    //con la programacion asincrona, no se sigue una cascada en vertical
    //una consulta a servidor es asincrona ya que 
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/rocket.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    
    })
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

function pokeMovimientos (){
    const movimientos = data.moves.value;
    console.log (movimientos);
    alert("hola");
}