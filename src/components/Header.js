import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const goMain = () => {
        navigate("/");
    }
    const goCounter = () => {
        navigate("/counter");
    }
    const goTodoList = () => {
        navigate("/todolist");
    }
    const goPost = () => {
        navigate("/post");
    }

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={goMain}>C-Lab React 스터디</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={goCounter}>Counter</Nav.Link>
                        <Nav.Link onClick={goTodoList}>TodoList</Nav.Link>
                        <Nav.Link onClick={goPost}>Post</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
