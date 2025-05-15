"use client"

import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Calendar, User, Coffee, Code } from "lucide-react"
import { Card, CardContent } from "./ui/Card"
import { Container } from "./ui/Container"
import { SectionTitle } from "./ui/SectionTitle"

const AboutContainer = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "rgba(241, 245, 249, 0.3)" : "rgba(30, 41, 59, 0.3)"};
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const AboutImage = styled(Card)`
  overflow: hidden;
  border: none;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const AboutTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`

const AboutDescription = styled.p`
  color: ${({ theme }) => theme.mutedForeground};
  line-height: 1.6;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
  
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  svg {
    color: ${({ theme }) => theme.primary};
  }
`

const SectionSubtitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondaryForeground};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primaryForeground};
  }
`

// Animation keyframes
const type = keyframes`
  from { width: 0; }
  to { width: 100%; }
`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const steam = keyframes`
  0% { height: 0; opacity: 0.2; }
  50% { height: 10px; opacity: 0.5; }
  100% { height: 0; opacity: 0.2; }
`

const AnimationOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CodeLine = styled.div`
  color: #00ff00;
  font-family: monospace;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 8px;
  width: 0;
  animation: ${type} 3s steps(40, end) forwards;
  
  &::after {
    content: '|';
    animation: ${blink} 1s infinite;
  }
  
  &:nth-child(2) {
    animation-delay: 3s;
  }
  
  &:nth-child(3) {
    animation-delay: 6s;
  }
`

const CoffeeContainer = styled.div`
  position: relative;
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const CoffeeSteam = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: ${steam} 2s infinite;
  
  &:nth-child(1) {
    left: calc(50% - 5px);
    animation-delay: 0.2s;
  }
  
  &:nth-child(2) {
    left: 50%;
    animation-delay: 0.6s;
  }
  
  &:nth-child(3) {
    left: calc(50% + 5px);
    animation-delay: 1s;
  }
`

export function AboutSection() {
  return (
    <AboutContainer id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionTitle>About Me</SectionTitle>
        </motion.div>

        <AboutGrid>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AboutImage>
              <CardContent style={{ padding: 0 }}>
                <img src="/profile-picture.jpeg" alt="Vikas V P" />
                <AnimationOverlay>
                  <CodeLine>const developer = new Developer('Vikas');</CodeLine>
                  <CodeLine>developer.code('React');</CodeLine>
                  <CodeLine>developer.drinkCoffee();</CodeLine>
                  <CoffeeContainer>
                    <CoffeeSteam />
                    <CoffeeSteam />
                    <CoffeeSteam />
                    <Coffee size={24} color="#d4a676" />
                    <Code size={24} color="#00ff00" />
                  </CoffeeContainer>
                </AnimationOverlay>
              </CardContent>
            </AboutImage>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <AboutContent>
              <AboutTitle>Personal Summary</AboutTitle>
              <AboutDescription>
                Dynamic Frontend Engineer with a proven track record at Appstitch Technologies, enhancing API
                performance and optimizing React applications. Skilled in GraphQL and Agile methodologies, I excel in
                mentoring teams and driving project success, achieving a 30% reduction in load times and fostering
                seamless collaboration across departments.
              </AboutDescription>

              <InfoGrid>
                <InfoItem>
                  <User size={20} />
                  <span>Vikas V P</span>
                </InfoItem>
                <InfoItem>
                  <Calendar size={20} />
                  <span>Born in 1997</span>
                </InfoItem>
                <InfoItem>
                  <MapPin size={20} />
                  <span>Bengaluru, India 573201</span>
                </InfoItem>
                <InfoItem>
                  <Mail size={20} />
                  <span>vpviki1997@gmail.com</span>
                </InfoItem>
                <InfoItem>
                  <Phone size={20} />
                  <span>+91 7411650876</span>
                </InfoItem>
              </InfoGrid>

              <div>
                <SectionSubtitle>Languages</SectionSubtitle>
                <TagsContainer>
                  <Tag>English (Native)</Tag>
                  <Tag>Hindi (Advanced)</Tag>
                  <Tag>Kannada (Native)</Tag>
                </TagsContainer>
              </div>

              <div>
                <SectionSubtitle>Hobbies & Interests</SectionSubtitle>
                <TagsContainer>
                  <Tag>Electronic Gadgets</Tag>
                  <Tag>Travelling</Tag>
                  <Tag>Cricket</Tag>
                </TagsContainer>
              </div>
            </AboutContent>
          </motion.div>
        </AboutGrid>
      </Container>
    </AboutContainer>
  )
}
