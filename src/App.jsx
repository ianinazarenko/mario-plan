import NotFound from 'pages/NotFound'
import RouteGuard from 'pages/RouteGuard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import CreateProject from './pages/CreateProject'
import Dashboard from './pages/Dashboard'
import ProjectDetails from './pages/ProjectDetails'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <RouteGuard exact path={'/' || '/dashboard'}>
          <Dashboard />
        </RouteGuard>
        <RouteGuard path="/project-:id">
          <ProjectDetails />
        </RouteGuard>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup">
          <SignUp />
        </Route>
        <RouteGuard path="/create-project" component={CreateProject} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
