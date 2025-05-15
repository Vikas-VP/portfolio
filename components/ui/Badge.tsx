import styled, { css } from "styled-components"

type BadgeVariant = "default" | "secondary" | "destructive" | "outline"

interface BadgeProps {
  variant?: BadgeVariant
}

export const Badge = styled.span.attrs<BadgeProps>(({ variant, ...props }) => ({
  ...props,
  // Don't pass the 'variant' prop to the DOM
}))<BadgeProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0 10px;
  height: 24px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  ${({ variant = "default", theme }) => {
    switch (variant) {
      case "default":
        return css`
          background-color: ${theme.primary};
          color: ${theme.primaryForeground};
          border: 1px solid transparent;
        `
      case "secondary":
        return css`
          background-color: ${theme.secondary};
          color: ${theme.secondaryForeground};
          border: 1px solid transparent;
        `
      case "destructive":
        return css`
          background-color: ${theme.destructive};
          color: ${theme.destructiveForeground};
          border: 1px solid transparent;
        `
      case "outline":
        return css`
          background-color: transparent;
          color: ${theme.foreground};
          border: 1px solid ${theme.border};
        `
    }
  }}
`
