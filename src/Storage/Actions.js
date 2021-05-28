

export const fetchUsersSuccess = users => {
    return {
      type:"ADDTOSTORE",
      payload: users
    }
  }
  
 export const postUsersSuccess = users => {
    return {
      type:"SAVETOSTORE",
      payload: users
    }
  }
  export const updateUsersSuccess = users => {
    return {
      type:"UPDATE",
      payload: users
    }
  }

  export const deleteUsersSuccess = users => {
    return {
      type:"DELETEFROMSTORE",
      payload: users
    }
  }
  

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
  
 