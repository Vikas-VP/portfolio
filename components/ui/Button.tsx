import styled, { css } from "styled-components"

type ButtonVariant = "default" | "outline" | "ghost" | "link"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
}

export const Button = styled.button.attrs<ButtonProps>(({ variant, size, disabled, ...props }) => ({
  ...props,
  disabled,
  // Only pass valid HTML attributes to the DOM
}))<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  
  ${({ variant = "default", theme }) => {
    switch (variant) {
      case "default":
        return css`
          background-color: ${theme.primary};
          color: ${theme.primaryForeground};
          border: 1px solid ${theme.primary};
          
          &:hover:not(:disabled) {
            background-color: ${theme.primary}dd;
          }
        `
      case "outline":
        return css`
          background-color: transparent;
          color: ${theme.foreground};
          border: 1px solid ${theme.border};
          
          &:hover:not(:disabled) {
            background-color: ${theme.muted};
            border-color: ${theme.primary};
          }
        `
      case "ghost":
        return css`
          background-color: transparent;
          color: ${theme.foreground};
          border: 1px solid transparent;
          
          &:hover:not(:disabled) {
            background-color: ${theme.muted};
          }
        `
      case "link":
        return css`
          background-color: transparent;
          color: ${theme.primary};
          border: none;
          text-decoration: underline;
          
          &:hover:not(:disabled) {
            text-decoration: none;
          }
        `
    }
  }}
  
  ${({ size = "default" }) => {
    switch (size) {
      case "default":
        return css`
          height: 40px;
          padding: 0 16px;
          font-size: 14px;
        `
      case "sm":
        return css`
          height: 36px;
          padding: 0 12px;
          font-size: 13px;
        `
      case "lg":
        return css`
          height: 44px;
          padding: 0 20px;
          font-size: 16px;
        `
      case "icon":
        return css`
          height: 40px;
          width: 40px;
          padding: 0;
          font-size: 14px;
        `
    }
  }}
  
  ${({ disabled }) =>
    disabled &&
    css`
    opacity: 0.5;
    cursor: not-allowed;
  `}
  
  svg {
    margin-right: ${({ size }) => (size === "icon" ? "0" : "8px")};
  }
`
