import './ItemCount.css'


export default function ItemCount({stock, initial, removeAdd, onAdd}) {
  return (
    <div className="col-4 Button">
      <button type="button" className="Plus__button">
        <i className="fas fa-minus" onClick={removeAdd}></i>
      </button>
      <div>
        <p className="Quantity__text">{initial}</p>
      </div>
      <button type="button" className="Minus__buton" onClick={onAdd}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}
