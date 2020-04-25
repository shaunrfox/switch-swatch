import React from 'react';

const Logo: React.FunctionComponent<React.SVGAttributes<SVGElement>> = (
    props,
) => {
    return (
        <svg
            width="44"
            height="44"
            {...props}
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22 0C17.9892 0 14.2492 1.08308 11 2.96154L22 22V0Z"
                fill="#D62027"
            />
            <path
                d="M2.96154 11C1.08308 14.2492 0 17.9892 0 22H22L2.96154 11Z"
                fill="#7D265F"
            />
            <path
                d="M11 2.96153C7.66616 4.89076 4.89078 7.66615 2.96155 11L22 22L11 2.96153Z"
                fill="#AA2243"
            />
            <path
                d="M32.9831 2.96154C29.7508 1.08308 26.0108 0 22 0V22L32.9831 2.96154Z"
                fill="#F1DA10"
            />
            <path
                d="M44 22C44 17.9892 42.9169 14.2492 41.0385 11L22 22H44Z"
                fill="#95C53D"
            />
            <path
                d="M41.0385 11C39.1092 7.66615 36.3338 4.89076 33 2.96153L22 22L41.0385 11Z"
                fill="#C2D02F"
            />
            <path
                d="M11 41.0385C14.2492 42.9169 17.9892 44 22 44V22L11 41.0385Z"
                fill="#1091C3"
            />
            <path
                d="M22 22L41.0385 32.9831C42.9169 29.7508 44 26.0108 44 22H22Z"
                fill="#69BE53"
            />
            <path
                d="M32.9831 41.0385C36.3169 39.1092 39.0923 36.3338 41.0215 33L22 22L32.9831 41.0385Z"
                fill="#3DB485"
            />
            <path
                d="M22 44C26.0108 44 29.7508 42.9169 32.9831 41.0385L22 22V44Z"
                fill="#13ACBA"
            />
            <path
                d="M0 22C0 26.0108 1.08308 29.7508 2.96154 32.9831L22 22H0Z"
                fill="#53347D"
            />
            <path
                d="M2.96155 32.9831C4.89078 36.3169 7.66616 39.0923 11 41.0215L22 22L2.96155 32.9831Z"
                fill="#3262A1"
            />
        </svg>
    );
};

export default Logo;