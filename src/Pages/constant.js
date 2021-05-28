import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


export const eye = <FontAwesomeIcon icon={faEye} />;
export const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

export const margintop = () => {
    let value=Math.floor(Math.random() * (150- 20 + 1)) + 20;
    return value;
}