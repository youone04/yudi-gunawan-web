import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Home , Detail ,SeeAll, Kontak , ListApps } from './containers';
import { Provider} from 'react-redux';
import store from './config/redux/store/index';

function App() {
  return (
    <Provider store={store}>
    <Router >
    <div>
        <Route  path='/' exact component={Home} />
        <Route path='/detail' component={Detail} />
        <Route path='/see-all' component={SeeAll}/>
        <Route path='/kontak' component={Kontak} />
        <Route path='/list-apps' component={ListApps} />
    </div>
  </Router>
  </Provider>
  );
}

export default App;
