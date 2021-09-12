import { useState, useEffect } from 'react'
// Styles
import '../ItemListContainer/ItemListContainer.css'

// Components
import ItemList from '../ItemList/ItemList.js'

// Functions
import { getFetch } from '../../Utils/Helper.js'
import Spinner from '../Spinner/Spinner.js'


const ItemListContainer = () => {
    //State de los productos
    const [products, setProducts] = useState([]);
    const [Loading, setLoading ]  = useState(null);
    
    useEffect(() =>{
        getFetch
            .then(res => {
                setProducts(res)   
                setLoading(true)             
            })
        setLoading(false)
    }, [])

    

    return (
        <div className="container mt-5 mb-5">
            <div className="Title">
                <h3>Productos</h3>
            </div>
            <div className="Products mt-5">
                {!Loading ? <Spinner /> : 
                <ItemList 
                    
                    products = {products}
                />
                }
            </div>
        </div>
    )
}

export default ItemListContainer
