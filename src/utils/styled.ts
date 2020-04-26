import { css, SystemStyleObject, Theme } from '@styled-system/css';
import { CSSObject } from '@emotion/styled';
import { ElementType } from 'react';

export interface StyleProps {
    as?: ElementType;
    sx?: SystemStyleObject;
    theme?: Theme;
}

export const sxPropHelper = (props: StyleProps): CSSObject =>
    themeHelper(props.sx)(props.theme);

export const themeHelper = (
    input?: SystemStyleObject | SystemStyleObject[],
) => (props?: any): CSSObject => {
    return css(input)(props.theme);
};
