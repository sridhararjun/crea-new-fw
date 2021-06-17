import './App.css';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Landing from "./components/LandingComponent/landing"
// import Site from "./components/SiteComponent/site"
import ContactUs from './components/ContactUs/ContactUs'

function App() {
  return (
    <main>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact/>
        <Route path="/site" component={ContactUs} exact/>
      </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
