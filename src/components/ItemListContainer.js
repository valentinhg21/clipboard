import React from 'react'
import './styles/ItemListContainer.css'
const ItemListContainer = ({greetings}) => {
    return (
        <div className="Message">
            {greetings}
        </div>
    )
}

export default ItemListContainer
