import { useSelector } from "react-redux";
import { baseUrl } from "../Pages/constant";

const StateContainer = () => {
    const currentUser = useSelector((state) => state.users);
    let source = `${baseUrl}/user/${currentUser.avatar}`
    let userrole = currentUser.role.replace(/_/g, " ").toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
    return {currentUser,source,userrole}
}

export default StateContainer;