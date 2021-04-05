import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import Partners from "./Partners"
import logo from "../Images/logo.png"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import "../styles.css"
import AboutUs from "./AboutUs";

const Header = () => {
  return (
    <div className="main-header">
      <img src={logo} style={{ height: "80px", width: "80px" }}></img>&nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ fontSize: "xx-large" }}>Techno Hub</span>&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/Home"><button>Home</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/partners"><button>Partners</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/aboutus"><button>About Us</button></Link>
      <div style={{ float: "right", position: "relative", top: "15px" }}>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/Signup"><button>Signup</button></Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  );
};

export default Header;
