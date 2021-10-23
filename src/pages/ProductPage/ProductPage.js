

// Estilos
import "./ProductPage.css";
// Componentes
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.js";




export default function ProductPage() {
  return (
    <div className="Productpage">
      <div className="container Productpage__container">
        <h3 className="Title">Productos</h3>
        <ItemListContainer />
      </div>
    </div>
  );

}
