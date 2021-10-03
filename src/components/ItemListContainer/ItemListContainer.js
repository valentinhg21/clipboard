import { useState, useEffect } from "react";

// Styles
import "../ItemListContainer/ItemListContainer.css";

// Components
import ItemList from "../ItemList/ItemList.js";

// Functions
import Spinner from "../Spinner/Spinner.js";

// React Router Dom
import { useParams } from "react-router-dom";

// Firebase
import { getFirestore } from "../../services/getFirebase";

const ItemListContainer = () => {
  //State de los products
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { idSubCategory } = useParams();

  

  useEffect(() => {
    const dbQuery = getFirestore();
    if (idSubCategory) {
      dbQuery
        .collection("products")
        .where("subCategory", "==", idSubCategory)
        .get()
        .then((res) => {
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      dbQuery
        .collection("products")
        .get()
        .then((res) => {
          setProducts(
            res.docs.map((product) => ({ id: product.id, ...product.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idSubCategory]);

  return (
    <div className="mt-5">
      {Loading ? <Spinner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
