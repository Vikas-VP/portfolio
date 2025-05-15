import styled from "styled-components"

interface ProgressProps {
  value?: number
}

export const ProgressContainer = styled.div`
  position: relative;
  height: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 9999px;
  width: 100%;
`

export const ProgressIndicator = styled.div.attrs<{ value?: number }>(({ value, ...props }) => ({
  ...props,
  // Don't pass the 'value' prop to the DOM
}))<{ value?: number }>`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  transition: transform 0.2s ease;
  transform: translateX(-${({ value = 0 }) => 100 - value}%);
`

export const Progress = ({ value }: ProgressProps) => (
  <ProgressContainer>
    <ProgressIndicator value={value} />
  </ProgressContainer>
)
