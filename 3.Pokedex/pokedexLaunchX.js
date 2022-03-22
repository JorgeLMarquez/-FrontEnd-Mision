const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors = {
	electric: '#F9BE08',
	normal: '#B09398',
	fire: '#FF675C',
	water: '#0596C7',
	ice: '#4D96FF',
	rock: '#999799',
	flying: '#65C18C',
	grass: '#4A9681',
	psychic: '#C65D7B',
	ghost: '#561D25',
	bug: '#5F7464',
	poison: '#795663',
	ground: '#D2B074',
	dragon: '#DA627D',
	steel: '#1D8A99',
	fighting: '#2F2F2F',
	default: '#2A1A1F',
};

const searchPokemon = event => {
	event.preventDefault();
	const {value} = event.target.pokemon;
	const url = `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`;
	fetch(url)
		.then(data => data.json())
		.then(response => renderPokemonData(response))
    .catch(err =>renderNotFound())
}

const renderPokemonData = data => {
	const sprite = data.sprites.front_default;
	const {
		stats,
		types
	} = data;

	pokeName.textContent = data.name;
	pokeImg.setAttribute('src', sprite);
	pokeId.textContent = `# ${data.id}`;

	setCardColor(types);
	renderPokemonTypes(types);
	renderPokemonStats(stats);
}

const setCardColor = types => {
	const colorOne = typeColors[types[0].type.name];
	const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
	pokeImg.style.background = `radial-gradient(${colorTwo}, ${colorOne})`;
}

const renderPokemonTypes = types => {
	pokeTypes.innerHTML = '';
	types.forEach(type => {
		const typeTextElement = document.createElement("article");
		typeTextElement.style.color = typeColors[type.type.name];
		typeTextElement.style.fontWeight = "bold";
		typeTextElement.textContent = type.type.name;
		pokeTypes.appendChild(typeTextElement);
	});
}

const renderPokemonStats = stats => {
	pokeStats.innerHTML = '';
	stats.forEach(stat => {
		const statElement = document.createElement("article");
		const statElementName = document.createElement("article");
		const statElementAmount = document.createElement("article");
		statElementName.textContent = stat.stat.name;
		statElementAmount.textContent = stat.base_stat;
		statElement.appendChild(statElementName);
		statElement.appendChild(statElementAmount);
		pokeStats.appendChild(statElement);
	});
}

const renderNotFound = () => {
    pokeName.textContent = 'No encontrado';
    pokeImg.setAttribute('src', 'pokemon-sad.gif');
    pokeImg.style.background =  '#fff';
    pokeTypes.innerHTML = '';
    pokeStats.innerHTML = '';
    pokeId.textContent = '';
}

/*const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
          console.log(res);
          pokeImage("./pokemon-sad.gif");
        }else{
          return res.json();
        }
    }).then((data) => {
       console.log(data);
       let pokeImg = data.sprites.front_default;
       console.log(pokeImg);
       pokeImage(pokeImg);
    })
}

//fetchPokemon();

const pokeImage = (url) => {
 const pokeImg = document.getElementById('pokeImg');
 pokeImg.src = url;
}

const imprimir = () => {
  const pokeName = document.getElementById('pokeName');
  let pokeInput = pokeName.value;
  console.log("Hola " + pokeInput);
}
*/
