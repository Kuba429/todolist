import React, { useState } from 'react';
import styled from 'styled-components';

//compoents
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import GlobalStyle from './GlobalStyle';

function App() {
    const [logged, setLogged] = useState(true);

    return (
        <StyledApp className="App">
            <GlobalStyle />
            {
                //if Logged
                logged && <LandingPage />
            }
            {
                //if not logged

                !logged && <LoginPage logged={logged} setLogged={setLogged} />
            }
        </StyledApp>
    );
}

const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #3b4459;
`;

export default App;
