import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router';

function Header(props) {
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem("LoginData");
        history.push("/register")
    }
    return (
        <div className="header px-4">
            <h4>{props.title}</h4>
            <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Header
