import { constants } from "./Constants";

export const fetchUsers = (users) => {
  return {
    type: constants.getUser,
    payload: users,
  };
};

export const postUsers = (users) => {
  console.log("from action", users);
  return {
    type: constants.saveUser,
    payload: users,
  };
};
export const updateUsers = (users) => {
  return {
    type: constants.updateUser,
    payload: users,
  };
};

export const deleteUsers = (users) => {
  return {
    type: constants.deleteUser,
    payload: users,
  };
};

// export const Read = () => {
//     return (dispatch) => {
//       Axios
//         .get()
//         .then((response) => {
//            const users=response.data
//            dispatch(fetchUsersSuccess(users))
//         }
//         )
//         .catch((error) => {
//           console.log(error);
//         });
//     };
//   };
