const express = require("express");
const app = express();
const path = require("path");


const port = 8080;

app.use(express.static(path.join(__dirname,"public/css")));

app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine" , "ejs");
app.set("views",path.join(__dirname, "/views"));

const instadata = require("./data.json");

app.get("/", (req, res) => {
    // Pass the available usernames to the home page for the directory
    const profiles = Object.keys(instadata);
    res.render("home.ejs", { profiles });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const data = instadata[username];
    
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.status(404).render("error.ejs", { message: "Profile not found" });
    }
});

// Global 404 Route
app.use((req, res) => {
    res.status(404).render("error.ejs", { message: "Page not found" });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});