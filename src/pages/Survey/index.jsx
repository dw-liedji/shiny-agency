import React from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {Loader} from '../../utils/Atom'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 2rem;
`

const PrevNextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const QuestionNumber = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: #2f2e41;
`

const QuestionContent = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`
const StyledLink = styled(Link)`
  padding-top: 2rem 2rem;
  margin: 20px 20px;
`

const StyledHeading = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
`
const StyledText = styled.p`
  font-weight: 200;
  font-size: 2rem;
  color: #2f2e41;
`
const StyledButton = styled.button`
  background: #f9f9fc;
  border: 2px solid #5843e4;
  font-size: 2rem;
  border-radius: 31px;
  padding: 2.5rem 10rem;
  margin: 10px 15px;
`

const Survey = () => {
  const {questionNumber} = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  // useEffect(() => {
  //   setDataLoading(true)
  //   fetch(`http://localhost:8000/survey`).then((response) =>
  //     response
  //       .json()
  //       .then(({surveyData}) => {
  //         setSurveyData(surveyData)
  //         setDataLoading(false)
  //       })
  //       .catch((error) => console.log(error))
  //   )
  // }, [])

  useEffect(() => {
    async function fetchSurveyData() {
      try {
        setDataLoading(true)
        const response = await fetch(`http://localhost:8000/survey`)
        const {surveyData} = await response.json()
        setSurveyData(surveyData)
      } catch (error) {
        console.log(error)
      } finally {
        setDataLoading(false)
      }
    }

    fetchSurveyData()
  }, [])
  return (
    <SurveyContainer>
      <QuestionNumber>Question {questionNumberInt}</QuestionNumber>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumberInt]}</QuestionContent>
      )}
      <PrevNextContainer>
        <StyledButton>Oui</StyledButton>
        <StyledButton>Non</StyledButton>
      </PrevNextContainer>
      <PrevNextContainer>
        <StyledLink to={`/survey/${prevQuestionNumber}`}>Précédent</StyledLink>
        {surveyData[questionNumberInt + 1] ? (
          <StyledLink to={`/survey/${nextQuestionNumber}`}>Suivant</StyledLink>
        ) : (
          <StyledLink to="/results">Results</StyledLink>
        )}
      </PrevNextContainer>
    </SurveyContainer>
  )
}

export default Survey
