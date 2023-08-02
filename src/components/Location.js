import { useContext } from "react";
import { Context } from "../context/AppContext";

export const Location = () => {
  const { locations, dispatch } = useContext(Context);

  const submitLocation = (location) => {
    const locationObject = JSON.parse(location);
    dispatch({
      type: "CHG_LOC",
      payload: locationObject,
    });
  };

  return (
    <div className="col">
      <div className="alert alert-secondary d-flex justify-content-start">
        <div className="input-group w-auto">
          <label
            className="input-group-text bg-transparent"
            htmlFor="selectLocation"
          >
            Location:
          </label>
        </div>
        <select
          id="selectLocation"
          className="form-select w-auto bg-transparent"
          onChange={(event) => submitLocation(event.target.value)}
        >
          {locations.map((item) => {
            return (
              <option
                value={
                  '{"name": "' +
                  item.name +
                  '", "symbol": "' +
                  item.symbol +
                  '"}'
                }
                selected={item.active === true ? true : false}
              >
                {item.name} ({item.symbol})
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Location;
