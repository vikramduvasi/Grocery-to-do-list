import React from 'react';
import Itemlist from './Itemlist';


const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            {items.length ? (<Itemlist items={items} handleCheck={handleCheck} handleDelete={handleDelete} />) :
                (<p style={{ marginTop: '2rem' }}>Your list is empty</p>)
            }

        </main>
    )
}

export default Content