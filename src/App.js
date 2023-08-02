import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import Location from "./components/Location";
import ExpenseList from "./components/ExpenseList";
import ItemSelected from "./components/ItemSelected";

function App() {
  return (
    <Provider>
      <div className="container">
        <h1 className="display-1 fw-bold mb-5 mt-3">Shopping Cart</h1>
        <div className="container">
          <div className="row">
            <CartValue />
            <Location />
          </div>
          <div className="row">
            <div className="col">
              <h2 className="display-3 mt-3">Cart</h2>
              <ExpenseList />
            </div>
          </div>
          <div className="row">
            <div className="col">
            <h3 className="display-6 mt-3">Manage items</h3>
            <ItemSelected />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
