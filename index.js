const express = require("express");
 
//import DB connection file
const DbConnection = require("./databaseConnectivity");
//importing db
const dotenv = require("dotenv");




//importing routes
const usersrouter = require("./routes/users.js");
const booksrouter = require("./routes/books.js"); 




const port = 8082;

//before starting server or app we need to check our database is connected securly
dotenv.config();//our database configurly correctly and should be before calling dbconnection
const app = express();

//calling function from databaseconnectivity
DbConnection();
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        message: "server is ready to run"
    });
});




app.listen(port, () => {
    console.log(`server started on port ${port}`);
})
app.use("/users", usersrouter);
 app.use("/books", booksrouter);

