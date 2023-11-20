import React, {useContext} from 'react';
import AuthContext from "./AuthContext";
import {Button} from "react-bootstrap";

const UserProfile = () => {
    const authContext = useContext(AuthContext);

    return (
        <div>
            {authContext.isAuthenticated ? (
                <Button
                    onClick={authContext.logout}
                    variant="outline-secondary"
                >로그아웃</Button>
            ) : (
                <Button
                    onClick={authContext.login}
                    variant="outline-secondary"
                >로그인</Button>

            )}
        </div>
    );
};

export default UserProfile;
