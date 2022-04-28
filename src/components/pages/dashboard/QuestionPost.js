import React from 'react'
import { useParams } from 'react-router'
import questions_dummy_data from './questions-dummy-data.js'
import classes from './QuestionPost.module.css'
import classes1 from './Questions.module.css'

const QuestionPost = () => {
  const { questionId } = useParams()
  console.log(questionId)
  // let post = questions_dummy_data.filter((question)=>(
  //   if(question.id === questionId){
  //     return question
  //   }
  //     return null
  // ))
  return (
    <div className={classes1['question-scroll']}>
      {questions_dummy_data
        .filter((question) => {
          if (question.id === questionId) {
            return question
          }
          return null
        })
        .map((question) => (
          <div className={classes['question-post']}>
            <h2>{question.title}</h2>
            <p>{question.description}</p>
          </div>
        ))}
    </div>
  )
}

export default QuestionPost
