import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import UserProfile from "./Auth/UserProfile";
import AuthContext from "./Auth/AuthContext";

const Header = () => {

    const navigate = useNavigate();

    const authContext = useContext(AuthContext);

    const pathArr = ["", "counter", "todolist", "post", "userInfo","redux-counter"]

    const goTo  = (path) => {
        navigate(path)
    }

    const handleMenuCheck = (path) => {
        if (!authContext.isAuthenticated) {
            alert("로그인이 필요합니다");
            goTo('/');
        } else {
        goTo('/' + path);
        }
    }

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={() => goTo('/')}>C-Lab React 스터디</Navbar.Brand>
                    <Nav className="me-auto">
                        {pathArr.map((path) => (
                            <Nav.Link key={path} onClick={() => handleMenuCheck(path)}>
                                {path}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <UserProfile />
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
