import { useNavigate } from "react-router-dom";
import App from "../../App";
import { addToken } from "../../utils/jwt";


export default function AuthRequired() {
    const navigate = useNavigate();
    const Token = addToken();
    if (!Token) {
        return <App></App> 
    }
    navigate('/login');
}