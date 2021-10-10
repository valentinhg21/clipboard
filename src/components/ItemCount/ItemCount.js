import './ItemCount.css'


export default function ItemCount({stock, initial, setInitial}) {

  
  const add = () => {
      if(initial < stock ){
        setInitial(initial + 1)
      }
  }


  const minus = ( ) => {
    if(initial > 1){
      setInitial(initial - 1)
    }
    
  }



  return (
    <div className="col-4 Button">
      <button type="button" className="Plus__button">
        <i className="fas fa-plus" onClick={add}></i>
      </button>
      <div>
        <p className="Quantity__text">{initial}</p>
      </div>
      <button type="button" className="Minus__buton" onClick={minus}>
        <i className="fas fa-minus"></i>
      </button>
    </div>
  );
}
