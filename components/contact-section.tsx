"use client"

import type React from "react"
import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Send, Loader2, Linkedin, Github } from "lucide-react"
import { Container } from "./ui/Container"
import { SectionTitle } from "./ui/SectionTitle"
import { Card, CardContent } from "./ui/Card"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/Textarea"

// Styled Components
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ContactInfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const ContactInfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

const ContactIconWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary}15;
  color: ${({ theme }) => theme.primary};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const ContactInfoLabel = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
`

const ContactInfoValue = styled.p`
  color: ${({ theme }) => theme.muted};

  a {
    color: ${({ theme }) => theme.muted};
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`

const MapContainer = styled.div`
  margin-top: 32px;
  border-radius: 0.5rem;
  overflow: hidden;
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 500;
  }
`

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.foreground};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    alert("Message sent! Thank you for your message. I'll get back to you soon.")

    setIsSubmitting(false)
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
        </motion.div>

        <ContactGrid>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "24px" }}>Contact Information</h3>

                <ContactInfoList>
                  <ContactInfoItem>
                    <ContactIconWrapper>
                      <MapPin size={24} />
                    </ContactIconWrapper>
                    <div>
                      <ContactInfoLabel>Location</ContactInfoLabel>
                      <ContactInfoValue>Bengaluru, India</ContactInfoValue>
                    </div>
                  </ContactInfoItem>

                  <ContactInfoItem>
                    <ContactIconWrapper>
                      <Mail size={24} />
                    </ContactIconWrapper>
                    <div>
                      <ContactInfoLabel>Email</ContactInfoLabel>
                      <ContactInfoValue>
                        <a href="mailto:vpviki1997@gmail.com">vpviki1997@gmail.com</a>
                      </ContactInfoValue>
                    </div>
                  </ContactInfoItem>

                  <ContactInfoItem>
                    <ContactIconWrapper>
                      <Phone size={24} />
                    </ContactIconWrapper>
                    <div>
                      <ContactInfoLabel>Phone</ContactInfoLabel>
                      <ContactInfoValue>
                        <a href="tel:+917411650876">+91 7411650876</a>
                      </ContactInfoValue>
                    </div>
                  </ContactInfoItem>
                </ContactInfoList>

                <SocialLinksContainer>
                  <SocialLink href="https://github.com/Vikas-VP" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    GitHub
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/vikas-vp-4a3604185"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </SocialLink>
                </SocialLinksContainer>

                <MapContainer>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9974195499!2d77.35073573214738!3d12.953847709541213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1715815944121!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: "0.5rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bengaluru Map"
                  ></iframe>
                </MapContainer>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "24px" }}>Send Me a Message</h3>

                <form onSubmit={handleSubmit}>
                  <FormGrid>
                    <FormField>
                      <label htmlFor="name">Name</label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </FormField>

                    <FormField>
                      <label htmlFor="email">Email</label>
                      <Input id="email" name="email" type="email" placeholder="Your email" required />
                    </FormField>
                  </FormGrid>

                  <FormField>
                    <label htmlFor="subject">Subject</label>
                    <Input id="subject" name="subject" placeholder="Subject" required />
                  </FormField>

                  <FormField>
                    <label htmlFor="message">Message</label>
                    <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
                  </FormField>

                  <Button type="submit" disabled={isSubmitting} style={{ width: "100%" }}>
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} style={{ marginRight: "8px" }} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} style={{ marginRight: "8px" }} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </ContactGrid>
      </Container>
    </section>
  )
}
