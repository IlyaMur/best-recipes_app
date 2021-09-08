import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Switch>
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contact} />
            <Route path="/category/:name" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
