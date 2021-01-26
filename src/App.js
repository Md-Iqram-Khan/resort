 import './App.css';

 import Home from './pages/Home'
 import Room from './pages/Room'
 import SingleRoom from './pages/SingleRoom'
 import Error from './pages/Error'

 import {Route, Switch} from 'react-router-dom'

 import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/room/" exact component={Room}/>
      <Route path="/rooms/:slug" exact component={SingleRoom}/>
      <Route component={Error}/>
    </Switch>
     </>
  );
}

export default App;
