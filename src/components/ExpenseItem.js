import { useContext } from "react";
import { Context } from "../context/AppContext";

export const ExpenseItem = (props) => {
  const { dispatch, currLocation } = useContext(Context);
  let tx = null;

  const submitAdd = (id) => {
    tx = {
      id: id,
      qty: 1,
    };

    dispatch({
      type: "ADD_QTY",
      payload: tx,
    });
  };

  const submitReduce = (id) => {
    tx = {
      id: id,
      qty: 1,
    };

    dispatch({
      type: "RED_QTY",
      payload: tx,
    });
  };

  const submitDelete = (id) => {
    dispatch({
      type: "DEL_ITEM",
      payload: id,
    });
  };

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td className="text-start ps-5">{props.name}</td>
      <td>
        {currLocation.symbol} {props.price}
      </td>
      <td>{props.qty}</td>
      <td className="d-flex gap-2 justify-content-center">
        <button
          className="btn btn-success fw-bold d-flex align-items-center justify-content-center"
          onClick={(event) => submitAdd(props.id)}
        >
          + 1
        </button>
        <button className="btn btn-danger fw-bold d-flex align-items-center justify-content-center" onClick={(event)=> submitReduce(props.id)}>
          - 1
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger m-auto fw-bold d-flex align-items-center justify-content-center"
          onClick={(event) => submitDelete(props.id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
