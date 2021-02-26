import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <Container>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <ReposGrid />
        </Grid>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

function About() {
  return <h2>About</h2>;
}
