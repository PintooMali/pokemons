import React,{useState,useEffect} from "react";
import CardList from "../components/CardList";
import Search from '../components/SearchBar'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


 function App(){
    // constructor(){
    //     super();
    //     this.state={
    //         pokemon:[],
    //         searchField:''
    //     }
    // }

    const [pokemon,setPokemon] = useState([]);
    const [searchfield,setSearchfield] = useState('');
    
        // fetch('https://my-json-server.typicode.com/pintoomali/git-test/user')
        // .then(response=>{return response.json();})
        // .then(user=>{
        //     setPokemon(user)
        // })

        let i=0;
       useEffect(()=>{
              fetch('https://my-json-server.typicode.com/pintoomali/pokemon_data/pokemon')
        .then(response=>{return response.json();})
        .then(pokemon=>{
            setPokemon(pokemon)
            i++;
            console.log(i)
        })
       },[])


    const onSearchChange=(event)=>{
        setSearchfield(event.target.value)
        
    }


    
        // const {pokemon,searchField}=this.state;
        const filterChange=pokemon.filter(pokemon=>{
            return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !pokemon.length?
            <h1>Loading</h1>:

            (<div className="tc">
            <h1 className="f1">Pokemon World</h1>
            <Search searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                <CardList pokemon={filterChange} />
                </ErrorBoundary>
            
            </Scroll>
        </div>   
        );
     
        

  
}
export default App;