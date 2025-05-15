"use client"

import { useEffect, useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"
import { Button } from "./ui/Button"
import { Github, GitBranch, Star } from "lucide-react"
import { Container } from "./ui/Container"
import { SectionTitle } from "./ui/SectionTitle"

const GithubSectionContainer = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) =>
    theme.background === "#ffffff" ? "rgba(241, 245, 249, 0.3)" : "rgba(30, 41, 59, 0.3)"};
`

const GithubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

const GithubProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`

const GithubUsername = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
`

const ReposGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const RepoCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const RepoHeader = styled(CardHeader)`
  padding-bottom: 8px;
`

const RepoTitle = styled(CardTitle)`
  font-size: 1.25rem;
  
  a {
    color: ${({ theme }) => theme.foreground};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`

const RepoContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RepoLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const LanguageColor = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`

const RepoStats = styled.div`
  display: flex;
  gap: 16px;
`

const RepoStat = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
`

const SkeletonCard = styled(Card)`
  height: 100%;
`

const SkeletonHeader = styled(CardHeader)`
  padding-bottom: 8px;
`

const SkeletonTitle = styled.div`
  height: 24px;
  width: 75%;
  background-color: ${({ theme }) => theme.muted};
  border-radius: 4px;
  margin-bottom: 8px;
`

const SkeletonDescription = styled.div`
  height: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.muted};
  border-radius: 4px;
`

const SkeletonContent = styled(CardContent)`
  display: flex;
  justify-content: space-between;
`

const SkeletonLanguage = styled.div`
  height: 16px;
  width: 80px;
  background-color: ${({ theme }) => theme.muted};
  border-radius: 4px;
`

const SkeletonStats = styled.div`
  display: flex;
  gap: 16px;
`

const SkeletonStat = styled.div`
  height: 16px;
  width: 60px;
  background-color: ${({ theme }) => theme.muted};
  border-radius: 4px;
`

interface GithubRepo {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

const getLanguageColor = (language: string | null): string => {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
  }

  return colors[language || ""] || "#6e7681"
}

export function GithubSection() {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Vikas-VP/repos")
        if (response.ok) {
          const data = await response.json()
          setRepos(data.slice(0, 4))
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <GithubSectionContainer id="github">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <SectionTitle>GitHub Projects</SectionTitle>
        </motion.div>

        <GithubHeader>
          <GithubProfile>
            <Github size={32} color="#14b8a6" />
            <GithubUsername>Vikas-VP</GithubUsername>
          </GithubProfile>
          <Button
            as="a"
            href="https://github.com/Vikas-VP"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            <Github size={20} style={{ marginRight: "8px" }} />
            View GitHub Profile
          </Button>
        </GithubHeader>

        <ReposGrid>
          {loading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <SkeletonCard key={index}>
                    <SkeletonHeader>
                      <SkeletonTitle />
                      <SkeletonDescription />
                    </SkeletonHeader>
                    <SkeletonContent>
                      <SkeletonLanguage />
                      <SkeletonStats>
                        <SkeletonStat />
                        <SkeletonStat />
                      </SkeletonStats>
                    </SkeletonContent>
                  </SkeletonCard>
                ))
            : repos.map((repo) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <RepoCard>
                    <RepoHeader>
                      <RepoTitle>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          {repo.name}
                        </a>
                      </RepoTitle>
                      <CardDescription>{repo.description || "No description provided"}</CardDescription>
                    </RepoHeader>
                    <RepoContent>
                      <RepoLanguage>
                        <LanguageColor color={getLanguageColor(repo.language)} />
                        <span>{repo.language || "Unknown"}</span>
                      </RepoLanguage>
                      <RepoStats>
                        <RepoStat>
                          <Star size={16} />
                          <span>{repo.stargazers_count}</span>
                        </RepoStat>
                        <RepoStat>
                          <GitBranch size={16} />
                          <span>{repo.forks_count}</span>
                        </RepoStat>
                      </RepoStats>
                    </RepoContent>
                  </RepoCard>
                </motion.div>
              ))}
        </ReposGrid>
      </Container>
    </GithubSectionContainer>
  )
}
