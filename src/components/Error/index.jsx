import styled from 'styled-components'
import errorImage from '../../assets/page_not_found.svg'

const TextError = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  margin: 3rem 0rem;
  color: #2f2e41;
  line-height: 36px;
`
const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
`
const ErrorImage = styled.img`
  width: 870px;
  height: 470px;
`
const Error = () => {
  return (
    <ErrorContainer>
      <TextError>Oups...</TextError>
      <ErrorImage src={errorImage} alt="page not found image" />
      <TextError>Il semblerait qu’il y ait un problème</TextError>
    </ErrorContainer>
  )
}

export default Error
