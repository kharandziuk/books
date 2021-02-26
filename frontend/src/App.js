import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Box, Grid } from "@material-ui/core";
import { useStoreState, useStoreActions } from "easy-peasy";

export default function App() {
  return (
    <Router>
      <Container>
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

          <Box mt={8}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Box>
        </div>
      </Container>
    </Router>
  );
}

function Home() {
  const books = useStoreState((state) => state.books.items);
  console.log(books);
  return (
    <ul>
      {books.map(({ name }, i) => (
        <li key={name}>
          Book {i}: {name}
        </li>
      ))}
    </ul>
  );
}

function About() {
  return <h2>About</h2>;
}
