import DefaultPicture from '../../assets/profile.png'
import WomanPicture from '../../assets/woman.svg'

import Card from '../../components/Card'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Loader} from '../../utils/Atom'

const Freelances = () => {
  const [isDataLoading, setDataLoading] = useState(false)
  const [freelanceProfiles, setFreelanceProfiles] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchFreelancesProfiles() {
      try {
        setDataLoading(true)
        const response = await fetch('http://localhost:8000/freelances')
        const {freelancersList} = await response.json()
        setFreelanceProfiles(freelancersList)
        setError(false)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelancesProfiles()
  }, [])

  return (
    <FreelanceContainer>
      <StyledTitle>Trouvez votre prestataire.</StyledTitle>
      <TagLine>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </TagLine>
      {isDataLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {freelanceProfiles.map((profile, index) => (
            <StyledLink to={`/freelanceDetails/${index}`}>
              <Card
                key={`${profile.name}-${index}`}
                label={profile.jobTitle}
                picture={profile.picture}
                title={profile.name}
              />
            </StyledLink>
          ))}
        </CardsContainer>
      )}
      {error && <p>Oups..., sorry an error occurred.</p>}
    </FreelanceContainer>
  )
}

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
`

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  text-align: center;
  color: #2f2e41;
`

const TagLine = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  color: #8186a0;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 54px;
  padding-left: 35rem;
  padding-right: 35rem;
  justify-items: center;
  align-content: center;
  justify-content: center;
`

const FreelanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Freelances
