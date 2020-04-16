import React from 'react';

import Center from '../../../.storybook/decorators/Center';
import PlusIcon from './PlusIcon';
import MinusIcon from './MinusIcon';
import CloseIcon from './CloseIcon';
import NotchRightIcon from './NotchRightIcon';
import NotchLeftIcon from './NotchLeftIcon';
import Text from '../Text/Text';

export default {
    title: 'Icons',
    decorators: [Center],
};

export const all = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '12px',
                }}
            >
                <Text level={4}>Plus Icon</Text>
                <PlusIcon height="48px" width="48px" />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '12px',
                }}
            >
                <Text level={4}>Minus Icon</Text>
                <MinusIcon height="48px" width="48px" />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '12px',
                }}
            >
                <Text level={4}>Close Icon</Text>
                <CloseIcon height="48px" width="48px" />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '12px',
                }}
            >
                <Text level={4}>Notch Right Icon</Text>
                <NotchRightIcon height="48px" width="48px" />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '12px',
                }}
            >
                <Text level={4}>Notch Left Icon</Text>
                <NotchLeftIcon height="48px" width="48px" />
            </div>
        </div>
    );
};

export const plus = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text level={4}>Plus Icon</Text>
            <PlusIcon height="48px" width="48px" />
        </div>
    );
};

export const minus = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text level={4}>Minus Icon</Text>
            <MinusIcon height="48px" width="48px" />
        </div>
    );
};

export const close = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text level={4}>Close Icon</Text>
            <CloseIcon height="48px" width="48px" />
        </div>
    );
};

export const notchRight = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text level={4}>Notch Right Icon</Text>
            <NotchRightIcon height="48px" width="48px" />
        </div>
    );
};

export const notchLeft = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text level={4}>Notch Left Icon</Text>
            <NotchLeftIcon height="48px" width="48px" />
        </div>
    );
};
