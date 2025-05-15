import styled from "styled-components"

export const Input = styled.input`
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.input};
  background-color: ${({ theme }) => theme.background};
  padding: 0 12px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.ring};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.ring}40;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.mutedForeground};
  }
`
