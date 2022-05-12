import React from "react";
import Card from "./pokemon";

const CardList=({pokemon})=>{
 
    return(
    <div>
        {pokemon.map((list,i)=>{
        return <Card key={i} name={list.name} type={list.Type} id={list.id}/>
    })}
    </div>
    );
}
export default CardList;
