import styled from 'styled-components'
import colors from '../../utils/styles/colors'
import {ThemeContext} from '../../utils/utils/context'
import {useContext} from 'react'

function Footer() {
  const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
`

export default Footer
