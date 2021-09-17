import React from 'react'

const SearchBox=({products})=> {
    return (
        <div>
           <input className="form-control" 
           placeholder="Search for an Item......."
           value={products}
           onChange={(event)=>products.setSearchItem(event.target.value)}
        />
        </div>
    )
}

export default SearchBox
