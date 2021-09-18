// React Router Dom

// Estilos
import "./ProductPage.css";
// Componentes
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.js";




export default function ProductPage() {
  return (
    <div className="Productpage">
      <h1>HERO</h1>
      <div className="container mt-5 mb-5">
        <div className="">
            <h1>Titulo</h1>
        </div>
        <div className="mt-5"></div>
        <ItemListContainer />
      </div>
    </div>
  );
}
