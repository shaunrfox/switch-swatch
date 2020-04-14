import React from 'react';

const Center = (storyFn: any) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
        }}
    >
        {storyFn()}
    </div>
);

export default Center;
