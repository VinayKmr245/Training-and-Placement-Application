import React, { useState } from 'react'
import QuestionCard from './QuestionCard'
import questions_dummy_data from './questions-dummy-data'
import search from '../../../assets/logos/search_black_24dp.svg'
import classes from './DashboardHeader.module.css'
import classes1 from './Questions.module.css'

const Questions = () => {
  const [input, setInput] = useState('')

  const replaceHTMLTags = (str) => {
    str = str
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&nbsp;/g, ' ')
    return str.replace(/<\/?[^>]+(>|$)/g, '')
  }

  return (
    <div>
      <div className={classes['dashboard-search']}>
        <div className={classes['search-input']}>
          <input
            type='text'
            placeholder='Search Questions'
            onChange={(e) => {
              setInput(e.target.value)
            }}
          />
          <div className={classes['search-icon']}>
            <img src={search} alt='' />
          </div>
        </div>
      </div>

      <div className={classes1['question-scroll']}>
        {questions_dummy_data
          .filter((question) => {
            if (input === '') {
              return question
            } else if (
              question.title.toLowerCase().includes(input.toLowerCase())
            ) {
              return question
            }
            return null
          })
          .map((question) => (
            <QuestionCard
              //   key={index}
              id={question.id}
              title={question.title}
              description={replaceHTMLTags(question.description)}
              //   description={question.description}
              name={question.name}
              // date={item.createdAt}
              // tags={item.articleTags}
            />
          ))}
      </div>
    </div>
  )
}

export default Questions
