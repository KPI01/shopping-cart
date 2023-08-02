import { createContext, useReducer } from "react";

// 5. Reducer
export const Reducer = (state, action) => {
  let newExp = [];
  let updatedQty = false;

  switch (action.type) {
    case "ADD_QTY":
      state.expenses.map((item) => {
        if (item.id === action.payload.id) {
          item.qty += action.payload.qty;
          updatedQty = true;
        }
        newExp.push(item);
        return true;
      });
      state.expenses = newExp;
      action.type = "DONE";
      return { ...state };

    case "RED_QTY":
      state.expenses.map((item) => {
        if (item.id === action.payload.id) {
          item.qty -= action.payload.qty;
          updatedQty = true;
        }
        item.qty = item.qty < 0 ? 0 : item.qty;
        newExp.push(item);
        return true;
      });
      state.expenses = newExp;
      action.type = "DONE";
      return { ...state };

    case "DEL_ITEM":
      updatedQty = false;
      state.expenses.map((item) => {
        if (item.id === action.payload) {
          item.qty = 0;
          updatedQty = true;
        }
        newExp.push(item);
        return true;
      });
      state.expenses = newExp;
      action.type = "DONE";
      return { ...state };

    case "CHG_LOC":
      action.type = "DONE";
      state.currLocation = action.payload;
      return { ...state };

    default:
      return state;
  }
};

// 1. Initial State
export const initState = {
  currLocation: { name: "USA", symbol: "$" },
  locations: [
    { name: "USA", symbol: "$" },
    { name: "Europe", symbol: "€" },
    { name: "UK", symbol: "£" },
    { name: "India", symbol: "₹" },
  ],
  expenses: [
    { id: 1, name: "Shirt", qty: 0, unitPrice: 500 },
    { id: 2, name: "Jeans", qty: 0, unitPrice: 300 },
    { id: 3, name: "Dress", qty: 0, unitPrice: 400 },
    { id: 4, name: "Dinner set", qty: 0, unitPrice: 600 },
    { id: 5, name: "Bags", qty: 0, unitPrice: 200 },
  ],
};

// 2. Creation of context
export const Context = createContext();

// 3. Provider component that wraps inside all components
export const Provider = (props) => {
  // 4. Sets up the app state
  const [state, dispatch] = useReducer(Reducer, initState);

  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total += item.unitPrice * item.qty);
  }, 0);

  state.cartValue = totalExpenses;

  return (
    <Context.Provider
      value={{
        currLocation: state.currLocation,
        locations: state.locations,
        cartValue: state.cartValue,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
