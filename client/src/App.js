import React, { useState } from 'react';
import styled from 'styled-components';

//compoents
import LoginPage from './components/LoginPage';
import GlobalStyle from './GlobalStyle';

function App() {
    const [logged, setLogged] = useState(false);

    return (
        <div className="App">
            <GlobalStyle />
            {!logged && <LoginPage />}
        </div>
    );
}

export default App;
