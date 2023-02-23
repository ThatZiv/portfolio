import { Home } from "@mui/icons-material";
import React from "react";

// route declarations
const pages = [
    {
        label: "home", location: "",
        icon: "fa-sharp fa-solid fa-house",
        component: React.lazy(() => import("./Home"))
    }, // dynamic imports with react lazy and suspend force me to manually do this.
    {
        label: "portfolio", location: "portfolio",
        icon: "fa-solid fa-book-bookmark",
        component: React.lazy(() => import("./Portfolio"))
    },
    {
        label: "experience", location: "experience",
        icon: "fa-solid fa-star",
        component: React.lazy(() => import("./Experience"))
    }
]


export default pages;

/*
function loadComp(file) {
    return ((f) => React.lazy(() => import(f)))(file)
} */