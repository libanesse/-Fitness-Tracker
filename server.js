// Initail Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Setting up Express

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static("public"));


let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useFindAndModify: false
});

// Routes

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`)
});