import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainView from './components/main_view/MainView';
import Header from './components/main_view/Header';
import Nav from './components/main_view/Nav';
import WelcomeScreen from './components/main_view/WelcomeScreen';
import About from './components/views/about_me/About';
import Resume from './components/views/resume/Resume';
import Projects from './components/views/projects/Projects';
import Contact from './components/views/contact/Contact';
import Footer from './components/main_view/Footer';

function App() {
  return (    
    <>
      <Router>
        <Switch>     
          <Route path="/" component={MainView} />          
          <Route path="/header" component={Header} />
          <Route path="/nav" component={Nav} />
          <Route path="/welcomeScreen" component={WelcomeScreen} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/footer" component={Footer} />
        </Switch> 
      </Router>      
    </>
  );
}

export default App;
