"use client"

import { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/Button"

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 64px;
`

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
  background: ${({ theme }) =>
    theme.background === "#ffffff"
      ? "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.1) 0%, rgba(255, 255, 255, 1) 70%)"
      : "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.05) 0%, rgba(15, 23, 42, 1) 70%)"};
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
  z-index: 10;
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
    text-align: left;
  }
`

const HighlightText = styled.span`
  color: ${({ theme }) => theme.primary};
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
    text-align: left;
  }
`

const HeroDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.mutedForeground};
  margin-bottom: 32px;
  max-width: 600px;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
    text-align: left;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
  
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;
  
  a {
    color: ${({ theme }) => theme.primary};
  }
`

export function HeroSection() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // We'll use a simpler approach if Typed.js is causing issues
    const roles = ["Senior Software Engineer", "Frontend Developer", "React Specialist", "Next.js Developer"]
    let currentIndex = 0

    if (typedRef.current) {
      const interval = setInterval(() => {
        if (typedRef.current) {
          typedRef.current.textContent = roles[currentIndex]
          currentIndex = (currentIndex + 1) % roles.length
        }
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <HeroContainer id="home">
      <HeroBackground />

      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            "@media (min-width: 768px)": {
              textAlign: "left",
              maxWidth: "768px",
            },
          }}
        >
          <HeroTitle>
            Hi, I'm <HighlightText>Vikas V P</HighlightText>
          </HeroTitle>
          <HeroSubtitle>
            <span ref={typedRef}>Senior Software Engineer</span>
          </HeroSubtitle>
          <HeroDescription>
            Dynamic Frontend Engineer with expertise in React, Next.js, and modern web technologies. Passionate about
            creating performant and user-friendly web applications.
          </HeroDescription>
          <ButtonGroup>
            <Button as="a" href="#contact" size="lg">
              Contact Me
            </Button>
            <Button as="a" href="#projects" variant="outline" size="lg">
              View My Work
            </Button>
          </ButtonGroup>

          <SocialLinks>
            <SocialLink href="https://github.com/Vikas-VP" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/vikas-vp-4a3604185" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </SocialLink>
            <SocialLink href="mailto:vpviki1997@gmail.com">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </HeroContent>

      <ScrollIndicator>
        <a href="#about">
          <ArrowDown size={32} />
          <span className="sr-only">Scroll down</span>
        </a>
      </ScrollIndicator>
    </HeroContainer>
  )
}
