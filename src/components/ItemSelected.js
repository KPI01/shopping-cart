import { useContext, useState } from "react";
import { Context } from "../context/AppContext";

export const ItemSelected = () => {
  let tx = null;
  const { expenses, dispatch } = useContext(Context);
  const [formItem, setFormItem] = useState("");
  const [formAction, setFormAction] = useState("");
  const [formQty, setFormQty] = useState("");

  const submit = (id, action, qty) => {
    if (id === "") {
      alert("Item is empty");
    } else if (action === "") {
      alert("There's no action to execute");
    } else if (qty === "" || qty === 0) {
      alert("There's no quantity to add");
    } else {
      tx = {
        id: parseInt(id),
        qty: parseInt(qty),
      };
      dispatch({
        type: action,
        payload: tx,
      });
    }

    setFormItem("");
    setFormQty("");
    setFormAction("");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className="input-group">
            <label className="input-group-text" htmlFor="selectItem">
              Item
            </label>
            <select
              className="form-select"
              id="selectItem"
              value={formItem}
              onChange={(event) => setFormItem(event.target.value)}
            >
              <option value="" defaultValue>
                Choose...
              </option>
              {expenses.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="col">
          <div className="input-group">
            <label className="input-group-text" htmlFor="selectAction">
              Action
            </label>
            <select
              className="form-select"
              id="selectAction"
              value={formAction}
              onChange={(event) => setFormAction(event.target.value)}
            >
              <option value="" defaultValue>
                Choose...
              </option>
              <option value="ADD_QTY">Add</option>
              <option value="RED_QTY">Reduce</option>
            </select>
          </div>
        </div>
        <div className="col d-flex">
          <div className="input-group">
            <span className="input-group-text">Quantity</span>
            <input
              type="number"
              className="form-control"
              id="inputQty"
              value={formQty < 0 ? 0 : formQty}
              onChange={(event) => setFormQty(event.target.value)}
              disabled={formAction === "" || formItem === "" ? true : false}
            />
          </div>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={(event) => submit(formItem, formAction, formQty)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemSelected;
