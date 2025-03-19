import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const UserProfile = () => {
  const { username } = useParams();
  return <h2>User Profile: {username}</h2>;
};

const NotFound = () => <h2>404 - Page Not Found</h2>;

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      <br />
      <button onClick={() => navigate("/profile/johndoe")}>Go to John Doe's Profile</button>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
