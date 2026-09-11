import styled from "styled-components"

export const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.foreground};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, #a855f7);
    border-radius: 9999px;
  }
`
