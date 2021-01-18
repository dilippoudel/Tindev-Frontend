import { Switch, Route } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Login from './pages/Login'
import PWReset from './pages/PWReset'
import Landing from './pages/Landing'
import Register from './pages/Register'
import AuthApp from './components/AuthApp'
import ViewJobseeker from './pages/ViewJobseeker'
import EditJobPost from './pages/EditJobPost'
import AddJobPost from './components/AddJobPost'

const Routes = () => (
  <Route
    render={({ location }) => (
      <TransitionGroup className="app">
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset-password" component={PWReset} />
            <Route
              exact
              path="/match/view/applicant/:id"
              component={ViewJobseeker}
            />
            <Route exact path="/user/profile" component={AuthApp} />
            <Route exact path="/company/jobpost/:id" component={EditJobPost} />
            <Route exact path="/company/jobpost" component={AddJobPost} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
  />
)

export default Routes
