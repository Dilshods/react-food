import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Retciep from "./components/Retciep";



function App() {
  return (
    <div>
      <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contents" component={Content} />
            <Route path="/category/:name" component={Category}/>
            <Route path="/meal/:id" component={Retciep} />
            <Route  component={NotFound}/>
          </Switch>  
        </main>
      <Footer />
    </div>
  );
}

export default App;
