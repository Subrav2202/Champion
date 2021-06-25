import { constants } from "./Constants";

let initialstate = {
  users: [],
};

const Reducer = function (state = initialstate, action) {
  switch (action.type) {
    case constants.getUser:
      return {
        users: action.payload,
      };
    case constants.saveUser:
      return {
        users: action.payload,
      };
    case constants.updateUser:
      return {
        users: action.payload,
      };
    case constants.deleteUser:
      return {
        users: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
