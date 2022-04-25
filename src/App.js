import React, {useEffect,useState} from "react";
import Recipe from './Recipe';
import Header from './Header';
import Footer from './Footer';
import './App.css';

const App = () => {

  const APP_ID = 'e9a8a90f';
  const API_KEY = 'eed55e326745900f5c0c23e8f55e0918';

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

useEffect(() =>{ 
  getRecipe();
}, [query]);

const getRecipe = async () => {
  const response= await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${query}`);
  const data = await response.json();
  setRecipe(data.hits);
  console.log(data.hits);

}

const updateSearch = e =>{
  setSearch(e.target.value);
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

const buttonOver = (e) => {
  e.target.innerHTML = "Go!";
}
const buttonOut = (e) => {
  e.target.innerHTML = "Search";
}

  return (
    <div className="App">
      <Header/>
     <form onSubmit={getSearch} className="search-form">
       <input className="search-bar" type="text" value={search} onChange ={updateSearch}/>
       <button className="search-button" type="submit">Search</button>
     </form>
     <div className="recipe">
     {recipe.map(recipe =>(
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories} 
       image={recipe.recipe.image}
       ingredients={recipe.recipe.ingredients}

       />
     ))}
     </div>
     <Footer/>
    </div>
  );
}

export default App;
