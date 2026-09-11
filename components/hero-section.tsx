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
  padding: 100px 0 60px;
`

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
  background: ${({ theme }) =>
    theme.background === "#ffffff" || theme.background === "#f8fafc"
      ? "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99, 102, 241, 0.14), transparent), radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.08), transparent)"
      : "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(99, 102, 241, 0.22), transparent), radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.12), transparent)"};
`

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 0.8fr;
    gap: 56px;
  }
`

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 600;
  background: ${({ theme }) => `${theme.primary}15`};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => `${theme.primary}30`};
  margin-bottom: 20px;
  box-shadow: 0 2px 10px ${({ theme }) => `${theme.primary}15`};
`

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #22c55e;
  box-shadow: 0 0 8px #22c55e;
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.15;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`

const HighlightText = styled.span`
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.foreground};
  
  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`

const HeroDescription = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.mutedForeground};
  margin-bottom: 32px;
  line-height: 1.6;
  max-width: 580px;
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
  gap: 20px;
  margin-top: 32px;
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.mutedForeground};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ theme }) => `${theme.primary}10`};
  border: 1px solid ${({ theme }) => `${theme.primary}20`};
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => `${theme.primary}20`};
    transform: translateY(-2px);
  }
`

// Right Column Image Components
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`

const GlowOrb = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(circle, #6366f1 0%, #a855f7 45%, transparent 70%);
  filter: blur(55px);
  z-index: 0;
  animation: ${pulse} 4s ease-in-out infinite alternate;
`

const ImageCard = styled.div`
  position: relative;
  z-index: 1;
  width: 290px;
  height: 370px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px ${({ theme }) => `${theme.primary}30`};
  background: ${({ theme }) => theme.card};
  
  @media (min-width: 640px) {
    width: 330px;
    height: 420px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: scale(1.04);
    }
  }
`

const FloatingBadge = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 10px;
  z-index: 3;
  background: ${({ theme }) =>
    theme.background === "#ffffff" || theme.background === "#f8fafc"
      ? "rgba(255, 255, 255, 0.88)"
      : "rgba(9, 13, 22, 0.88)"};
  backdrop-filter: blur(12px);
  border: 1px solid ${({ theme }) => `${theme.primary}35`};
  padding: 10px 16px;
  border-radius: 16px;
  box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  gap: 12px;
`

const BadgeIcon = styled.div`
  font-size: 1.5rem;
`

const BadgeTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.foreground};
`

const BadgeSubtitle = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
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
  bottom: 24px;
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
    const roles = [
      "Senior Software Engineer",
      "Full Stack Developer",
      "Frontend Specialist",
      "React & Next.js Expert",
    ]
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
        {/* Left Column: Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <StatusBadge>
            <StatusDot />
            <span>Senior Software Engineer • Open to Opportunities</span>
          </StatusBadge>

          <HeroTitle>
            Hi, I'm <HighlightText>Vikas V P</HighlightText>
          </HeroTitle>
          
          <HeroSubtitle>
            <span ref={typedRef}>Senior Software Engineer</span>
          </HeroSubtitle>
          
          <HeroDescription>
            Senior Software Engineer with 6 years of progressive experience building enterprise-scale,
            production-grade web applications. Specialized in React, Next.js, TypeScript, Node.js, and MongoDB.
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
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/vikas-vp-4a3604185" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </SocialLink>
            <SocialLink href="mailto:vpviki1997@gmail.com">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </SocialLink>
          </SocialLinks>
        </motion.div>

        {/* Right Column: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ImageContainer>
            <GlowOrb />
            <ImageCard>
              <img src="/profile-picture.jpeg" alt="Vikas V P - Senior Software Engineer" />
            </ImageCard>
            <FloatingBadge
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <BadgeIcon>🚀</BadgeIcon>
              <div>
                <BadgeTitle>6+ Years Experience</BadgeTitle>
                <BadgeSubtitle>Full-Stack & Frontend</BadgeSubtitle>
              </div>
            </FloatingBadge>
          </ImageContainer>
        </motion.div>
      </HeroContent>

      <ScrollIndicator>
        <a href="#about">
          <ArrowDown size={28} />
          <span className="sr-only">Scroll down</span>
        </a>
      </ScrollIndicator>
    </HeroContainer>
  )
}
