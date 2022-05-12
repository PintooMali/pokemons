import React,{Component} from "react";
import CardList from "../components/CardList";
import Search from '../components/SearchBar'
import Scroll from '../components/Scroll'
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';


class App extends Component{
    constructor(){
        super();
        this.state={
            pokemon:[],
            searchField:''
        }
    }
    componentDidMount(){
        fetch('https://my-json-server.typicode.com/pintoomali/git-test/user')
        .then(response=>{return response.json();})
        .then(user=>{
            this.setState({pokemon:user})
        })
      
    }

    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
        
    }


    render(){
        const {pokemon,searchField}=this.state;
        const filterChange=pokemon.filter(pokemon=>{
            return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return !pokemon.length?
            <h1>Loading</h1>:

            (<div className="tc">
            <h1 className="f1">Pokemon World</h1>
            <Search searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                <CardList pokemon={filterChange} />
                </ErrorBoundary>
            
            </Scroll>
        </div>   
        );
     
        
    }
  
}
export default App;