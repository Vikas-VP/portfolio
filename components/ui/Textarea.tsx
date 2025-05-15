import styled from "styled-components"

export const Textarea = styled.textarea`
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.input};
  background-color: ${({ theme }) => theme.background};
  padding: 8px 12px;
  font-size: 14px;
  resize: vertical;
  
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
