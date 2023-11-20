import React, { useState } from 'react';
import AuthContext from './AuthContext';

const initialAuthState = {
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {},
};

const AuthProvider = ({children}) => {

    const [authState, setAuthState] = useState(initialAuthState);

    const login = () => {
        const user = prompt("아이디를 입력하세요 : ")
        if (user === "react") {
            setAuthState({
                isAuthenticated: true,
                user,
                login,
                logout,
            });
            alert("로그인 성공")
        }else {
            alert("로그인 실패")
        }
    };

    const logout = () => {
        setAuthState(initialAuthState);
        alert("로그아웃 되었습니다.")
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;