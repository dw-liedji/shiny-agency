import DefaultPicture from '../../assets/profile.png'
import WomanPicture from '../../assets/woman.svg'

import Card from '../../components/Card'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: WomanPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: WomanPicture,
  },
  {
    name: 'Dagobert Liedji',
    jobTitle: 'Développeur creditium',
    picture: DefaultPicture,
  },
]

const Freelances = () => {
  return (
    <div>
      <StyledTitle>Trouvez votre prestataire.</StyledTitle>
      <TagLine>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </TagLine>
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
    </div>
  )
}

export default Freelances
