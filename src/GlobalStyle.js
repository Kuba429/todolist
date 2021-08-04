import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding:0px;
        margin:0px;
        box-sizing:border-box;

            ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: white;
                    border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: #e8e8e8;
                    border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #757575;
        }

    }
    body{
        width: 100vw;
        overflow-x: hidden;
        background-color: #3b4459;
    }


`;

export default GlobalStyle;
