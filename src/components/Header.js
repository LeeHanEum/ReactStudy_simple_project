import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const pathArr = ["", "counter", "todolist", "post", "userInfo"]

    const goTo  = (path) => {
        navigate(path)
    }

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={() => goTo('/')}>C-Lab React 스터디</Navbar.Brand>
                    <Nav className="me-auto">
                        {pathArr.map((path) => (
                            <Nav.Link key={path} onClick={() => goTo ('/' + path)}>
                                {path}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
