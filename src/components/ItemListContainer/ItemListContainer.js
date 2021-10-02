import React from 'react'
import { useState, useEffect } from "react";

// Styles
import "../ItemListContainer/ItemListContainer.css";

// Components
import ItemList from "../ItemList/ItemList.js";

// Functions
import { getFetch } from "../../Utils/Helper.js";
import Spinner from "../Spinner/Spinner.js";

// React Router Dom
import {useParams} from 'react-router-dom';



const ItemListContainer = () => {

  //State de los products
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(null);
  const {idSubCategory} = useParams();

  // Buscar por idSubCategory
  useEffect(() => {
      if(idSubCategory){
        getFetch.then((res) => {
          setProducts(res.filter(products => products.subCategory  ===  idSubCategory));
        
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(true))
      }
      else{
        getFetch.then((res) => {
          setProducts(res);
          
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(true))
      }

  }, [idSubCategory]);


  return (
    <div className="mt-5">
      {!Loading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
