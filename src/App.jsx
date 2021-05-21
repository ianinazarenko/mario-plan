import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import CreateProject from './pages/CreateProject'
import Dashboard from './pages/Dashboard'
import ProjectDetails from './pages/ProjectDetails'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import store from './store/store'

function App() {
  console.log(store.getState())
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={'/' || '/dashboard'}>
          <Dashboard />
        </Route>
        <Route path='/project-:id'>
          <ProjectDetails />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/create-project'>
          <CreateProject />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
