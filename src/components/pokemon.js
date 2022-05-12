import React from "react";
const Card=({name,type,id})=>{
    return(
        <div className="tc bg-light-green br3 pa3 ma3 dib grow shadow-5">
            <img alt="pokemons" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} widht="300" height="300"></img>
            <div>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            </div>
        </div>
    );
}
export default Card;