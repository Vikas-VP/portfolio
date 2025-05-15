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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`

const ProjectHeader = styled(CardHeader)``

const ProjectHeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const ProjectDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.mutedForeground};
  font-size: 0.875rem;
`

const ProjectContent = styled(CardContent)`
  flex-grow: 1;
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
  background-color: ${({ theme }) => `${theme.primary}10`};
  color: ${({ theme }) => theme.foreground};
  border: 1px solid ${({ theme }) => theme.border};
`

const ProjectFooter = styled(CardFooter)`
  display: flex;
  gap: 12px;
`

const projects = [
  {
    title: "Tower of Hanoi",
    description:
      "An interactive implementation of the classic Tower of Hanoi puzzle game with an auto-solver feature, move counter, and timer. Built with React and styled-components.",
    startDate: "03/01/23",
    endDate: "03/15/23",
    tags: ["React", "JavaScript", "Styled Components", "Game Development"],
    liveUrl: "https://tower-of-hanoi-vikasvps-projects.vercel.app/",
    image: "/tower-of-hanoi.jpeg",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing my skills, experience, and projects. Built with Next.js and styled-components.",
    startDate: "05/01/23",
    endDate: "05/15/23",
    tags: ["Next.js", "React", "Styled Components", "Framer Motion"],
    githubUrl: "https://github.com/Vikas-VP/portfolio",
    image: "/placeholder-l6m2r.png",
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
          <SectionTitle>Projects</SectionTitle>
        </motion.div>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard>
                <ProjectImageContainer>
                  <img src={project.image || "/placeholder.svg"} alt={project.title} />
                </ProjectImageContainer>
                <ProjectHeader>
                  <ProjectHeaderContent>
                    <CardTitle>{project.title}</CardTitle>
                    <ProjectDate>
                      <CalendarIcon size={16} />
                      <span>
                        {project.startDate} - {project.endDate}
                      </span>
                    </ProjectDate>
                  </ProjectHeaderContent>
                  <CardDescription>{project.description}</CardDescription>
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
        </ProjectsGrid>
      </Container>
    </ProjectsContainer>
  )
}
