import "./App.css";
import {
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import { useStoreState } from "easy-peasy";

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
            </ul>
          </nav>

          <Box mt={8}>
            <Switch>
              <Route path="/:id" children={<About />} />
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
  return (
    <ul>
      {books.map(({ name }, i) => (
        <li key={name}>
          <Link to={`/${i}`}>
            Book {i}: {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function About() {
  let { id } = useParams();
  const book = useStoreState((state) => state.books.items[Number(id)]);
  return <h2>About: {book.name}</h2>;
}
