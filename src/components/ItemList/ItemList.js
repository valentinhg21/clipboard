import "./ItemList.css";
import Item from "../Item/Item";






export default function ItemList({ products }) {
   
  return (
    <div className="row align-items-start">
      {products.map((product) => (
          <Item
            key={product.id}
            product={product} 
        />
      ))}
    </div>
  );
}
