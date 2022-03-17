import React from 'react'

const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='addForm'>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />

        </form>
    )
}

export default SearchItem