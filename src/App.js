import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Home , Detail } from './containers';

function App() {
  return (
    <Router>
    <div>
        <Route path='/detail' exact component={Detail} />
        <Route path="/" component={Home} />
    </div>
  </Router>
  );
}

export default App;
