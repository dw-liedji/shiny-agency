import DefaultPicture from '../../assets/profile.png'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

const CardTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 3rem;
  /* identical to box height */
  color: #000000;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({label, title = 'This is the default title', picture}) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.prototype = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  lable: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
