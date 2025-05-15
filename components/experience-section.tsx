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
                    <ExperienceCompany>Appstitch Technologies PVT LTD</ExperienceCompany>
                  </div>
                  <ExperienceDate>
                    <CalendarIcon size={16} />
                    <span>April 2023 - Current</span>
                  </ExperienceDate>
                </ExperienceHeaderContent>
                <ExperienceDescription>
                  Company Overview: Appstitch is a no/low code product which helps users in building their application
                </ExperienceDescription>
              </ExperienceHeader>
              <CardContent>
                <ExperienceList2>
                  <li>
                    Provided guidance on best practices, mentoring four or more new team members, improving their
                    onboarding efficiency by 50%, and helping them deliver production-quality code within the first two
                    months.
                  </li>
                  <li>
                    Optimized React app performance by implementing lazy loading, code splitting, and memoization,
                    reducing initial load time by 30%
                  </li>
                  <li>
                    Engaged closely with cross-functional teams, including backend developers and designers, ensuring
                    seamless collaboration and reducing project delays by 25%, leading to on-time delivery of key
                    features
                  </li>
                  <li>Achieved an 'Award for Work Excellence' for outstanding contributions to the project</li>
                </ExperienceList2>
                <TagsContainer>
                  <Tag>React</Tag>
                  <Tag>Next.js</Tag>
                  <Tag>GraphQL</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>Agile</Tag>
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
                    <ExperienceCompany>Appstitch Technologies PVT LTD</ExperienceCompany>
                  </div>
                  <ExperienceDate>
                    <CalendarIcon size={16} />
                    <span>December 2020 - March 2023</span>
                  </ExperienceDate>
                </ExperienceHeaderContent>
                <ExperienceDescription>
                  Company Overview: Appstitch is a no/low code product which helps users in building their application
                </ExperienceDescription>
              </ExperienceHeader>
              <CardContent>
                <ExperienceList2>
                  <li>
                    Spearheaded the creation of modular React components, reducing development time by 30% and
                    eliminating 40% of redundant code.
                  </li>
                  <li>
                    Enhanced API performance by implementing efficient GraphQL queries and caching strategies, reducing
                    load times for data-heavy React pages by 40%, which led to a 15% improvement in user engagement.
                  </li>
                  <li>
                    Improved application state management in React apps by integrating Redux and MobX, resulting in
                    better data synchronization and a 30% reduction in state-related bugs, contributing to a smoother
                    user experience.
                  </li>
                  <li>
                    Implemented Agile best practices such as user story refinement, backlog grooming, and TDD, resulting
                    in a 20% reduction in bug reports and 30% faster feature rollout
                  </li>
                </ExperienceList2>
                <TagsContainer>
                  <Tag>React</Tag>
                  <Tag>Redux</Tag>
                  <Tag>MobX</Tag>
                  <Tag>GraphQL</Tag>
                  <Tag>TDD</Tag>
                </TagsContainer>
              </CardContent>
            </ExperienceCard>
          </motion.div>
        </ExperienceList>
      </Container>
    </ExperienceContainer>
  )
}
