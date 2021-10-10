// Componenets
import ItemDetail from "../ItemDetail/ItemDetail.js";

import { useState, useEffect } from "react";

// React Router Dom
import { useParams } from "react-router-dom";

// Functions
import Spinner from "../Spinner/Spinner.js";
import { getFirestore } from "../../services/getFirebase.js";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [Loading, setLoading] = useState(true);

  const { idProduct } = useParams();
  useEffect(() => {
    const dbQuery = getFirestore();

    dbQuery
      .collection('products')
      .doc(idProduct)
      .get()
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [idProduct]);
  return (
    <div className="container">
      {Loading ? <Spinner /> : <ItemDetail product={product} />}
    </div>
  );
}
