// Componenets
import ItemDetail from "../ItemDetail/ItemDetail.js";

import { useState, useEffect } from "react";


// React Router Dom
import {useParams} from 'react-router-dom';


// Functions
import { getFetch } from "../../Utils/Helper.js";
import Spinner from "../Spinner/Spinner.js";


export default function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(null);

    const {idProduct} = useParams();


    useEffect(() => {
        if(idProduct){
            getFetch.then((res) => {
                setProducts(res.filter(products => products.id  ===  idProduct));
              
              })
              .catch(error => console.log(error))
              .finally(() => setLoading(true))
        }
  
    }, [idProduct]);

    

    return (
        <div className="container">
            {!Loading ? <Spinner /> : <ItemDetail item = {products}/> }
        
        </div>
    )
}
