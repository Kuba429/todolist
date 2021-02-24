import React from 'react';
import styled from 'styled-components';
const LoginPage = ({ logged, setLogged }) => {
    const submitHandler = (e) => {
        e.preventDefault();
       setLogged(!logged); 
    };

    return (
        <StyledLoginPage>
            <div className="leftPanel">
                <div className="welcomeText">
                    <h1>Hello!</h1>
                    <h2>Log or Sign in to start using the app</h2>
                </div>
                <form className="loginForm" onSubmit={submitHandler}>
                    <input
                        className="login"
                        placeholder="Username"
                        type="text"
                    />
                    <input
                        className="password"
                        placeholder="Password"
                        type="password"
                    />
                    <div className="buttons">
                        <button className="login">Log in</button>
                        <button className="register">Register</button>
                    </div>
                </form>
            </div>
            <div className="rightPanel">
                <h1>Just another ToDo List</h1>
                <button>Continue as Guest</button>
            </div>
        </StyledLoginPage>
    );
};

const StyledLoginPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    font-family: 'Poppins', sans-serif;
    .leftPanel {
        background-color: #fff;
        height: 100%;
        min-width: 15%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .welcomeText {
            padding: 1rem;
            text-align: center;

            h1 {
                font-size: 5.8rem;
                font-weight: 300;
            }
            h2 {
                font-size: 2rem;
                font-weight: 300;
            }
        }
        .loginForm {
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 20vh;
            input {
                width: 100%;
                margin: 0.8rem;
                padding: 0.7rem;
                border-radius: 10px;
                border: solid 1px #bebcbc;
                background-color: #f6f1f1;
                font-size: 1.3rem;
                outline: none;
            }
            .buttons {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin: 0.8rem;
                button {
                    width: 45%;
                    padding: 0.7rem;
                    border-radius: 10px;
                    outline: none;
                    border: none;
                    font-family: 'Poppins', sans-serif;
                    cursor: pointer;
                    font-size: 1.2rem;
                    transition: all ease 0.3s;
                }
                .login {
                    background-color: #3b4459;
                    color: #ffffff;
                    border: 1px solid #ffffff;
                    &:hover {
                        background-color: #303542;
                    }
                }
                .register {
                    background-color: #ffffff;
                    color: #3b4459;
                    border: 1px solid #3b4459;
                    &:hover {
                        background-color: #e5e2e2;
                    }
                }
            }
        }
    }
    .rightPanel {
        background-color: #3b4459;
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        h1 {
            padding: 1rem;
            width: 100%;
            position: absolute;
            color: #ffffff;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 8rem;
        }
        button {
            margin: 2rem;
            padding: 1rem;
            outline: none;
            cursor: pointer;
            font-size: 1.2rem;
            background: transparent;
            border: 1px solid white;
            border-radius: 10px;
            color: white;
            transition: ease 0.3s all;
            &:hover {
                background-color: white;
                color: #3b4459;
            }
        }
    }
`;

export default LoginPage;
