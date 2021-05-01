import './App.scss';
import Footer from './components/main_view/Footer';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainView from './components/main_view/MainView';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" component={MainView} /> 
        <Route path="/" component={Footer} /> 
      </Switch>  
    </Router>     
    </>
  );
}

export default App;
