import styled from "styled-components"

export const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.primary};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 9999px;
  }
`
