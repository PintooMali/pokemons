import React from "react";

const Search=({searchChange})=>{
    return(
        <div className="pa2">
            <input 
            className="bg-lightest-blue pa3 b--green" 
            type="text" name="t1" 
            placeholder="Write Here"
            onChange={searchChange}
            />
        </div>
    );
}
export default Search;