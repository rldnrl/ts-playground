import type { NextPage } from 'next'
import CodeEditor from '@components/CodeEditor'
import styled from '@emotion/styled'

const Home: NextPage = () => {

  return (
    <HomeContainer>
      <Title>TypeScript PlayGround</Title>
      <CodeEditor />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  padding: 1rem;
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 1.5rem;
  font-weight: 700;
`

export default Home
