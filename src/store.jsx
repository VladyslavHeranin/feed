import React, { useEffect } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Login } from "./components/login/Login.jsx"
import { Header } from "./components/navigation-and-search-components/header.jsx"
import "materialize-css"
import { useDispatch, useSelector } from "react-redux"
import { Auth } from "./actions/user"
import { Users } from "./components/lists/users"
import { NavCreatePost } from "./components/navigation-and-search-components/navCreatePost"
import { useState } from "react"



function Store() {
    return   [ {
                name: "NASA",
                link: "https://www.nasa.gov/rss/dyn/breaking_news.rss"
            },
            {
                name: "CNN-edition",
                link: "http://rss.cnn.com/rss/edition.rss"
            },
            {
                name: "CNN-world",
                link: "http://rss.cnn.com/rss/edition_world.rss"
            } ]
}

export default Store;
