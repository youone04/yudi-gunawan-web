import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home , Detail } from './containers';
import { Provider} from 'react-redux';
import store from './config/redux/store/index';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div>
        <Route path='/detail' exact component={Detail} />
        <Route path="/" component={Home} />
    </div>
  </Router>
  </Provider>
  );
}

export default App;
