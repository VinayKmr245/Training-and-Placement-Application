import React from 'react'
import Account from './Account'
import Analytics from './Analytics'
import DashBoardPosts from './DashBoardPosts'
import Companies from './Companies'
import Questions from './Questions'
import { Switch, Route } from 'react-router-dom'
import Doubts from './Doubts'
import Alumni from './Alumni'
import QuestionPost from './QuestionPost'
const DashBoardPages = () => {
  return (
    <div style={{ width: '100%' }}>
      <Switch>
        <Route path='/dashboard/account' exact>
          <Account />
        </Route>
        <Route path='/dashboard/analytics' exact>
          <Analytics />
        </Route>
        <Route path='/dashboard/companies' exact>
          <Companies />
        </Route>
        <Route path='/dashboard/alumni' exact>
          <Alumni />
        </Route>
        <Route path='/dashboard/doubts' exact>
          <Doubts />
        </Route>
        <Route path='/dashboard/previous-year-questions/:questionId' exact>
          <QuestionPost />
        </Route>
        <Route path='/dashboard/previous-year-questions' exact>
          <Questions />
        </Route>

        <Route path='/dashboard/account/:UserName' exact>
          <Account />
        </Route>
        <Route path='/dashboard/analytics/:UserName' exact>
          <Analytics />
        </Route>
        <Route path='/dashboard/companies/:UserName' exact>
          <Companies />
        </Route>
        <Route path='/dashboard/alumni/:UserName' exact>
          <Alumni />
        </Route>
        <Route path='/dashboard/doubts/:UserName' exact>
          <Doubts />
        </Route>
        <Route path='/dashboard/previous-year-questions/:questionId/:UserName' exact>
          <QuestionPost />
        </Route>
        <Route path='/dashboard/previous-year-questions/:UserName' exact>
          <Questions />
        </Route>
        <Route path='/dashboard/:UserName'>
          <DashBoardPosts />
        </Route>

        <Route path='/dashboard'>
          <DashBoardPosts />
        </Route>
      </Switch>
    </div>
  )
}

export default DashBoardPages
