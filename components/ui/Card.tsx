import styled from "styled-components"

export const Card = styled.div`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.cardForeground};
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.mutedForeground};
  font-size: 14px;
`

export const CardContent = styled.div`
  padding: 24px;
`

export const CardFooter = styled.div`
  display: flex;
  padding: 0 24px 24px;
`
