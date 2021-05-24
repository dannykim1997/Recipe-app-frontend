import React from 'react';

const SearchBar = (props) => {
    
    const searchRecipe = (e) => {
        e.preventDefault()
        props.getRecipes(e.target.value)
    }
    
    return (
        <div>
            <input
                type='text'
                id='search'
                placeholder='search by letter'
                onChange={searchRecipe}
            />
        </div>
    )
}

export default SearchBar