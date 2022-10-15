import Home from "./Home";
import Portfolio from "./Portfolio";

// route declarations
const pages = [
    { label: "home", location: "/", component: <Home /> },
    { label: "portfolio", location: "/portfolio", component: <Portfolio /> }
]

export default pages;