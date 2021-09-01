import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/pages/Home/Home'
import HomeDois from './pages/HomeDois/HomeDois'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dois" component={HomeDois} />
      </Switch>
    </BrowserRouter>
  )
}
