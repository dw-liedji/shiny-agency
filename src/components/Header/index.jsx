import {Link} from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import darkLogo from '../../assets/shiny-logo-dark.png'

const StyledLogo = styled.img`
  width: 26rem;
  height: 9.7rem;
`
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 3rem;
  margin-bottom: 2rem;
  background: ${colors.navBackground};
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  color: ${colors.secondary};
  &:hover {
    color: white;
    transition: color 0.3s;
  }
  margin: 0 1rem;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const NavItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Header = () => {
  return (
    <NavContainer>
      <Link to="/">
        <StyledLogo src={darkLogo} />
      </Link>
      <NavItemContainer>
        <StyledLink $isFullLink={false} to="/">
          Accueil
        </StyledLink>
        <StyledLink $isFullLink={false} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink $isFullLink={true} to="/survey/1">
          Faire le test
        </StyledLink>
      </NavItemContainer>
    </NavContainer>
  )
}

export default Header
