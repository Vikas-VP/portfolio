"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { Menu, Github, Mail, Phone } from "lucide-react"
import { Button } from "./ui/Button"
import { ThemeToggle } from "./ui/ThemeToggle"
import { useMobile } from "@/hooks/use-mobile"

const HeaderContainer = styled.header.attrs<{ isScrolled: boolean }>(({ isScrolled, ...props }) => ({
  ...props,
  // Don't pass the 'isScrolled' prop to the DOM
}))<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background-color: ${({ isScrolled, theme }) => (isScrolled ? `${theme.background}cc` : "transparent")};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? "blur(8px)" : "none")};
  box-shadow: ${({ isScrolled }) => (isScrolled ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none")};
  padding: ${({ isScrolled }) => (isScrolled ? "8px 0" : "16px 0")};
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`

const Logo = styled.a`
  font-size: 24px;
  font-weight: 700;
  
  span {
    color: ${({ theme }) => theme.primary};
  }
  
  span:last-child {
    color: ${({ theme }) => theme.foreground};
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`

const NavLink = styled.a.attrs<{ active?: boolean }>(({ active, ...props }) => ({
  ...props,
  // Don't pass the 'active' prop to the DOM
}))<{ active?: boolean }>`
  position: relative;
  padding: 8px 12px;
  color: ${({ active, theme }) => (active ? theme.primary : theme.foreground)};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const MobileMenu = styled.div.attrs<{ isOpen: boolean }>(({ isOpen, ...props }) => ({
  ...props,
  // Don't pass the 'isOpen' prop to the DOM
}))<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: ${({ theme }) => theme.background};
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
`

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 48px;
`

const MobileSocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`

const Overlay = styled.div.attrs<{ isOpen: boolean }>(({ isOpen, ...props }) => ({
  ...props,
  // Don't pass the 'isOpen' prop to the DOM
}))<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease;
`

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.foreground};
  font-size: 24px;
`

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const isMobile = useMobile()
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setIsScrolled(window.scrollY > 10)

      // Find the active section
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <HeaderContainer isScrolled={isScrolled}>
        <HeaderContent>
          <Logo href="#home">
            <span>Vikas</span>
            <span>VP</span>
          </Logo>

          {isMobile ? (
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </Button>
          ) : (
            <Nav>
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href} active={activeSection === item.href.substring(1)}>
                  {item.name}
                </NavLink>
              ))}
            </Nav>
          )}

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {!isMobile && (
              <SocialLinks>
                <SocialLink href="https://github.com/Vikas-VP" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </SocialLink>
                <SocialLink href="mailto:vpviki1997@gmail.com">
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </SocialLink>
                <SocialLink href="tel:+917411650876">
                  <Phone size={20} />
                  <span className="sr-only">Phone</span>
                </SocialLink>
              </SocialLinks>
            )}
            <ThemeToggle />
          </div>
        </HeaderContent>
      </HeaderContainer>

      <Overlay isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />

      <MobileMenu isOpen={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}>✕</CloseButton>

        <MobileNavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              href={item.href}
              active={activeSection === item.href.substring(1)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </MobileNavLinks>

        <MobileSocialLinks>
          <SocialLink href="https://github.com/Vikas-VP" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </SocialLink>
          <SocialLink href="mailto:vpviki1997@gmail.com">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </SocialLink>
          <SocialLink href="tel:+917411650876">
            <Phone size={20} />
            <span className="sr-only">Phone</span>
          </SocialLink>
        </MobileSocialLinks>
      </MobileMenu>
    </>
  )
}
