import styled from 'styled-components'
import EllipseIcon from '../../assets/Ellipse.png'
import woman from '../../assets/woman.svg'

const FreelanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8rem 5rem;
  background: #f9f9fc;
`
const FreelanceImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 103px;
  margin: 0rem 11rem;
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 31px;
  line-height: 36px;
  margin-bottom: 2px;
  /* identical to box height */
  color: #2f2e41;
`
const Profession = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 29px;
  color: #2f2e41;
`

const StyledButton = styled.span`
  width: 73px;
  height: 33px;
  padding: 1.3rem 1.7rem;
  margin: 0px 12px;
  border: 1px solid #000000;
  border-radius: 8px;
`
const SkillsContainer = styled.div`
  text-decoration: none;
  margin-bottom: 2rem;
`
const Status = styled.img`
  width: 13px;
  height: 13px;
  background: #57b894;
  border-radius: 6px;
  margin: 0px 10px;
`
const StatusTagLine = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 19px;
  color: #2f2e41;
  margin-bottom: 0px;
`
const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Salary = styled.p`
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.6rem;
  text-align: center;
  color: #2f2e41;
  margin-top: 20px;
`
const FreelanceDetails = () => {
  return (
    <FreelanceContainer>
      <FreelanceImage src={woman} alt="freelance status image" />
      <DetailContainer>
        <Name>Dagobert Liedji</Name>
        <Profession>Développeuse Fullstack</Profession>
        <SkillsContainer>
          <StyledButton>Figma</StyledButton>
          <StyledButton>React</StyledButton>
          <StyledButton>Node</StyledButton>
        </SkillsContainer>
        <StatusContainer>
          <Status src={EllipseIcon} alt="status image" />
          <StatusTagLine>Disponible maintenant</StatusTagLine>
        </StatusContainer>
        <Salary>550 € / jour</Salary>
      </DetailContainer>
    </FreelanceContainer>
  )
}
export default FreelanceDetails
