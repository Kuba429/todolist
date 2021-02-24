import { createGlobalStyle } from 'styled-components';

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


`;

export default GlobalStyle;
