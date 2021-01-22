import Header from './Header'
import './App.css';
import PokemonButton from './PokemonButton';
import PokeContainer from './PokeContainer'
import { useState} from 'react';
import PokemonList from './PokemonList';

function App() {
  
  async function getPoke(){
    const id = Math.floor(Math.random() * 151)
    const  pokePromise = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      headers: {
        Accept: 'application/json'
    }
    });
    const response = await pokePromise;
    const pokeData = await response.json();
    console.log('pokemon should appear')
    
    console.log(pokeData.name)
    //console.log(pokemon);
      setPoke(pokeData.results)
  }
  getPoke();

  const [pokemon, setPoke] = useState("(pokemon placeholder");
  //console.log(`this is the pokemon in state:`, pokemon)
    
  return (
    <div className="App">
      
      <Header />
      <PokemonButton />
      
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}

export default App;
