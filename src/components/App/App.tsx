import React from 'react';
import { Global, css } from '@emotion/core';

function App() {
    return (
        <div>
            <Global
                styles={css`
                    body {
                        margin: 0;
                        font-family: 'Source Sans Pro', sans-serif;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                    }
                `}
            />
        </div>
    );
}

export default App;
