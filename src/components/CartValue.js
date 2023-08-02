import { useContext } from "react";
import { Context } from "../context/AppContext";

export const CartValue = () => {
  const { currLocation, cartValue } = useContext(Context);

  return (
    <div className="col">
      <div className="alert alert-primary py-4">
        Total: {currLocation.symbol} {cartValue}
      </div>
    </div>
  );
};

export default CartValue;
