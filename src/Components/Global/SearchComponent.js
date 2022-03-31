import { Search } from '@material-ui/icons'
import React from 'react'
import './Style/Search.css';

function SearchComponent() {
    return (
        <div className='search--'>
            <Search  className='search--icon'/>
            <input type='text' placeholder="Search" className="search--input"></input>
        </div>
    )
}

export default SearchComponent

