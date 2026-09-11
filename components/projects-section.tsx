"use client"

import styled from "styled-components"
import { motion } from "framer-motion"
import { CalendarIcon, Github, Play } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/Card"
import { Button } from "./ui/Button"
import { Container } from "./ui/Container"
import { SectionTitle } from "./ui/SectionTitle"

const ProjectsContainer = styled.section`
  padding: 80px 0;
`

const ProjectsShowcase = styled.div`
  max-width: 720px;
  margin: 0 auto;
`

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => `${theme.primary}25`};
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 35px -10px ${({ theme }) => `${theme.primary}25`};
    border-color: ${({ theme }) => theme.primary};
  }
`

const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 280px;
  background-color: ${({ theme }) => theme.muted};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.04);
    }
  }
`

const FeaturedBadge = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primaryForeground};
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
`

const ProjectHeader = styled(CardHeader)`
  padding: 24px 24px 12px;
`

const ProjectHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`

const ProjectDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.mutedForeground};
  font-size: 0.875rem;
`

const ProjectContent = styled(CardContent)`
  padding: 0 24px 20px;
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${({ theme }) => `${theme.primary}15`};
  color: ${({ theme }) => theme.foreground};
  border: 1px solid ${({ theme }) => `${theme.primary}25`};
`

const ProjectFooter = styled(CardFooter)`
  display: flex;
  gap: 16px;
  padding: 0 24px 24px;
`

const projects = [
  {
    title: "Tower of Hanoi",
    description:
      "An interactive implementation of the classic Tower of Hanoi puzzle game with an auto-solver algorithm, move counter, and timer. Built with React and styled-components.",
    startDate: "03/01/23",
    endDate: "03/15/23",
    tags: ["React", "JavaScript", "Styled Components", "Game Development", "Algorithm Solver"],
    liveUrl: "https://tower-of-hanoi-vikasvps-projects.vercel.app/",
    githubUrl: "https://github.com/Vikas-VP/Tower-of-Hanoi",
    image: "/tower-of-hanoi.jpeg",
  },
]

export function ProjectsSection() {
  return (
    <ProjectsContainer id="projects">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionTitle>Featured Project</SectionTitle>
        </motion.div>

        <ProjectsShowcase>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard>
                <ProjectImageContainer>
                  <FeaturedBadge>Spotlight</FeaturedBadge>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                </ProjectImageContainer>
                <ProjectHeader>
                  <ProjectHeaderContent>
                    <CardTitle style={{ fontSize: "1.5rem" }}>{project.title}</CardTitle>
                    <ProjectDate>
                      <CalendarIcon size={16} />
                      <span>
                        {project.startDate} - {project.endDate}
                      </span>
                    </ProjectDate>
                  </ProjectHeaderContent>
                  <CardDescription style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {project.description}
                  </CardDescription>
                </ProjectHeader>
                <ProjectContent>
                  <TagsContainer>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagsContainer>
                </ProjectContent>
                <ProjectFooter>
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} style={{ marginRight: "8px" }} />
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Play size={16} style={{ marginRight: "8px" }} />
                      Live Demo
                    </Button>
                  )}
                </ProjectFooter>
              </ProjectCard>
            </motion.div>
          ))}
        </ProjectsShowcase>
      </Container>
    </ProjectsContainer>
  )
}
