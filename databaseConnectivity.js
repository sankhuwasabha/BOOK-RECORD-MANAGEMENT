const mongoose = require("mongoose");
function DbConnection() {
    const DB_URL = process.env.MONGO_URI;
    mongoose.connect(DB_URL);
}
    //sometimes above gives mistake.if so go through this

    /* mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true


    }); 
    */
const db = mongoose.connection;//connect mongo db with mongoose
    
db.on("error", console.error.bind("connection error")); //shows error like message with red 
db.once("open", function () {
    console.log("Db Connected successfully");  //since we have to connect database at only one time
})    


module.exports = DbConnection;

