import { useContext } from "react";
import { Context } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

export const ExpenseList = () => {
  const { expenses } = useContext(Context);

  return (
      <table className="table mt-3">
        <thead className="text-center">
          <tr>
            <th scope="col" className="py-2">
              #
            </th>
            <th scope="col" className="py-2 text-start ps-5">
              Description
            </th>
            <th scope="col" className="py-2">
              Unit Price
            </th>
            <th scope="col" className="py-2">
              Quantity
            </th>
            <th scope="col" className="py-2">
              Options
            </th>
            <th scope="col" className="py-2">
              Delete
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider text-center">
          {expenses.map((item) => {
            return (
              <ExpenseItem
                id={item.id}
                name={item.name}
                price={item.unitPrice}
                qty={item.qty}
              />
            );
          })}
        </tbody>
      </table>
  );
};

export default ExpenseList;
