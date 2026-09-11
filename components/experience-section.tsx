"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { CalendarIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Container } from "./ui/Container"
import { SectionTitle } from "./ui/SectionTitle"

const ExperienceContainer = styled.section`
  padding: 80px 0;
`

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const ExperienceCard = styled(Card)`
  border-left: 4px solid ${({ theme }) => theme.primary};
`

const ExperienceHeader = styled(CardHeader)`
  padding-bottom: 8px;
`

const ExperienceHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const ExperienceTitle = styled(CardTitle)`
  font-size: 1.25rem;
`

const ExperienceCompany = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`

const ExperienceDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.mutedForeground};
  font-size: 0.875rem;
`

const ExperienceDescription = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  color: ${({ theme }) => theme.mutedForeground};
`

const ExperienceList2 = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: ${({ theme }) => theme.mutedForeground};
  
  li {
    margin-bottom: 8px;
  }
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${({ theme }) => `${theme.primary}10`};
  color: ${({ theme }) => theme.foreground};
  border: 1px solid ${({ theme }) => theme.border};
`

export function ExperienceSection() {
  return (
    <ExperienceContainer id="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionTitle>Work Experience</SectionTitle>
        </motion.div>

        <ExperienceList>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceHeaderContent>
                  <div>
                    <ExperienceTitle>Senior Software Engineer</ExperienceTitle>
                    <ExperienceCompany>LTIMindtree (LTM) • Bengaluru, India</ExperienceCompany>
                  </div>
                  <ExperienceDate>
                    <CalendarIcon size={16} />
                    <span>July 2025 - Present</span>
                  </ExperienceDate>
                </ExperienceHeaderContent>
                <ExperienceDescription>
                  Company Overview: Global technology consulting and digital solutions company
                </ExperienceDescription>
              </ExperienceHeader>
              <CardContent>
                <ExperienceList2>
                  <li>
                    Delivered a conversational enterprise platform that streamlined access to business-critical
                    information, eliminated dependency on Salesforce navigation, and reduced average information
                    retrieval time by 40–60%, significantly improving day-to-day operational efficiency.
                  </li>
                  <li>
                    Developed supporting dashboard functionality using Node.js, Express.js, and MongoDB to enable
                    efficient data retrieval, processing, and visualization.
                  </li>
                  <li>
                    Contributed to the development of an automated invoice generation and processing system, replacing
                    heavily manual workflows and reducing invoice processing effort by 50%+, enabling faster billing
                    cycles and improved financial operations.
                  </li>
                  <li>
                    Implemented Sentry for application monitoring and error tracking, improving visibility into
                    production issues, accelerating troubleshooting, and enabling faster resolution of application
                    errors.
                  </li>
                  <li>
                    Adopted Agile best practices including user story refinement, backlog grooming, and test-driven
                    development, leading to a reduction in bug reports and a 30% increase in feature delivery speed.
                  </li>
                </ExperienceList2>
                <TagsContainer>
                  <Tag>React</Tag>
                  <Tag>Next.js</Tag>
                  <Tag>Node.js</Tag>
                  <Tag>Express.js</Tag>
                  <Tag>MongoDB</Tag>
                  <Tag>Sentry</Tag>
                  <Tag>Agile</Tag>
                  <Tag>TDD</Tag>
                </TagsContainer>
              </CardContent>
            </ExperienceCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ExperienceCard>
              <ExperienceHeader>
                <ExperienceHeaderContent>
                  <div>
                    <ExperienceTitle>Frontend Engineer</ExperienceTitle>
                    <ExperienceCompany>Appstitch Technologies PVT LTD • Bengaluru, India</ExperienceCompany>
                  </div>
                  <ExperienceDate>
                    <CalendarIcon size={16} />
                    <span>December 2020 - June 2025</span>
                  </ExperienceDate>
                </ExperienceHeaderContent>
                <ExperienceDescription>
                  Company Overview: Appstitch is a no/low code platform that empowers users to build and publish applications
                </ExperienceDescription>
              </ExperienceHeader>
              <CardContent>
                <ExperienceList2>
                  <li>
                    Enabled rapid application delivery by developing a no-code/low-code platform for screen creation,
                    workflow configuration, external integrations, and marketplace-based app publishing.
                  </li>
                  <li>
                    Optimized React app performance by implementing lazy loading, code splitting, and memoization,
                    reducing initial load time.
                  </li>
                  <li>
                    Implemented efficient data handling strategies using GraphQL querying and caching techniques,
                    reducing load times for data-heavy pages by 40% and contributing to a 15% improvement in user
                    engagement.
                  </li>
                  <li>
                    Built real-time features such as notifications and live chat using WebSocket with Nest.js,
                    improving user interactivity and engagement by 25%.
                  </li>
                  <li>
                    Provided guidance on best practices, mentoring 4+ new team members, improving their onboarding
                    efficiency by 50%, and helping them deliver production-quality code within the first 2 months.
                  </li>
                  <li>
                    Developed and maintained component, integration, and end-to-end tests to validate application
                    functionality, backend services, and cross-system workflows, improving test coverage and helping
                    identify defects early in the development lifecycle.
                  </li>
                </ExperienceList2>
                <TagsContainer>
                  <Tag>React</Tag>
                  <Tag>Next.js</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>GraphQL</Tag>
                  <Tag>WebSocket</Tag>
                  <Tag>Nest.js</Tag>
                  <Tag>Redux</Tag>
                  <Tag>MobX</Tag>
                  <Tag>Unit Testing</Tag>
                </TagsContainer>
              </CardContent>
            </ExperienceCard>
          </motion.div>
        </ExperienceList>
      </Container>
    </ExperienceContainer>
  )
}
