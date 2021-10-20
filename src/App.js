import './app.sass';

import { NavLink, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <main>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />

      <Redirect to='/' />
    </main>
  );
}

export default App;
