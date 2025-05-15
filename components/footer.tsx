import styled from "styled-components"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.muted};
  padding: 48px 0;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterLogo = styled.a`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  
  span:first-child {
    color: ${({ theme }) => theme.primary};
  }
`

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.mutedForeground};
  max-width: 400px;
  margin-top: 8px;
  text-align: center;
  
  @media (min-width: 768px) {
    text-align: left;
  }
`

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    align-items: flex-end;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.mutedForeground};
`

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <FooterLogo href="#home">
            <span>Vikas</span>VP
          </FooterLogo>
          <FooterDescription>
            Senior Software Engineer specializing in React, Next.js, and modern frontend technologies.
          </FooterDescription>
        </div>

        <FooterRight>
          <SocialLinks>
            <SocialLink
              href="https://github.com/Vikas-VP"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/vikas-vp-4a3604185"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </SocialLink>
            <SocialLink href="mailto:vpviki1997@gmail.com" aria-label="Email">
              <Mail size={20} />
            </SocialLink>
            <SocialLink href="tel:+917411650876" aria-label="Phone">
              <Phone size={20} />
            </SocialLink>
          </SocialLinks>
          <Copyright>© {currentYear} Vikas V P. All rights reserved.</Copyright>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  )
}
