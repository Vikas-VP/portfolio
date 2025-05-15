"use client"

import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const scale = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.foreground};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.muted};
  }
  
  svg {
    animation: ${scale} 0.5s ease;
  }
`

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ width: 40, height: 40 }} />
  }

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </ToggleButton>
  )
}
