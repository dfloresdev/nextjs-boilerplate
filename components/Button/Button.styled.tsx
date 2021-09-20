import styled, { css } from 'styled-components';

export interface InterfaceButton {
  color: string;
  variant: string;
}

export const ButtonContainer = styled.button<InterfaceButton>(({ variant }) => {
  const variantStyles: any = {
    primary: css`
      background: #ff8906;
      border: none;
      border: 2px solid #ff8906;
      /**
      Rule: 1.4.3 Contrast Minimum
      More Info: https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#contrast-minimum
      Tool: https://dequeuniversity.com/rules/axe/3.5/color-contrast
      */
      /* Solution */
      /* color: black; */
      color: white;
    `,
    secondary: css`
      background: white;
      border: 2px solid #ff8906;
      /**
      Rule: 1.4.3 Contrast Minimum
      More Info: https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0&currentsidebar=%23col_overview&levels=aaa#contrast-minimum
      Tool: https://dequeuniversity.com/rules/axe/3.5/color-contrast
      */
      /* Solution */
      /* color: black; */
      color: white;
    `,
  };

  return css`
    padding: 12px 24px;
    font-weight: bold;
    margin-right: 10px;
    &:hover {
      cursor: pointer;
      border: 2px solid black;
      background: white;
    }
    &:focus {
      cursor: pointer;
      border: 2px solid black;
      background: white;
    }
    &:disabled {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
    }
    ${variantStyles[variant]};
  `;
});
