import "../CartWidget/CartWidget.css";
import { SidebarContextUse } from "../../context/SidebarContext";
import { CartContextUse } from "../../context/CartContext";


import CartModal from "../CartModal/CartModal";

const CartWidget = () => {
  const { showSidebar, handleShow } = SidebarContextUse();
  const { cart } = CartContextUse();

  const cartQuantity = cart.length;

  return (
    <>
      <div className="Cart">
        <i className="fas fa-shopping-cart" onClick={handleShow}></i>
        <div className="Cart_count">
          <p>{cartQuantity}</p>
        </div>
      </div>
      {showSidebar && <CartModal />}
    </>
  );
};

export default CartWidget;
