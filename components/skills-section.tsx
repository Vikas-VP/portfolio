"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/Card"
import { Container } from "./ui/Container"
import { SectionTitle } from "./ui/SectionTitle"
import { Progress } from "./ui/Progress"

const SkillsContainer = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "rgba(241, 245, 249, 0.3)" : "rgba(30, 41, 59, 0.3)"};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const SkillItem = styled.div`
  margin-bottom: 16px;
`

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const SkillName = styled.span`
  font-weight: 500;
`

const SkillValue = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.mutedForeground};
`

const EducationCard = styled(Card)`
  margin-top: 48px;
`

const EducationTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
`

const EducationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const EducationDetails = styled.div``

const EducationName = styled.h4`
  font-weight: 600;
`

const EducationSchool = styled.p`
  color: ${({ theme }) => theme.mutedForeground};
`

const EducationDate = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
`

const AchievementCard = styled(Card)`
  margin-top: 32px;
`

const AchievementTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 16px;
`

const AchievementContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

const AchievementIcon = styled.div`
  min-width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: ${({ theme }) => `${theme.primary}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
`

const AchievementDetails = styled.div``

const AchievementName = styled.h4`
  font-weight: 600;
`

const AchievementDescription = styled.p`
  color: ${({ theme }) => theme.mutedForeground};
`

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "GraphQL", level: 80 },
  { name: "Redux", level: 85 },
  { name: "MobX", level: 80 },
  { name: "REST", level: 90 },
  { name: "SEO", level: 75 },
  { name: "Test Driven Development", level: 80 },
  { name: "Unit Testing", level: 85 },
  { name: "Agile", level: 90 },
  { name: "Caching", level: 85 },
]

export function SkillsSection() {
  return (
    <SkillsContainer id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionTitle>Skills & Expertise</SectionTitle>
        </motion.div>

        <Card>
          <CardContent style={{ padding: "24px" }}>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillItem>
                    <SkillHeader>
                      <SkillName>{skill.name}</SkillName>
                      <SkillValue>{skill.level}%</SkillValue>
                    </SkillHeader>
                    <Progress value={skill.level} />
                  </SkillItem>
                </motion.div>
              ))}
            </SkillsGrid>
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <EducationCard>
            <CardContent style={{ padding: "24px" }}>
              <EducationTitle>Education</EducationTitle>
              <EducationContent>
                <EducationDetails>
                  <EducationName>Bachelor of Engineering Electronics And Communication</EducationName>
                  <EducationSchool>Government Engineering College Hassan</EducationSchool>
                </EducationDetails>
                <EducationDate>July 2019</EducationDate>
              </EducationContent>
            </CardContent>
          </EducationCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AchievementCard>
            <CardContent style={{ padding: "24px" }}>
              <AchievementTitle>Key Achievements</AchievementTitle>
              <AchievementContent>
                <AchievementIcon>🏆</AchievementIcon>
                <AchievementDetails>
                  <AchievementName>Award for Work Excellence</AchievementName>
                  <AchievementDescription>
                    Achieved an 'Award for Work Excellence' for outstanding contributions to the project.
                  </AchievementDescription>
                </AchievementDetails>
              </AchievementContent>
            </CardContent>
          </AchievementCard>
        </motion.div>
      </Container>
    </SkillsContainer>
  )
}
