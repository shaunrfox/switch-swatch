import React from 'react';
import { Global, css } from '@emotion/core';

function App() {
    return (
        <div>
            <Global
                styles={css`
                    body {
                        margin: 0;
                    }
                `}
            />
        </div>
    );
}

export default App;
