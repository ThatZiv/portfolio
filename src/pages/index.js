import React from "react";

// route declarations
const pages = [
    { label: "home", location: "/", component: React.lazy(() => import("./Home")) }, // dynamic imports with react lazy and suspend force me to manually do this. according to ppl from the internet, if i wanted to import these from a separate file, i would have to modify my current webpack config, but i dont even have one - just the default one, so that means I would have to eject this project and ruin CRA. I could use react-rewire but man-oh-man its like 3 am and that seems like a little too much for me right now.
    { label: "portfolio", location: "/portfolio", component: React.lazy(() => import("./Portfolio")) }
]

export default pages;

/* @deprecated
function loadComp(file) {
    return ((f) => React.lazy(() => import(f)))(file)
} */