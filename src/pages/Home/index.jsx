import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import resume from '../../assets/Resume.svg'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min'

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 9rem;
`

const HeroContent = styled.div``

const HeroTagLine = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 5rem;
  line-height: 1.6;
  margin-bottom: 5rem;
  color: #2f2e41;
`
const TestLink = styled(NavLink)`
  text-decoration: none;
  background: ${colors.primary};
  border-radius: 29px;
  padding: 1rem 6.8rem;
  color: white;
  border: 0;
`
const HeroImage = styled.img`
  width: 100%;
  height: 50.6rem;
`
const Home = () => {
  return (
    <Hero>
      <HeroContent>
        <HeroTagLine>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </HeroTagLine>
        <TestLink to="/survey/1">Faire le Test</TestLink>
      </HeroContent>
      <HeroImage src={resume} />
    </Hero>
  )
}

export default Home
